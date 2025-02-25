(()=>{"use strict";const e=document.createElement("div");e.style="margin:0;padding:12px;width:200px;height:5vh;position:fixed;top:10%;right:1%;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const t=document.createElement("div");t.style="margin:0;padding:12px;width:125px;height:15vh;position:fixed;top:15%;right:0;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const o=document.createElement("p");o.style="padding:5px 0;cursor:pointer;text-decoration:underline;";const n=document.createElement("div");n.id="batch-container",n.style.position="fixed",n.style.bottom="10px",n.style.right="10px",n.style.backgroundColor="white",n.style.padding="15px",n.style.border="1px solid #ccc",n.style.zIndex=9999,n.style.maxHeight="80%",n.style.overflowY="auto",n.style.fontSize="14px",n.style.lineHeight="1.5",n.style.boxShadow="0 0 10px rgba(0,0,0,0.1)",n.style.borderRadius="5px",n.style.width="320px",n.style.transition="all 0.3s ease",n.style.backgroundColor="rgba(255, 255, 255, 0.95)",n.style.display="flex",n.style.flexDirection="column";const l=n,c=document.createElement("div");c.style.display="flex",c.style.justifyContent="space-between",c.style.alignItems="center",c.style.cursor="default",c.style.marginBottom="10px";const s=c,i=document.createElement("button");i.innerText="—",i.style.border="none",i.style.background="none",i.style.cursor="pointer",i.style.fontSize="16px",i.style.lineHeight="1",i.style.padding="0",i.style.marginLeft="10px",i.title="最小化";const r=i,a=document.createElement("button");a.innerText="下载选中视频",a.style.display="block",a.style.marginTop="10px",a.style.width="100%",a.style.padding="8px",a.style.backgroundColor="#4CAF50",a.style.color="white",a.style.border="none",a.style.borderRadius="3px",a.style.cursor="pointer",a.style.fontSize="14px";const d=a,u=document.createElement("div");u.style.marginTop="10px",u.style.fontSize="12px",u.style.color="#555";const h=u,g=document.createElement("div");g.style.width="100%",g.style.backgroundColor="#f3f3f3",g.style.borderRadius="5px",g.style.marginTop="10px",g.style.display="none";const p=g,m=document.createElement("div");m.style.width="0%",m.style.height="20px",m.style.backgroundColor="#4CAF50",m.style.borderRadius="5px";const y=m,b=document.createElement("ul");b.style.listStyle="none",b.style.padding="0",b.style.marginTop="10px";const f=b,x=document.createElement("li");x.style.marginTop="10px",x.style.display="block",x.style.borderBottom="1px solid #ddd",x.style.paddingBottom="10px";const w=x,v=document.createElement("div");v.style.display="flex",v.style.alignItems="center";const k=v,E=document.createElement("div");E.style.width="100%",E.style.backgroundColor="#f3f3f3",E.style.borderRadius="5px",E.style.marginTop="5px",E.style.display="none";const C=E,T=document.createElement("div");T.style.width="0%",T.style.height="10px",T.style.backgroundColor="#4CAF50",T.style.borderRadius="5px";const S=T,L=document.createElement("div");L.style.marginTop="5px",L.style.fontSize="12px",L.style.color="#555",L.style.display="none",L.innerText="速度: 0 KB/s | 预计剩余时间: 0 s";const I=L,z=()=>{!function(){console.log("智云课堂批量下载脚本已启动");const e=function(e){const t=window.location.search.substring(1).split("&");for(let o=0;o<t.length;o++){const n=t[o].split("=");if(n[0]===e)return decodeURIComponent(n[1]);if(decodeURIComponent(n[0])===e)return decodeURIComponent(n[1])}return!1}("course_id");if(!e)return void console.log("course_id not found");console.log(`课程ID: ${e}`);const t=`https://classroom.zju.edu.cn/courseapi/v2/course/catalogue?course_id=${e}`;function o(e){const t=document.querySelector("#batch-container");if(t)if(0===e){const e=t.querySelectorAll(".videoCheckbox");e?(e.forEach((e=>{e.disabled||(e.disabled=!0)})),console.log("checkboxes复选框已全部被禁止点击")):console.log("fail to get checkboxes")}else{if(1!==e)return void console.log("flag类型错误");{const e=t.querySelectorAll(".videoCheckbox");e?(e.forEach((e=>{e.disabled&&(e.disabled=!1)})),console.log("checkboxes复选框已全部允许点击")):console.log("fail to get checkboxes")}}else console.log("fail to get batch-container")}console.log(`API URL: ${t}`),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>(console.log("API响应状态:",e.status),e.json()))).then((e=>{if(console.log("API响应数据:",e),e.success&&e.result&&e.result.data){const t=e.result.data;console.log(`获取到的课程目录项数量: ${t.length}`);const n=[];for(let e=0;e<t.length;e++){const o=t[e];let l=o.title,c=null,s=!0;try{const t=JSON.parse(o.content);console.log(`解析第${e+1}项的content字段成功`),t.playback&&t.playback.url?(c=t.playback.url,console.log(`第${e+1}项视频URL: ${c}`)):t.url?(c=t.url,console.log(`第${e+1}项视频URL: ${c}`)):(s=!1,console.log(`第${e+1}项没有可用的视频URL`))}catch(t){console.error(`解析第${e+1}项的content字段失败:`,t),s=!1}s&&c||(l+="（暂无回放）"),n.push({title:l,videoUrl:c,available:s,originalIndex:e})}console.log(`可下载的视频数量: ${n.filter((e=>e.available)).length}`),function(e){console.log("正在添加批量下载的用户界面");const t=l,o=s,n=document.createElement("div");n.style.fontWeight="bold",n.innerText="批量下载视频",o.appendChild(n);const c=r;c.addEventListener("click",(()=>{t.classList.contains("minimized")?(t.classList.remove("minimized"),i.style.display="flex",g.style.display="block",b.style.display="block",m.style.display="block",v.style.display="block",c.innerText="—",c.title="最小化",console.log("恢复下载界面")):(t.classList.add("minimized"),i.style.display="none",g.style.display="none",b.style.display="none",m.style.display="none",v.style.display="none",c.innerText="+",c.title="恢复",console.log("最小化下载界面"))})),o.appendChild(c),t.appendChild(o);const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.marginBottom="10px";const a=document.createElement("input");a.type="checkbox",a.id="selectAllCheckbox";const u=document.createElement("label");u.htmlFor="selectAllCheckbox",u.innerText=" 全选",i.appendChild(a),i.appendChild(u),t.appendChild(i);const g=d;g.addEventListener("mouseover",(()=>{g.disabled||(g.style.backgroundColor="#45a049")})),g.addEventListener("mouseout",(()=>{g.disabled||(g.style.backgroundColor="#4CAF50")})),t.appendChild(g);const m=h;t.appendChild(m);const b=p;t.appendChild(b);const x=y,v=f;t.appendChild(v),e.forEach(((e,t)=>{const o=w,n=k,l=document.createElement("input");l.type="checkbox",l.value=e.originalIndex,l.className="videoCheckbox",l.style.marginRight="10px",e.available||(l.disabled=!0);const c=document.createElement("label");c.style.flex="1",c.style.cursor="pointer",c.innerText=e.title,n.appendChild(l),n.appendChild(c),o.appendChild(n);const s=C,i=S;s.appendChild(i);const r=I;o.appendChild(s),o.appendChild(r),v.appendChild(o),e.domRef={listItem:o,progressBar:i,infoDiv:r},console.log(e)})),document.body.appendChild(t),console.log("批量下载界面已添加到页面"),a.addEventListener("change",(function(){t.querySelectorAll(".videoCheckbox").forEach((e=>{e.disabled||(e.checked=this.checked)})),console.log(`全选复选框状态改变为: ${this.checked}`)})),g.addEventListener("click",(function(){console.log("下载按钮被点击"),m.innerText="开始下载...",a.disabled=!0,console.log("selectAllCheckbox全选复选框已被禁止点击");const o=t.querySelectorAll(".videoCheckbox"),n=[];if(o.forEach((t=>{if(t.checked){const o=parseInt(t.value);n.push({video:e[o],index:e[o].domRef})}t.disabled=!0})),console.log("checkboxes复选框已全部被禁止点击"),0===n.length)return alert("请选择要下载的视频"),m.innerText="",void console.log("未选择任何视频进行下载");console.log(`选中的视频数量: ${n.length}`),n.forEach(((e,t)=>{console.log(`准备下载 (${t+1}/${n.length}): ${e.video.title} - ${e.video.videoUrl}`)})),g.disabled=!0,g.innerText="下载中...",g.style.backgroundColor="#888",g.style.cursor="not-allowed",console.log("下载按钮已禁用，文本已更改为 '下载中...'"),b.style.display="block",x.style.width="0%",console.log("显示整体进度条");let l=0,c=0;!function e(){if(l<n.length){const t=n[l];console.log(t);const o=t.video;console.log(o);const{listItem:s,progressBar:i,infoDiv:r}=o.domRef;console.log(t.dom);const a=s.querySelector("div:nth-child(2)");if(!s||!i||!r)return console.error("错误：未找到listItem。"),l++,void e();m.innerText=`正在下载 (${l+1}/${n.length}): ${o.title}`,console.log(`开始下载 (${l+1}/${n.length}): ${o.title} - ${o.videoUrl}`),a.style.display="block",r.style.display="block";const d=new XMLHttpRequest,u=""+o.videoUrl;console.log(`下载链接: ${u}`),d.open("GET",u,!0),d.responseType="blob";let h=Date.now();d.onprogress=function(e){if(e.lengthComputable){const t=(e.loaded/e.total*100).toFixed(2);i.style.width=t+"%";const o=(Date.now()-h)/1e3,n=e.loaded,l=o>0?(n/o/1024).toFixed(2):"0",c=e.total-e.loaded,s=l>0?(c/1024/l).toFixed(2):"0";r.innerText=`速度: ${l} KB/s | 预计剩余时间: ${s} s`}},d.onload=function(){if(200===d.status||206===d.status){const e=d.response,t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=o.title.replace(/[\/\\:*?"<>|]/g,"_")+".mp4",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t),console.log(`下载已启动 (${o.title}): ${n.download}`)}else console.error(`下载失败 (${o.title}): 状态码 ${d.status}`),alert(`下载失败: ${o.title} （状态码 ${d.status}）`);c++,console.log(`完成下载: ${o.title} (${c}/${n.length})`);const t=(c/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,console.log("currentDownload is ${currentDownload}"),e()},d.onerror=function(){console.error(`下载失败 (${o.title}): 网络错误`),alert(`下载失败: ${o.title} （网络错误）`),c++,console.log(`下载错误处理: ${o.title} (${c}/${n.length})`);const t=(c/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,setTimeout(e,1e3)},console.log(`发送XHR请求 (${o.title})`),d.send()}else m.innerText="所有下载已完成！请查看浏览器的下载管理器。",console.log("所有下载已完成"),setTimeout((()=>{b.style.display="none",console.log("隐藏整体进度条")}),5e3),g.disabled=!1,g.innerText="下载选中视频",g.style.backgroundColor="#4CAF50",g.style.cursor="pointer",console.log("恢复下载按钮状态"),t.querySelectorAll(".videoCheckbox").forEach((e=>{e.disabled=!1})),a.disabled=!1}()}))}(n),chrome.storage.sync.get("showDiv",(({showDiv:e})=>{console.log(e),e?(function(){document.body.insertAdjacentHTML("beforeend",'\n    <div id="copyright-declaration-div" style="position: fixed; top: 20px; right: 20px; background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); z-index: 1000;">\n      <label><input type="checkbox" id="enable-download-checkbox"> 我已阅读并承诺依法行事</label><br>\n      <label><input type="checkbox" id="dont-show-again-checkbox"> 不再提示</label>\n      <button id="continue-btn"> 继续下载</button>\n    </div>\n    ');const e=document.getElementById("enable-download-checkbox"),t=document.getElementById("dont-show-again-checkbox"),n=document.getElementById("continue-btn");t.addEventListener("change",(()=>{t.checked?chrome.runtime.sendMessage({action:"setShowDiv",value:!1}):chrome.runtime.sendMessage({action:"setShowDiv",value:ture})})),n.addEventListener("click",(()=>{e.checked?(o(1),function(){const e=document.getElementById("copyright-declaration-div");e&&e.remove()}()):alert("请同意声明，否则无法下载视频")}))}(),o(0)):o(1)}))}else console.log("从API获取数据失败，数据结构不符合预期")})).catch((e=>{console.log("Error fetching API:",e)}))}()};function j(){const e=$(document).height()-$(window).height()-$(window).scrollTop();$("#nextPage").length>0&&e<100&&($("#nextPage")[0].innerText="加载中...",$("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),$("#nextPage")[0].innerText="点此加载更多")}async function P(e,t=0){if(t>10)return;console.log("开始加载评分数据",e),await new Promise((e=>setTimeout(e,500)));let o=$(e).siblings().first().find("table");if("true"==$(o).attr("data-score"))return;let n=$(o).find("tbody").children("tr");if(0==n.length)return console.log("trs为空 zdbk还在记载 再次调用loadScoreData"),void P(e,t+1);chrome.storage.local.get("search-data",(e=>{e=JSON.parse(e["search-data"]),$(o).find("thead").children("tr").children("th").eq(0).after('<th width="5%" >评分</th>'),n.each((function(t,o){if($(o).attr("id")){let t=[];t=$(o).children("td").eq(1).children("a").html().split("<br>"),console.log("教师姓名",t);let n="";t.forEach((t=>{let o=e.teachers.find((e=>e.name==t));o&&o.rate?parseFloat(o.rate)>8.5?n+='<a style="color:red;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":parseFloat(o.rate)<2?n+='<a style="color:#4340ff;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href="javascript:void(0);" > N/A </a><br>'})),n&&$(o).children("td").eq(1).after("<td>"+n+"</td>");let l=$(o).children("td").eq(-6).html();console.log("选课难度",l);let c=l.split("/")[0];c=Number(c);let s=$(o).children("td").eq(-3).html();s=s.split("<")[0];let i=Number(s),r=$(o).children("td").eq(-2).html();r=r.split("<")[0];let a=Number(r);if(console.log("余量",c),console.log("本专业待定",i),console.log("全部待定",a),c<=0)$(o).children("td").eq(-3).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>'),$(o).children("td").eq(-2).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>');else{let e=i/c,t=e<1?"容易选中":e<5?"不易选中":e<10?"难选中":"极难选中",n=`<br><span style="font-weight: bold; color: ${e<1?"green":e<5?"darkorange":e<10?"#e60c0c":"black"};">「${e.toFixed(2)} 进 1」<br>${t}</span>`;$(o).children("td").eq(-3).append(n);let l=a/c,s=l<1?"容易选中":l<5?"不易选中":l<10?"难选中":"极难选中",r=`<br><span style="font-weight: bold; color: ${l<1?"green":l<5?"darkorange":l<10?"#e60c0c":"black"};">「${l.toFixed(2)} 进 1」<br>${s}</span>`;$(o).children("td").eq(-2).append(r)}}else console.log("课程错误 无教学班"),$(o).children("td").eq(0).attr("colspan","14")})),$(o).attr("data-score","true")}))}var A;function D(e,t){switch(t){case"int":return parseInt(e);case"float":return parseFloat(e);case"date":return new Date(Date.parse(e));default:return e.toString()}}let R=[1,3,4,8];async function _(e){await new Promise((e=>setTimeout(e,1e3)));let t=$(e).siblings().first().find("table"),o=$(t).find("thead").children("tr").children("th"),n=$(t).find("tbody").attr("id");!function(e){for(let t=0;t<R.length;t++){let o=e[R[t]];o.innerText.includes("▲")||o.innerText.includes("▼")||(o.innerText=o.innerText+"▲")}}(o),U(o,1,n,2,"float"),U(o,3,n,5,"string"),U(o,4,n,6,"string"),U(o,8,n,10,"string")}function U(e,t,o,n,l){let c=e[t];c?c.onclick=function(){(async function(e,t,o){for(var n=document.getElementById(e),l=n.rows,c=new Array,s=0;s<l.length;s++)c.push(l[s]);n.sortCol==t?(c.reverse(),A=-A):(c.sort(function(e,t){return function(o,n){try{var l=D(o.cells[e].innerText,t)}catch(e){l=0}try{var c=D(n.cells[e].innerText,t)}catch(e){c=0}return l>c?-1:l<c?1:0}}(t,o)),A=-1);var i=document.createDocumentFragment();for(s=0;s<c.length;s++)i.appendChild(c[s]);n.appendChild(i),n.sortCol=t})(o,n,l),function(e,t){for(let t=0;t<R.length;t++){let o=e[R[t]];o.innerText.includes("▼")&&(o.innerText=o.innerText.replace("▼","▲"))}let o=e[t];o?o.innerText=o.innerText.replace("▲","▼"):console.error(`Invalid TH3 element at index ${t}`)}(e,t)}:console.error(`Invalid TH1 element at index ${t}`)}function q(){$(".panel-heading").each((function(e,t){$(t).data("events")&&$(t).data("events").bindForgeClick||($(t).click((e=>P(e.currentTarget))),$(t).click((e=>_(e.currentTarget))),$(t).data("events",{bindForgeClick:!0}),"display: block;"==$(t).siblings().first().attr("style")&&(P(t),_(t)))}))}let B={enableDataExpirationReminders:!0};function N(e){return new Promise(((t,o)=>{chrome.storage.local.get(e,(e=>{0!==Object.keys(e).length?t(e):t(null)}))}))}const F=document.getElementById("contentBox"),M=new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&e.addedNodes.length>0&&(console.log("选课系统界面栏目已切换 启动默认下拉"),j(),q())}))})),O={childList:!0};function H(e,t){return new Promise(((o,n)=>{chrome.storage.local.set({"search-data":e,"search-last-update":t},(function(){console.log("数据已写入插件储存空间"),o(!0)}))}))}function J(e,t,o=3e3,n=""){chrome.runtime.sendMessage({data:{title:e,message:t,closeTime:o,url:n}},(function(e){console.log("收到来自后台的回复："+e)}))}window.onload=async function(){const e=document.createElement("div"),t=document.getElementsByClassName("outer_xkxx_list")[0];if(t){const o=t.parentNode;o&&o.insertBefore(e,t)}function o(t,o,l){const c=[];let s;const i=document.getElementsByClassName("list-group-item");for(let e=0;e<i.length;e++){let r=i[e].getAttribute("data-sksj");const a=new RegExp(`^(.*)(${n[l]})([^节]*)(第|,)(${t})(节|,)(.*)$`),d=r.match(a);let u=i[e].getAttribute("data-xxq");d&&(2!==u.length&&o!==u||(s=i[e].getAttribute("data-xkkh").split("-")[3],0!==c.length&&s===c.at(-1)||c.push(s)))}const r=document.getElementsByClassName("outer_xkxx_list");if(c.length)for(let t=0;t<c.length;t++){let o=c[t];for(let t=1;t<r.length;t++){let n=r[t].getAttribute("data-xskcdm");if(n&&n.includes(o)){let t=document.querySelector('.outer_xkxx_list[data-xskcdm="'+n+'"]');if(t){let o=t.cloneNode(!0);e.appendChild(o)}break}}}}e.setAttribute("class","outer_xkxx_list"),e.style.backgroundColor="lightyellow";const n={"1_":"周一","2_":"周二","3_":"周三","4_":"周四","5_":"周五","6_":"周六","7_":"周日"};function l(){let e,t=document.querySelector('[data-xxq][aria-expanded="true"]');if(t)e=t.getAttribute("data-xxq");else{const o=document.querySelectorAll('[data-toggle="tab"]');t=Array.from(o).find((e=>e.innerHTML.includes("课表"))),e=t.getAttribute("data-xxq")}return e}document.body.addEventListener("click",(function(t){if(t.target.closest(".outer_left")||t.target.matches("[data-xxq]")&&t.target.matches('[role="tab"]')){const e=/^\d+_\d+$/;let t=[];const o=setInterval((()=>{if(t.length>0){clearInterval(o);for(let e of t){const t=e.innerHTML,o=document.createElement("a");o.innerHTML=t,o.href="javascript:void(0);",o.className="link",e.innerHTML="",e.appendChild(o)}}else{console.log("Still waiting...");const o=document.querySelectorAll("[id]");t=Array.from(o).filter((t=>e.test(t.id)))}}),100)}for(let c in n){let n;t.target.closest(`[id^='${c}']`)&&(e.innerHTML="",n=t.target.closest(`[id^='${c}']`).id,o(n.split("_")[1],l(),c))}}),!0)};const G="[ZJU XZZD TODO URL]";function Y(e){console.log(`${G} Processing API Data`);const t=new MutationObserver((()=>{document.querySelector(".latest-todo-list.card.gtm-label")&&(console.log(`${G} Found .latest-todo-list! Processing todos...`),e.forEach((e=>{const t=e.title,o=e.course_id,n=e.id;console.log(`${G} Processing activity: ${t} (Course ID: ${o}, Activity ID: ${n})`),document.querySelectorAll('a[ng-click="openActivity(todoData)"]').forEach((e=>{const l=e.querySelector('span[ng-bind="todoData.title"]');if(l&&l.textContent.trim()===t.trim()){console.log(`${G} Title matched: ${t}`);const l=`https://courses.zju.edu.cn/course/${o}/learning-activity#/${n}`;e.setAttribute("href",l),e.setAttribute("target","_blank"),console.log(`${G} Link updated for activity: ${t} -> ${l}`)}}))})),t.disconnect())}));t.observe(document.body,{childList:!0,subtree:!0})}let Z=0;function X(){const e=document.getElementById("noticeHTML");e&&e.remove();const t=document.querySelector(".overlay");t&&t.remove()}const K=()=>{!function(){console.log("[zju-webx]:running");let e=new URL(window.location.href),t=e.pathname,o=!0;"zdbk.zju.edu.cn"===e.hostname?"/jwglxt/xsbtx/xsbtx_cxXsbtxIndex.html"===t?function(){console.log("[zju-webx]:zdbk_xsbtx");let e="100px";function t(t){let o=document.getElementById("searchGrid_jsxm");if(!o)return void console.error("name th not found");o.style.display="table-cell",o.style.width=e;let n=document.querySelector("#searchGrid > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)");n.style.display="table-cell",n.style.width=e,function(e,t,o){new MutationObserver((function(e,t){e.forEach(o)})).observe(e,{subtree:!0,childList:!0})}(t,0,(function(e){"childList"==e.type&&"TBODY"==e.target.tagName&&1==e.addedNodes.length&&"TR"==e.addedNodes[0].tagName&&e.addedNodes[0].querySelectorAll('td[aria-describedby="searchGrid_jsxm"]').forEach((e=>{e.style.display="table-cell"}))}))}!function(e){var t=e.getter();if(!t)return e.recursive||(e.recursive=!1),new MutationObserver((function(t){var o=e.getter();o&&(this.disconnect(),e.callback(o))})).observe(e.watchOn||document,{subtree:!!e.recursive||!e.watchOn,childList:!0});e.callback(t)}({getter:()=>document.getElementById("searchGrid"),callback:t,recursive:!0})}():o=!1:"courses.zju.edu.cn"===e.hostname?(function(){const e="/api/todos?no-intercept=true";console.log(`${G} Fetching data from ${e}`),fetch(e).then((e=>e.json())).then((e=>{console.log(`${G} Received API Response:`,e),e&&Array.isArray(e.todo_list)?(Y(e.todo_list),setTimeout((()=>{console.log(`${G} Re-checking todos after delay...`),Y(e.todo_list)}),2e3)):console.error(`${G} API todo_list is missing or not an array:`,e)})).catch((e=>{console.error(`${G} Error fetching API data:`,e)}))}(),function(){const e=new MutationObserver((()=>{document.querySelector(".latest-todo-list.card.gtm-label")&&(console.log(`${G} .latest-todo-list is loaded and ready for processing.`),e.disconnect())}));e.observe(document.body,{childList:!0,subtree:!0})}(),function(){function e(){const e=window.parent.document,t=new MutationObserver((()=>function(){const o=e.querySelector("#pdf-viewer");if(o){console.log("检测到 PDF Viewer");const e=o.getAttribute("src");if(!e)return void console.log("没有 src，跳过");console.log("PDF 文件的 URL:",e);const l=decodeURIComponent(e.substr(e.indexOf("http")));console.log("解码后的 URL:",l),l.includes("http")&&l.includes("https")?n(l):async function(){try{const e=await async function(){return new Promise(((e,t)=>{chrome.runtime?chrome.runtime.sendMessage({action:"getPPTUrl"},(o=>{chrome.runtime.lastError?t(new Error(chrome.runtime.lastError.message)):o?.pptUrl?(console.log("从背景脚本获取的 PPT URL:",o.pptUrl),e(o.pptUrl)):t(new Error("无效的响应格式"))})):t(new Error("Chrome runtime API 不可用"))}))}();console.log("PPT URL:",e),n(e)}catch(e){console.error("获取 PPT URL 失败:",e)}}(),t.disconnect()}else console.log("未检测到 PDF Viewer")}()));function o(t){const o=e.createElement("a");o.href=t,e.body.append(o),o.click(),setTimeout((()=>o.remove()),3e3),console.log("下载链接点击后已移除")}function n(t){const n=e.querySelector(".header.clearfix");if(n){console.log("内页展示");const l=e.querySelectorAll(".right.close")[1],c=e.createElement("button");c.style.position="absolute",c.style.top="14px",c.style.right="200px",c.id="downloadButton",c.addEventListener("click",(async()=>{0===Z?await new Promise((e=>{const t=document.createElement("style");t.textContent="\n      #noticeHTML {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        max-width: 800px;\n        width: 90%;\n        background: white;\n        padding: 30px;\n        border-radius: 8px;\n        box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n        z-index: 1000;\n        font-family: 'Microsoft YaHei', sans-serif;\n      }\n      .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba(0,0,0,0.5);\n        z-index: 999;\n      }\n      .check-item { \n        margin-bottom: 15px; \n        color: #666;\n      }\n      .list-item { margin-bottom: 8px; }\n    ",document.head.appendChild(t);const o=document.createElement("div");o.className="overlay";const n=document.createElement("div");n.id="noticeHTML",n.innerHTML='\n      <h1 style="text-align: center; color: #333; border-bottom: 2px solid #eee; padding-bottom: 15px;">版权声明及使用协议</h1>\n      \n      <div style="margin: 25px 0;">\n        <h2 style="color: #d32f2f; margin-bottom: 15px;">一、版权声明</h2>\n        <p style="line-height: 1.6; margin-bottom: 15px; color: #666;">\n          1. 本平台所有课程资源（含视频回放、语音文本、课件资料等）均受著作权法保护，版权归属原内容创作者/版权方所有。\n        </p>\n        <p style="line-height: 1.6; margin-bottom: 15px; color: #666;">\n          2. 通过本插件获取的下载链接及文件仅限个人学习研究用途，禁止以下行为：\n        </p>\n        <ul style="margin-left: 30px; color: #666; list-style-type: \'- \';">\n          <li class="list-item">将下载内容用于商业目的（包括但不限于销售、培训、直播等）</li>\n          <li class="list-item">通过互联网公开传播、分发或二次上传至其他平台</li>\n          <li class="list-item">对下载内容进行篡改、去除版权标识等非法修改</li>\n          <li class="list-item">将下载文件用于逆向工程、数据挖掘等非法技术分析</li>\n          <li class="list-item">其他违反中华人民共和国法律法规的行为</li>\n        </ul>\n      </div>\n    \n      <div style="margin: 25px 0;">\n        <h2 style="color: #d32f2f; margin-bottom: 15px;">二、使用承诺</h2>\n        <div style="margin-left: 20px;">\n          <label class="check-item">\n            <input type="checkbox" id="agree1"> 不会将下载内容用于侵害他人知识产权的行为\n          </label>\n          <br>\n          <label class="check-item">\n            <input type="checkbox" id="agree2"> 如因不当使用引发法律纠纷，将自行承担全部责任\n          </label>\n          \n        </div>\n      </div>\n    \n      <div style="text-align: center; margin-top: 30px;">\n      <label class="check-item">\n            <input type="checkbox"  id=\'showDivCheckbox\' > 下次不再提示\n          </label>\n        <button id="popupDownloadBtn" disabled>同意并继续下载</button>\n        <button id="cancelBtn">取消下载</button>\n      </div>\n    \n    ',document.body.append(o,n);const l={padding:"12px 35px",borderRadius:"4px",margin:"0 10px",cursor:"pointer",border:"none"},c=document.getElementById("popupDownloadBtn"),s=document.getElementById("cancelBtn");Object.assign(c.style,l,{backgroundColor:"#ccc",color:"white"}),Object.assign(s.style,l,{backgroundColor:"white",color:"#666",border:"1px solid #ddd"});const i=document.getElementById("agree1"),r=document.getElementById("agree2"),a=document.getElementById("showDivCheckbox");function d(){c.disabled=!(i.checked&&r.checked),i.checked&&r.checked?c.style.backgroundColor="green":c.style.backgroundColor="#ccc"}i.addEventListener("change",d),r.addEventListener("change",d),a.addEventListener("change",(()=>{chrome.runtime.sendMessage({action:"setShowDiv",value:!a.checked}),Z=a.checked?1:0})),c.addEventListener("click",(()=>{i.checked&&r.checked?(X(),e(!0)):alert("请勾选所有选项后再继续")})),s.addEventListener("click",(()=>{X(),Z=0,e(!1)}))}))&&o(t):o(t)})),c.style.border="none",c.style.background="transparent",c.style.cursor="pointer",c.title="下载完一个文件后请务必刷新页面以继续下载新文件";const s=e.createElement("i");s.className="font font-download",c.appendChild(s),n.insertBefore(c,l)}else confirm("Do you want to download this file?")&&o(t)}!function(e){e.observe(document.body,{childList:!0,subtree:!0})}(t)}"loading"===document.readyState?(console.log("页面加载中..."),document.addEventListener("DOMContentLoaded",e)):(console.log("页面已加载"),e())}()):o=!1}()};$(document).ready((async function(){["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)||window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")?(async()=>{var e=6048e5;if(console.log("选课插件已启动"),await async function(){let e=await N("isinit");if(e&&e.isinit)return void console.log("插件已初始化");const t=await fetch(chrome.runtime.getURL("/data/default.json")),o=await t.json();console.log("加载json文件至chrome缓存",o),await new Promise(((e,t)=>{chrome.storage.local.set({"search-data":JSON.stringify(o)},(function(){console.log("数据已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({"search-last-update":0},(function(){console.log("数据时间已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({config:{enableDataExpirationReminders:!1,enableLessonListAutoScroll:!0}},(function(){console.log("配置已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({isinit:!0},(function(){console.log("初始化成功"),e(!0)}))}))}(),["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)){let t=await async function(){const e=await new Promise(((e,t)=>{chrome.storage.local.get("config",(function(t){e(t)}))}));return console.log("配置",e),0===Object.keys(e).length?(console.warn("配置为空对象 使用默认配置"),{enableDataExpirationReminders:!0,lessonListAutoScroll:!0}):e}();B=t.config;let o=(new Date).getTime(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update");if(l=Number(l),n&&o-l<e)console.log("发现本地存储的数据"),await H(n,l),await N("needUpdate").then((e=>{e&&e.needUpdate&&(J("选课插件提示","检测到打开查老师，评分数据已更新",1e4),chrome.storage.local.set({needUpdate:!1},(function(){console.log("needUpdate已写入插件储存空间")})))}));else try{if(await async function(){const e="search-data",t="search-version",o="search-last-update",n=Number(localStorage.getItem(t)),l=Number(localStorage.getItem(o));let c;if(n&&5===n&&Date.now()-l<6048e5&&(c=c||JSON.parse(localStorage.getItem(e)),c&&"colleges"in c&&"teachers"in c))return;const s=new Date,i="/static/json/search.json?v=5&date="+s.getUTCFullYear()+(s.getUTCMonth()+1).toString().padStart(2,"0")+s.getUTCDate().toString().padStart(2,"0");try{const n=await fetch(i);if(n.ok){const l=await n.json();"colleges"in l&&"teachers"in l&&(c=l,localStorage.setItem(e,JSON.stringify(l)),localStorage.setItem(t,5..toString()),localStorage.setItem(o,Date.now().toString()))}}catch(e){console.error("Error fetching search data:",e)}}(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update"),!n||!l)throw new Error("获取数据失败");console.log("模拟点击查老师搜索框获取数据"),console.log(n),console.log(l),console.log("将页面存储的数据写入插件储存空间"),await H(n,l),J("选课插件提示","检测到打开查老师，评分数据已更新",1e4)}catch(e){console.log("模拟点击查老师搜索框获取数据失败",e),J("选课插件提示","检测到打开查老师，查老师未响应，请稍后再试",1e4)}}else if(window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")){let t=await N("search-last-update");if(t=t["search-last-update"],t=Number(t),(!t||(new Date).getTime()-t>e)&&B.enableDataExpirationReminders&&(J("选课插件提示","评分数据已过期，点击打开查老师页面更新评分",2e4,"http://chalaoshi.click/"),await new Promise(((e,t)=>{chrome.storage.local.set({needUpdate:!0},(function(){console.log("needUpdate已写入插件储存空间"),e(!0)}))}))),!await N("search-data"))return void J("选课插件提示","评分数据异常，点击打开查老师页面更新评分",2e4);M.observe(F,O),$("#nextPage").length>0&&($("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),q()),$(window).scroll((function(){j(),q()}))}})():window.location.href.includes("https://classroom.zju.edu.cn/coursedetail")&&!window.location.href.includes("livingroom")?z():window.location.href.includes("https://classroom.zju.edu.cn/livingpage?")||window.location.href.includes("https://interactivemeta.cmc.zju.edu.cn/")||window.location.href.includes("https://classroom.zju.edu.cn/livingroom?")?function(){const n=new URL(window.location.href).host;/classroom\.zju\.edu\.cn/.test(n)&&function(){const e=t,n=document.createElement("p");n.style="padding:5px 0;",n.innerText="请视频开始正常播放后：";const l=o;l.innerText="点击下载视频",l.addEventListener("click",(function(){const e=document.getElementsByClassName("course_name")[0].innerText,t=document.getElementById("cmc_player_video").src,o=document.createElement("a");o.href=t,o.target="_blank",o.download=e||"ZhiYunPPT",document.body.appendChild(o),o.click(),document.body.removeChild(o)})),e.appendChild(n),e.appendChild(l),document.body.appendChild(e)}(),/interactivemeta\.cmc\.zju\.edu\.cn/.test(n)&&function(){const t=e,n=document.createElement("p");n.style="padding:5px 0;",n.innerText="请视频开始正常播放后：";const l=o;l.innerText="点击下载视频",l.addEventListener("click",(function(){const e=document.getElementById("cmc_player_video").src,t=document.createElement("a");t.href=e,t.target="_blank",t.download="ZhiYunPPT",document.body.appendChild(t),t.click(),document.body.removeChild(t)})),t.appendChild(n),t.appendChild(l),document.body.appendChild(t)}()}():window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxjc")?async function(){const e=new DOMParser,t=[],o=function(){const e=window.location.search;return new URLSearchParams(e).get("su")}();let n=0;for(;0===t.length&&n<1e4;)Array.from(document.getElementsByClassName("ui-widget-content jqgrow ui-row-ltr")).forEach((e=>{t.push(e)})),await new Promise((e=>setTimeout(e,100))),n+=100;await Promise.all(t.map((async(t,n)=>{const l="xkkh="+t.id,c="http://zdbk.zju.edu.cn/jwglxt/xsxjc/xsxjc_cxJcxx.html?time="+Date.now()+"&gnmkdm=N253535&su="+o;try{const o=await fetch(c,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:l});if(!o.ok)throw new Error("解析失败");const n=await o.text(),s=e.parseFromString(n,"text/html");let i=s.body.textContent||s.body.innerText;i=i.split(/[,:\t\n]/).filter((e=>""!==e.trim()));let r="";"无教材"===i[1]||"作者"===i[1]?r="教材名称：无教材":i.forEach((e=>{r+="教材名称"===e||"作者"===e||"出版社"===e||"版本"===e?e+"：":e+"\n"}));const a=document.createElement("tr"),d=document.createElement("td");d.textContent=r,d.colSpan="8",d.style.border="black 2px solid",d.style.whiteSpace="pre-wrap",a.appendChild(d),t.parentNode.insertBefore(a,t.nextSibling)}catch(e){console.error("报错",e)}})))}():(window.location.href.includes("http://zdbk.zju.edu.cn")||window.location.href.includes("https://courses.zju.edu.cn"))&&K()}))})();