(()=>{"use strict";const e=document.createElement("div");e.style="margin:0;padding:12px;width:200px;height:5vh;position:fixed;top:10%;right:1%;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const t=document.createElement("div");t.style="margin:0;padding:12px;width:125px;height:15vh;position:fixed;top:15%;right:0;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const o=document.createElement("p");o.style="padding:5px 0;cursor:pointer;text-decoration:underline;";const n=document.createElement("div");n.style.position="fixed",n.style.bottom="10px",n.style.right="10px",n.style.backgroundColor="white",n.style.padding="15px",n.style.border="1px solid #ccc",n.style.zIndex=9999,n.style.maxHeight="80%",n.style.overflowY="auto",n.style.fontSize="14px",n.style.lineHeight="1.5",n.style.boxShadow="0 0 10px rgba(0,0,0,0.1)",n.style.borderRadius="5px",n.style.width="320px",n.style.transition="all 0.3s ease",n.style.backgroundColor="rgba(255, 255, 255, 0.95)",n.style.display="flex",n.style.flexDirection="column";const l=n,s=document.createElement("div");s.style.display="flex",s.style.justifyContent="space-between",s.style.alignItems="center",s.style.cursor="default",s.style.marginBottom="10px";const c=s,i=document.createElement("button");i.innerText="—",i.style.border="none",i.style.background="none",i.style.cursor="pointer",i.style.fontSize="16px",i.style.lineHeight="1",i.style.padding="0",i.style.marginLeft="10px",i.title="最小化";const a=i,r=document.createElement("button");r.innerText="下载选中视频",r.style.display="block",r.style.marginTop="10px",r.style.width="100%",r.style.padding="8px",r.style.backgroundColor="#4CAF50",r.style.color="white",r.style.border="none",r.style.borderRadius="3px",r.style.cursor="pointer",r.style.fontSize="14px";const d=r,u=document.createElement("div");u.style.marginTop="10px",u.style.fontSize="12px",u.style.color="#555";const h=u,g=document.createElement("div");g.style.width="100%",g.style.backgroundColor="#f3f3f3",g.style.borderRadius="5px",g.style.marginTop="10px",g.style.display="none";const p=g,m=document.createElement("div");m.style.width="0%",m.style.height="20px",m.style.backgroundColor="#4CAF50",m.style.borderRadius="5px";const y=m,f=document.createElement("ul");f.style.listStyle="none",f.style.padding="0",f.style.marginTop="10px";const b=f,x=document.createElement("li");x.style.marginTop="10px",x.style.display="block",x.style.borderBottom="1px solid #ddd",x.style.paddingBottom="10px";const w=x,v=document.createElement("div");v.style.display="flex",v.style.alignItems="center";const k=v,E=document.createElement("div");E.style.width="100%",E.style.backgroundColor="#f3f3f3",E.style.borderRadius="5px",E.style.marginTop="5px",E.style.display="none";const C=E,T=document.createElement("div");T.style.width="0%",T.style.height="10px",T.style.backgroundColor="#4CAF50",T.style.borderRadius="5px";const S=T,z=document.createElement("div");z.style.marginTop="5px",z.style.fontSize="12px",z.style.color="#555",z.style.display="none",z.innerText="速度: 0 KB/s | 预计剩余时间: 0 s";const j=z,A=()=>{!function(){console.log("智云课堂批量下载脚本已启动");const e=function(e){const t=window.location.search.substring(1).split("&");for(let o=0;o<t.length;o++){const n=t[o].split("=");if(n[0]===e)return decodeURIComponent(n[1]);if(decodeURIComponent(n[0])===e)return decodeURIComponent(n[1])}return!1}("course_id");if(!e)return void console.log("course_id not found");console.log(`课程ID: ${e}`);const t=`https://classroom.zju.edu.cn/courseapi/v2/course/catalogue?course_id=${e}`;console.log(`API URL: ${t}`),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>(console.log("API响应状态:",e.status),e.json()))).then((e=>{if(console.log("API响应数据:",e),e.success&&e.result&&e.result.data){const t=e.result.data;console.log(`获取到的课程目录项数量: ${t.length}`);const o=[];for(let e=0;e<t.length;e++){const n=t[e];let l=n.title,s=null,c=!0;try{const t=JSON.parse(n.content);console.log(`解析第${e+1}项的content字段成功`),t.playback&&t.playback.url?(s=t.playback.url,console.log(`第${e+1}项视频URL: ${s}`)):t.url?(s=t.url,console.log(`第${e+1}项视频URL: ${s}`)):(c=!1,console.log(`第${e+1}项没有可用的视频URL`))}catch(t){console.error(`解析第${e+1}项的content字段失败:`,t),c=!1}c&&s||(l+="（暂无回放）"),o.push({title:l,videoUrl:s,available:c,originalIndex:e})}console.log(`可下载的视频数量: ${o.filter((e=>e.available)).length}`),function(e){console.log("正在添加批量下载的用户界面");const t=l,o=c,n=document.createElement("div");n.style.fontWeight="bold",n.innerText="批量下载视频",o.appendChild(n);const s=a;s.addEventListener("click",(()=>{t.classList.contains("minimized")?(t.classList.remove("minimized"),i.style.display="flex",g.style.display="block",f.style.display="block",m.style.display="block",v.style.display="block",s.innerText="—",s.title="最小化",console.log("恢复下载界面")):(t.classList.add("minimized"),i.style.display="none",g.style.display="none",f.style.display="none",m.style.display="none",v.style.display="none",s.innerText="+",s.title="恢复",console.log("最小化下载界面"))})),o.appendChild(s),t.appendChild(o);const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.marginBottom="10px";const r=document.createElement("input");r.type="checkbox",r.id="selectAllCheckbox";const u=document.createElement("label");u.htmlFor="selectAllCheckbox",u.innerText=" 全选",i.appendChild(r),i.appendChild(u),t.appendChild(i);const g=d;g.addEventListener("mouseover",(()=>{g.disabled||(g.style.backgroundColor="#45a049")})),g.addEventListener("mouseout",(()=>{g.disabled||(g.style.backgroundColor="#4CAF50")})),t.appendChild(g);const m=h;t.appendChild(m);const f=p;t.appendChild(f);const x=y,v=b;t.appendChild(v),e.forEach(((e,t)=>{const o=w,n=k,l=document.createElement("input");l.type="checkbox",l.value=e.originalIndex,l.className="videoCheckbox",l.style.marginRight="10px",e.available||(l.disabled=!0);const s=document.createElement("label");s.style.flex="1",s.style.cursor="pointer",s.innerText=e.title,n.appendChild(l),n.appendChild(s),o.appendChild(n);const c=C,i=S;c.appendChild(i);const a=j;o.appendChild(c),o.appendChild(a),v.appendChild(o),e.domRef={listItem:o,progressBar:i,infoDiv:a},console.log(e)})),document.body.appendChild(t),console.log("批量下载界面已添加到页面"),r.addEventListener("change",(function(){t.querySelectorAll(".videoCheckbox").forEach((e=>{e.disabled||(e.checked=this.checked)})),console.log(`全选复选框状态改变为: ${this.checked}`)})),g.addEventListener("click",(function(){console.log("下载按钮被点击"),m.innerText="开始下载...",r.disabled=!0,console.log("selectAllCheckbox全选复选框已被禁止点击");const o=t.querySelectorAll(".videoCheckbox"),n=[];if(o.forEach((t=>{if(t.checked){const o=parseInt(t.value);n.push({video:e[o],index:e[o].domRef})}t.disabled=!0})),console.log("checkboxes复选框已全部被禁止点击"),0===n.length)return alert("请选择要下载的视频"),m.innerText="",void console.log("未选择任何视频进行下载");console.log(`选中的视频数量: ${n.length}`),n.forEach(((e,t)=>{console.log(`准备下载 (${t+1}/${n.length}): ${e.video.title} - ${e.video.videoUrl}`)})),g.disabled=!0,g.innerText="下载中...",g.style.backgroundColor="#888",g.style.cursor="not-allowed",console.log("下载按钮已禁用，文本已更改为 '下载中...'"),f.style.display="block",x.style.width="0%",console.log("显示整体进度条");let l=0,s=0;!function e(){if(l<n.length){const t=n[l];console.log(t);const o=t.video;console.log(o);const{listItem:c,progressBar:i,infoDiv:a}=o.domRef;console.log(t.dom);const r=c.querySelector("div:nth-child(2)");if(!c||!i||!a)return console.error("错误：未找到listItem。"),l++,void e();m.innerText=`正在下载 (${l+1}/${n.length}): ${o.title}`,console.log(`开始下载 (${l+1}/${n.length}): ${o.title} - ${o.videoUrl}`),r.style.display="block",a.style.display="block";const d=new XMLHttpRequest,u=""+o.videoUrl;console.log(`下载链接: ${u}`),d.open("GET",u,!0),d.responseType="blob";let h=Date.now();d.onprogress=function(e){if(e.lengthComputable){const t=(e.loaded/e.total*100).toFixed(2);i.style.width=t+"%";const o=(Date.now()-h)/1e3,n=e.loaded,l=o>0?(n/o/1024).toFixed(2):"0",s=e.total-e.loaded,c=l>0?(s/1024/l).toFixed(2):"0";a.innerText=`速度: ${l} KB/s | 预计剩余时间: ${c} s`}},d.onload=function(){if(200===d.status||206===d.status){const e=d.response,t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=o.title.replace(/[\/\\:*?"<>|]/g,"_")+".mp4",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t),console.log(`下载已启动 (${o.title}): ${n.download}`)}else console.error(`下载失败 (${o.title}): 状态码 ${d.status}`),alert(`下载失败: ${o.title} （状态码 ${d.status}）`);s++,console.log(`完成下载: ${o.title} (${s}/${n.length})`);const t=(s/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,console.log("currentDownload is ${currentDownload}"),e()},d.onerror=function(){console.error(`下载失败 (${o.title}): 网络错误`),alert(`下载失败: ${o.title} （网络错误）`),s++,console.log(`下载错误处理: ${o.title} (${s}/${n.length})`);const t=(s/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,setTimeout(e,1e3)},console.log(`发送XHR请求 (${o.title})`),d.send()}else m.innerText="所有下载已完成！请查看浏览器的下载管理器。",console.log("所有下载已完成"),setTimeout((()=>{f.style.display="none",console.log("隐藏整体进度条")}),5e3),g.disabled=!1,g.innerText="下载选中视频",g.style.backgroundColor="#4CAF50",g.style.cursor="pointer",console.log("恢复下载按钮状态"),t.querySelectorAll(".videoCheckbox").forEach((e=>{e.disabled=!1})),r.disabled=!1}()}))}(o)}else console.log("从API获取数据失败，数据结构不符合预期")})).catch((e=>{console.log("Error fetching API:",e)}))}()};function P(){const e=$(document).height()-$(window).height()-$(window).scrollTop();$("#nextPage").length>0&&e<100&&($("#nextPage")[0].innerText="加载中...",$("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),$("#nextPage")[0].innerText="点此加载更多")}async function L(e,t=0){if(t>10)return;console.log("开始加载评分数据",e),await new Promise((e=>setTimeout(e,500)));let o=$(e).siblings().first().find("table");if("true"==$(o).attr("data-score"))return;let n=$(o).find("tbody").children("tr");if(0==n.length)return console.log("trs为空 zdbk还在记载 再次调用loadScoreData"),void L(e,t+1);chrome.storage.local.get("search-data",(e=>{e=JSON.parse(e["search-data"]),$(o).find("thead").children("tr").children("th").eq(0).after('<th width="5%" >评分</th>'),n.each((function(t,o){if($(o).attr("id")){let t=[];t=$(o).children("td").eq(1).children("a").html().split("<br>"),console.log("教师姓名",t);let n="";t.forEach((t=>{let o=e.teachers.find((e=>e.name==t));o&&o.rate?parseFloat(o.rate)>8.5?n+='<a style="color:red;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":parseFloat(o.rate)<2?n+='<a style="color:#4340ff;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href="javascript:void(0);" > N/A </a><br>'})),n&&$(o).children("td").eq(1).after("<td>"+n+"</td>");let l=$(o).children("td").eq(-6).html();console.log("选课难度",l);let s=l.split("/")[0];s=Number(s);let c=$(o).children("td").eq(-3).html();c=c.split("<")[0];let i=Number(c),a=$(o).children("td").eq(-2).html();a=a.split("<")[0];let r=Number(a);if(console.log("余量",s),console.log("本专业待定",i),console.log("全部待定",r),s<=0)$(o).children("td").eq(-3).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>'),$(o).children("td").eq(-2).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>');else{let e=i/s,t=e<1?"容易选中":e<5?"不易选中":e<10?"难选中":"极难选中",n=`<br><span style="font-weight: bold; color: ${e<1?"green":e<5?"darkorange":e<10?"#e60c0c":"black"};">「${e.toFixed(2)} 进 1」<br>${t}</span>`;$(o).children("td").eq(-3).append(n);let l=r/s,c=l<1?"容易选中":l<5?"不易选中":l<10?"难选中":"极难选中",a=`<br><span style="font-weight: bold; color: ${l<1?"green":l<5?"darkorange":l<10?"#e60c0c":"black"};">「${l.toFixed(2)} 进 1」<br>${c}</span>`;$(o).children("td").eq(-2).append(a)}}else console.log("课程错误 无教学班"),$(o).children("td").eq(0).attr("colspan","14")})),$(o).attr("data-score","true")}))}function I(){$(".panel-heading").each((function(e,t){$(t).data("events")&&$(t).data("events").bindForgeClick||($(t).click((e=>L(e.currentTarget))),$(t).data("events",{bindForgeClick:!0}),"display: block;"==$(t).siblings().first().attr("style")&&L(t))}))}let _={enableDataExpirationReminders:!0};function R(e){return new Promise(((t,o)=>{chrome.storage.local.get(e,(e=>{0!==Object.keys(e).length?t(e):t(null)}))}))}const q=document.getElementById("contentBox"),U=new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&e.addedNodes.length>0&&(console.log("选课系统界面栏目已切换 启动默认下拉"),P(),I())}))})),D={childList:!0};function N(e,t){return new Promise(((o,n)=>{chrome.storage.local.set({"search-data":e,"search-last-update":t},(function(){console.log("数据已写入插件储存空间"),o(!0)}))}))}function B(e,t,o=3e3,n=""){chrome.runtime.sendMessage({data:{title:e,message:t,closeTime:o,url:n}},(function(e){console.log("收到来自后台的回复："+e)}))}window.onload=async function(){const e=document.createElement("div"),t=document.getElementsByClassName("outer_xkxx_list")[0];if(t){const o=t.parentNode;o&&o.insertBefore(e,t)}function o(t,o,l){const s=[];let c;const i=document.getElementsByClassName("list-group-item");for(let e=0;e<i.length;e++){let a=i[e].getAttribute("data-sksj");const r=new RegExp(`^(.*)(${n[l]})([^节]*)(第|,)(${t})(节|,)(.*)$`),d=a.match(r);let u=i[e].getAttribute("data-xxq");d&&(2!==u.length&&o!==u||(c=i[e].getAttribute("data-xkkh").split("-")[3],0!==s.length&&c===s.at(-1)||s.push(c)))}const a=document.getElementsByClassName("outer_xkxx_list");if(s.length)for(let t=0;t<s.length;t++){let o=s[t];for(let t=1;t<a.length;t++){let n=a[t].getAttribute("data-xskcdm");if(n&&n.includes(o)){let t=document.querySelector('.outer_xkxx_list[data-xskcdm="'+n+'"]');if(t){let o=t.cloneNode(!0);e.appendChild(o)}break}}}}e.setAttribute("class","outer_xkxx_list"),e.style.backgroundColor="lightyellow";const n={"1_":"周一","2_":"周二","3_":"周三","4_":"周四","5_":"周五","6_":"周六","7_":"周日"};function l(){let e,t=document.querySelector('[data-xxq][aria-expanded="true"]');if(t)e=t.getAttribute("data-xxq");else{const o=document.querySelectorAll('[data-toggle="tab"]');t=Array.from(o).find((e=>e.innerHTML.includes("课表"))),e=t.getAttribute("data-xxq")}return e}document.body.addEventListener("click",(function(t){if(t.target.closest(".outer_left")||t.target.matches("[data-xxq]")&&t.target.matches('[role="tab"]')){const e=/^\d+_\d+$/;let t=[];const o=setInterval((()=>{if(t.length>0){clearInterval(o);for(let e of t){const t=e.innerHTML,o=document.createElement("a");o.innerHTML=t,o.href="javascript:void(0);",o.className="link",e.innerHTML="",e.appendChild(o)}}else{console.log("Still waiting...");const o=document.querySelectorAll("[id]");t=Array.from(o).filter((t=>e.test(t.id)))}}),100)}for(let s in n){let n;t.target.closest(`[id^='${s}']`)&&(e.innerHTML="",n=t.target.closest(`[id^='${s}']`).id,o(n.split("_")[1],l(),s))}}),!0)};const F="[ZJU XZZD TODO URL]";function O(e){console.log(`${F} Processing API Data`);const t=new MutationObserver((()=>{document.querySelector(".latest-todo-list.card.gtm-label")&&(console.log(`${F} Found .latest-todo-list! Processing todos...`),e.forEach((e=>{const t=e.title,o=e.course_id,n=e.id;console.log(`${F} Processing activity: ${t} (Course ID: ${o}, Activity ID: ${n})`),document.querySelectorAll('a[ng-click="openActivity(todoData)"]').forEach((e=>{const l=e.querySelector('span[ng-bind="todoData.title"]');if(l&&l.textContent.trim()===t.trim()){console.log(`${F} Title matched: ${t}`);const l=`https://courses.zju.edu.cn/course/${o}/learning-activity#/${n}`;e.setAttribute("href",l),e.setAttribute("target","_blank"),console.log(`${F} Link updated for activity: ${t} -> ${l}`)}}))})),t.disconnect())}));t.observe(document.body,{childList:!0,subtree:!0})}const M=()=>{!function(){console.log("[zju-webx]:running");let e=new URL(window.location.href),t=e.pathname,o=!0;"zdbk.zju.edu.cn"===e.hostname?"/jwglxt/xsbtx/xsbtx_cxXsbtxIndex.html"===t?function(){console.log("[zju-webx]:zdbk_xsbtx");let e="100px";function t(t){let o=document.getElementById("searchGrid_jsxm");if(!o)return void console.error("name th not found");o.style.display="table-cell",o.style.width=e;let n=document.querySelector("#searchGrid > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(4)");n.style.display="table-cell",n.style.width=e,function(e,t,o){new MutationObserver((function(e,t){e.forEach(o)})).observe(e,{subtree:!0,childList:!0})}(t,0,(function(e){"childList"==e.type&&"TBODY"==e.target.tagName&&1==e.addedNodes.length&&"TR"==e.addedNodes[0].tagName&&e.addedNodes[0].querySelectorAll('td[aria-describedby="searchGrid_jsxm"]').forEach((e=>{e.style.display="table-cell"}))}))}!function(e){var t=e.getter();if(!t)return e.recursive||(e.recursive=!1),new MutationObserver((function(t){var o=e.getter();o&&(this.disconnect(),e.callback(o))})).observe(e.watchOn||document,{subtree:!!e.recursive||!e.watchOn,childList:!0});e.callback(t)}({getter:()=>document.getElementById("searchGrid"),callback:t,recursive:!0})}():o=!1:"courses.zju.edu.cn"===e.hostname?(function(){const e="/api/todos?no-intercept=true";console.log(`${F} Fetching data from ${e}`),fetch(e).then((e=>e.json())).then((e=>{console.log(`${F} Received API Response:`,e),e&&Array.isArray(e.todo_list)?(O(e.todo_list),setTimeout((()=>{console.log(`${F} Re-checking todos after delay...`),O(e.todo_list)}),2e3)):console.error(`${F} API todo_list is missing or not an array:`,e)})).catch((e=>{console.error(`${F} Error fetching API data:`,e)}))}(),function(){const e=new MutationObserver((()=>{document.querySelector(".latest-todo-list.card.gtm-label")&&(console.log(`${F} .latest-todo-list is loaded and ready for processing.`),e.disconnect())}));e.observe(document.body,{childList:!0,subtree:!0})}(),function(){function e(){var e=window.parent.document;const t=new MutationObserver((()=>{var n=e.querySelector("#pdf-viewer");if(n){console.log("已检测到PDF Viewer");var l=n.getAttribute("src");if(!l)return void console.log("no src, skip");console.log(l);var s=decodeURIComponent(l.substr(l.indexOf("http")));if(console.log(s),s.includes("http")){var c=e.querySelector(".header.clearfix");if(c){console.log("内页展示");var i=e.querySelectorAll(".right.close")[1],a=e.createElement("a");a.style.position="absolute",a.style.top="14px",a.style.right="200px",a.id="downloadingButton",a.href=s;var r=e.createElement("i");r.className="font font-download",a.appendChild(r),c.insertBefore(a,i)}else confirm("Do you want to download this file?")&&o(s)}else!async function(){try{const c=await async function(){return new Promise(((e,t)=>{chrome.runtime?chrome.runtime.sendMessage({action:"getPPTUrl"},(o=>{chrome.runtime.lastError?t(new Error(chrome.runtime.lastError.message)):o?.pptUrl?(console.log("从背景脚本获取的数据：",o.pptUrl),e(o.pptUrl)):t(new Error("无效的响应格式"))})):t(new Error("Chrome runtime API不可用"))}))}();console.log(c);var t=e.querySelector(".header.clearfix");if(t){console.log("内页展示");var n=e.querySelectorAll(".right.close")[1],l=e.createElement("a");l.style.position="absolute",l.style.top="14px",l.style.right="200px",l.id="downloadingButton",l.href=c;var s=e.createElement("i");s.className="font font-download",l.appendChild(s),t.insertBefore(l,n)}else confirm("Do you want to download this file?")&&o(c)}catch(e){console.error("获取PPT URL失败:",e)}}();t.disconnect()}else console.log("未检测到PDF-Viewer")}));function o(t){var o=e.createElement("a");o.href=t,e.body.append(o),o.click()}t.observe(document.body,{childList:!0,subtree:!0})}"loading"===document.readyState?(console.log("loading"),document.addEventListener("DOMContentLoaded",e)):(console.log("ready"),e())}()):o=!1}()};$(document).ready((async function(){["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)||window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")?(async()=>{var e=6048e5;if(console.log("选课插件已启动"),await async function(){let e=await R("isinit");if(e&&e.isinit)return void console.log("插件已初始化");const t=await fetch(chrome.runtime.getURL("/data/default.json")),o=await t.json();console.log("加载json文件至chrome缓存",o),await new Promise(((e,t)=>{chrome.storage.local.set({"search-data":JSON.stringify(o)},(function(){console.log("数据已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({"search-last-update":0},(function(){console.log("数据时间已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({config:{enableDataExpirationReminders:!1,enableLessonListAutoScroll:!0}},(function(){console.log("配置已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({isinit:!0},(function(){console.log("初始化成功"),e(!0)}))}))}(),["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)){let t=await async function(){const e=await new Promise(((e,t)=>{chrome.storage.local.get("config",(function(t){e(t)}))}));return console.log("配置",e),0===Object.keys(e).length?(console.warn("配置为空对象 使用默认配置"),{enableDataExpirationReminders:!0,lessonListAutoScroll:!0}):e}();_=t.config;let o=(new Date).getTime(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update");if(l=Number(l),n&&o-l<e)console.log("发现本地存储的数据"),await N(n,l),await R("needUpdate").then((e=>{e&&e.needUpdate&&(B("选课插件提示","检测到打开查老师，评分数据已更新",1e4),chrome.storage.local.set({needUpdate:!1},(function(){console.log("needUpdate已写入插件储存空间")})))}));else try{if(await async function(){const e="search-data",t="search-version",o="search-last-update",n=Number(localStorage.getItem(t)),l=Number(localStorage.getItem(o));let s;if(n&&5===n&&Date.now()-l<6048e5&&(s=s||JSON.parse(localStorage.getItem(e)),s&&"colleges"in s&&"teachers"in s))return;const c=new Date,i="/static/json/search.json?v=5&date="+c.getUTCFullYear()+(c.getUTCMonth()+1).toString().padStart(2,"0")+c.getUTCDate().toString().padStart(2,"0");try{const n=await fetch(i);if(n.ok){const l=await n.json();"colleges"in l&&"teachers"in l&&(s=l,localStorage.setItem(e,JSON.stringify(l)),localStorage.setItem(t,5..toString()),localStorage.setItem(o,Date.now().toString()))}}catch(e){console.error("Error fetching search data:",e)}}(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update"),!n||!l)throw new Error("获取数据失败");console.log("模拟点击查老师搜索框获取数据"),console.log(n),console.log(l),console.log("将页面存储的数据写入插件储存空间"),await N(n,l),B("选课插件提示","检测到打开查老师，评分数据已更新",1e4)}catch(e){console.log("模拟点击查老师搜索框获取数据失败",e),B("选课插件提示","检测到打开查老师，查老师未响应，请稍后再试",1e4)}}else if(window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")){let t=await R("search-last-update");if(t=t["search-last-update"],t=Number(t),(!t||(new Date).getTime()-t>e)&&_.enableDataExpirationReminders&&(B("选课插件提示","评分数据已过期，点击打开查老师页面更新评分",2e4,"http://chalaoshi.click/"),await new Promise(((e,t)=>{chrome.storage.local.set({needUpdate:!0},(function(){console.log("needUpdate已写入插件储存空间"),e(!0)}))}))),!await R("search-data"))return void B("选课插件提示","评分数据异常，点击打开查老师页面更新评分",2e4);U.observe(q,D),$("#nextPage").length>0&&($("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),I()),$(window).scroll((function(){P(),I()}))}})():window.location.href.includes("https://classroom.zju.edu.cn/coursedetail")&&!window.location.href.includes("livingroom")?A():window.location.href.includes("https://classroom.zju.edu.cn/livingpage?")||window.location.href.includes("https://interactivemeta.cmc.zju.edu.cn/")||window.location.href.includes("https://classroom.zju.edu.cn/livingroom?")?function(){const n=new URL(window.location.href).host;/classroom\.zju\.edu\.cn/.test(n)&&function(){const e=t,n=document.createElement("p");n.style="padding:5px 0;",n.innerText="请视频开始正常播放后：";const l=o;l.innerText="点击下载视频",l.addEventListener("click",(function(){const e=document.getElementsByClassName("course_name")[0].innerText,t=document.getElementById("cmc_player_video").src,o=document.createElement("a");o.href=t,o.target="_blank",o.download=e||"ZhiYunPPT",document.body.appendChild(o),o.click(),document.body.removeChild(o)})),e.appendChild(n),e.appendChild(l),document.body.appendChild(e)}(),/interactivemeta\.cmc\.zju\.edu\.cn/.test(n)&&function(){const t=e,n=document.createElement("p");n.style="padding:5px 0;",n.innerText="请视频开始正常播放后：";const l=o;l.innerText="点击下载视频",l.addEventListener("click",(function(){const e=document.getElementById("cmc_player_video").src,t=document.createElement("a");t.href=e,t.target="_blank",t.download="ZhiYunPPT",document.body.appendChild(t),t.click(),document.body.removeChild(t)})),t.appendChild(n),t.appendChild(l),document.body.appendChild(t)}()}():window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxjc")?async function(){const e=new DOMParser,t=[],o=function(){const e=window.location.search;return new URLSearchParams(e).get("su")}();let n=0;for(;0===t.length&&n<1e4;)Array.from(document.getElementsByClassName("ui-widget-content jqgrow ui-row-ltr")).forEach((e=>{t.push(e)})),await new Promise((e=>setTimeout(e,100))),n+=100;await Promise.all(t.map((async(t,n)=>{const l="xkkh="+t.id,s="http://zdbk.zju.edu.cn/jwglxt/xsxjc/xsxjc_cxJcxx.html?time="+Date.now()+"&gnmkdm=N253535&su="+o;try{const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:l});if(!o.ok)throw new Error("解析失败");const n=await o.text(),c=e.parseFromString(n,"text/html");let i=c.body.textContent||c.body.innerText;i=i.split(/[,:\t\n]/).filter((e=>""!==e.trim()));let a="";"无教材"===i[1]||"作者"===i[1]?a="教材名称：无教材":i.forEach((e=>{a+="教材名称"===e||"作者"===e||"出版社"===e||"版本"===e?e+"：":e+"\n"}));const r=document.createElement("tr"),d=document.createElement("td");d.textContent=a,d.colSpan="8",d.style.border="black 2px solid",d.style.whiteSpace="pre-wrap",r.appendChild(d),t.parentNode.insertBefore(r,t.nextSibling)}catch(e){console.error("报错",e)}})))}():(window.location.href.includes("http://zdbk.zju.edu.cn")||window.location.href.includes("https://courses.zju.edu.cn"))&&M()}))})();