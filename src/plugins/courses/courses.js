//学在浙大待办事项功能

const PLUGIN_PREFIX = "[ZJU XZZD TODO URL]";
// 主动请求待办事项的 API 数据
export function fetchTodoData() {
    const apiUrl = '/api/todos?no-intercept=true';
    console.log(`${PLUGIN_PREFIX} Fetching data from ${apiUrl}`);

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(`${PLUGIN_PREFIX} Received API Response:`, data);

            // 检查 data.todo_list 是否是数组，并处理API数据
            if (data && Array.isArray(data.todo_list)) {
                processTodoListFromAPI(data.todo_list); // 处理API中的todo_list

                // 加入延时处理，确保页面完全加载
                setTimeout(() => {
                    console.log(`${PLUGIN_PREFIX} Re-checking todos after delay...`);
                    processTodoListFromAPI(data.todo_list); // 再次处理待办事项
                }, 2000);  // 2秒延时
            } else {
                console.error(`${PLUGIN_PREFIX} API todo_list is missing or not an array:`, data);
            }
        })
        .catch(error => {
            console.error(`${PLUGIN_PREFIX} Error fetching API data:`, error);
        });
}

// 处理从 API 获取的待办事项列表
export function processTodoListFromAPI(todoList) {
    console.log(`${PLUGIN_PREFIX} Processing API Data`);

    // 观察页面上的 DOM，等待待办事项加载
    const observer = new MutationObserver(() => {
        const todoListDom = document.querySelector(".latest-todo-list.card.gtm-label");
        if (todoListDom) {
            console.log(`${PLUGIN_PREFIX} Found .latest-todo-list! Processing todos...`);

            // 遍历 API 数据并应用到页面中的待办事项
            todoList.forEach(activity => {
                const activityTitle = activity.title;
                const courseId = activity.course_id;
                const activityId = activity.id;

                console.log(`${PLUGIN_PREFIX} Processing activity: ${activityTitle} (Course ID: ${courseId}, Activity ID: ${activityId})`);

                // 匹配页面中的待办事项标题
                document.querySelectorAll('a[ng-click="openActivity(todoData)"]').forEach((linkElement) => {
                    const titleElement = linkElement.querySelector('span[ng-bind="todoData.title"]');
                    if (titleElement) {
                        const pageTitle = titleElement.textContent.trim();
                        // console.log(`${PLUGIN_PREFIX} Found todo item in page with title: ${pageTitle}`);

                        // 比较 API 返回的 title 和页面中的 title
                        if (pageTitle === activityTitle.trim()) {
                            console.log(`${PLUGIN_PREFIX} Title matched: ${activityTitle}`);

                            // 构造正确的跳转链接
                            const targetUrl = `https://courses.zju.edu.cn/course/${courseId}/learning-activity#/${activityId}`;
                            linkElement.setAttribute('href', targetUrl);
                            linkElement.setAttribute('target', '_blank'); // 可选：在新标签页中打开
                            console.log(`${PLUGIN_PREFIX} Link updated for activity: ${activityTitle} -> ${targetUrl}`);
                        }
                    }
                });
            });

            // 停止观察
            observer.disconnect();
        }
    });

    // 观察整个页面的 DOM 变化，直到找到 .latest-todo-list
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// 直接观察待办事项部分的 DOM 变化
export function observeTodoList() {
    const observer = new MutationObserver(() => {
        const todoListDom = document.querySelector(".latest-todo-list.card.gtm-label");
        if (todoListDom) {
            console.log(`${PLUGIN_PREFIX} .latest-todo-list is loaded and ready for processing.`);
            observer.disconnect(); // 停止观察
        }
    });

    // 观察整个页面的 DOM 变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}