(()=>{"use strict";const e=document.createElement("div");e.style="margin:0;padding:12px;width:200px;height:5vh;position:fixed;top:10%;right:1%;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const t=document.createElement("div");t.style="margin:0;padding:12px;width:125px;height:15vh;position:fixed;top:15%;right:0;background:#fff;z-index:9999;opacity:0.8;border-left:solid 2px #008000;border-bottom:solid 2px #008000;font-size:14px;";const o=document.createElement("p");o.innerText="务必页面下载完成后再点击下载视频",o.style="padding:5px 0;cursor:pointer;text-decoration:underline;";const n=document.createElement("div");n.style.position="fixed",n.style.bottom="10px",n.style.right="10px",n.style.backgroundColor="white",n.style.padding="15px",n.style.border="1px solid #ccc",n.style.zIndex=9999,n.style.maxHeight="80%",n.style.overflowY="auto",n.style.fontSize="14px",n.style.lineHeight="1.5",n.style.boxShadow="0 0 10px rgba(0,0,0,0.1)",n.style.borderRadius="5px",n.style.width="320px",n.style.transition="all 0.3s ease",n.style.backgroundColor="rgba(255, 255, 255, 0.95)",n.style.display="flex",n.style.flexDirection="column";const l=n,s=document.createElement("div");s.style.display="flex",s.style.justifyContent="space-between",s.style.alignItems="center",s.style.cursor="default",s.style.marginBottom="10px";const c=s,a=document.createElement("button");a.innerText="—",a.style.border="none",a.style.background="none",a.style.cursor="pointer",a.style.fontSize="16px",a.style.lineHeight="1",a.style.padding="0",a.style.marginLeft="10px",a.title="最小化";const i=a,r=document.createElement("button");r.innerText="下载选中视频",r.style.display="block",r.style.marginTop="10px",r.style.width="100%",r.style.padding="8px",r.style.backgroundColor="#4CAF50",r.style.color="white",r.style.border="none",r.style.borderRadius="3px",r.style.cursor="pointer",r.style.fontSize="14px";const d=r,h=document.createElement("div");h.style.marginTop="10px",h.style.fontSize="12px",h.style.color="#555";const p=h,u=document.createElement("div");u.style.width="100%",u.style.backgroundColor="#f3f3f3",u.style.borderRadius="5px",u.style.marginTop="10px",u.style.display="none";const g=u,m=document.createElement("div");m.style.width="0%",m.style.height="20px",m.style.backgroundColor="#4CAF50",m.style.borderRadius="5px";const y=m,f=document.createElement("ul");f.style.listStyle="none",f.style.padding="0",f.style.marginTop="10px";const b=f,x=document.createElement("li");x.style.marginTop="10px",x.style.display="block",x.style.borderBottom="1px solid #ddd",x.style.paddingBottom="10px";const w=x,k=document.createElement("div");k.style.display="flex",k.style.alignItems="center";const v=k,C=document.createElement("div");C.style.width="100%",C.style.backgroundColor="#f3f3f3",C.style.borderRadius="5px",C.style.marginTop="5px",C.style.display="none";const E=C,T=document.createElement("div");T.style.width="0%",T.style.height="10px",T.style.backgroundColor="#4CAF50",T.style.borderRadius="5px";const z=T,S=document.createElement("div");S.style.marginTop="5px",S.style.fontSize="12px",S.style.color="#555",S.style.display="none",S.innerText="速度: 0 KB/s | 预计剩余时间: 0 s";const j=S,P=()=>{!function(){console.log("智云课堂批量下载脚本已启动");const e=function(e){const t=window.location.search.substring(1).split("&");for(let o=0;o<t.length;o++){const n=t[o].split("=");if(n[0]===e)return decodeURIComponent(n[1]);if(decodeURIComponent(n[0])===e)return decodeURIComponent(n[1])}return!1}("course_id");if(!e)return void console.log("course_id not found");console.log(`课程ID: ${e}`);const t=`https://classroom.zju.edu.cn/courseapi/v2/course/catalogue?course_id=${e}`;console.log(`API URL: ${t}`),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>(console.log("API响应状态:",e.status),e.json()))).then((e=>{if(console.log("API响应数据:",e),e.success&&e.result&&e.result.data){const t=e.result.data;console.log(`获取到的课程目录项数量: ${t.length}`);const o=[];for(let e=0;e<t.length;e++){const n=t[e];let l=n.title,s=null,c=!0;try{const t=JSON.parse(n.content);console.log(`解析第${e+1}项的content字段成功`),t.playback&&t.playback.url?(s=t.playback.url,console.log(`第${e+1}项视频URL: ${s}`)):t.url?(s=t.url,console.log(`第${e+1}项视频URL: ${s}`)):(c=!1,console.log(`第${e+1}项没有可用的视频URL`))}catch(t){console.error(`解析第${e+1}项的content字段失败:`,t),c=!1}c&&s||(l+="（暂无回放）"),o.push({title:l,videoUrl:s,available:c,originalIndex:e})}console.log(`可下载的视频数量: ${o.filter((e=>e.available)).length}`),function(e){console.log("正在添加批量下载的用户界面");const t=l,o=c,n=document.createElement("div");n.style.fontWeight="bold",n.innerText="批量下载视频",o.appendChild(n);const s=i;s.addEventListener("click",(()=>{t.classList.contains("minimized")?(t.classList.remove("minimized"),a.style.display="flex",u.style.display="block",f.style.display="block",m.style.display="block",$.style.display="block",s.innerText="—",s.title="最小化",console.log("恢复下载界面")):(t.classList.add("minimized"),a.style.display="none",u.style.display="none",f.style.display="none",m.style.display="none",$.style.display="none",s.innerText="+",s.title="恢复",console.log("最小化下载界面"))})),o.appendChild(s),t.appendChild(o);const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.marginBottom="10px";const r=document.createElement("input");r.type="checkbox",r.id="selectAllCheckbox";const h=document.createElement("label");h.htmlFor="selectAllCheckbox",h.innerText=" 全选",a.appendChild(r),a.appendChild(h),t.appendChild(a);const u=d;u.addEventListener("mouseover",(()=>{u.disabled||(u.style.backgroundColor="#45a049")})),u.addEventListener("mouseout",(()=>{u.disabled||(u.style.backgroundColor="#4CAF50")})),t.appendChild(u);const m=p;t.appendChild(m);const f=g;t.appendChild(f);const x=y,$=b;t.appendChild($),e.forEach(((e,t)=>{const o=w,n=v,l=document.createElement("input");l.type="checkbox",l.value=e.originalIndex,l.className="videoCheckbox",l.style.marginRight="10px",e.available||(l.disabled=!0);const s=document.createElement("label");s.style.flex="1",s.style.cursor="pointer",s.innerText=e.title,n.appendChild(l),n.appendChild(s),o.appendChild(n);const c=E,a=z;c.appendChild(a);const i=j;o.appendChild(c),o.appendChild(i),$.appendChild(o)})),document.body.appendChild(t),console.log("批量下载界面已添加到页面"),r.addEventListener("change",(function(){t.querySelectorAll(".videoCheckbox").forEach((e=>{e.disabled||(e.checked=this.checked)})),console.log(`全选复选框状态改变为: ${this.checked}`)})),u.addEventListener("click",(function(){console.log("下载按钮被点击"),m.innerText="开始下载...";const o=t.querySelectorAll(".videoCheckbox"),n=[];if(o.forEach((t=>{if(t.checked){const o=parseInt(t.value);n.push({video:e[o],index:o})}})),0===n.length)return alert("请选择要下载的视频"),m.innerText="",void console.log("未选择任何视频进行下载");console.log(`选中的视频数量: ${n.length}`),n.forEach(((e,t)=>{console.log(`准备下载 (${t+1}/${n.length}): ${e.video.title} - ${e.video.videoUrl}`)})),u.disabled=!0,u.innerText="下载中...",u.style.backgroundColor="#888",u.style.cursor="not-allowed",console.log("下载按钮已禁用，文本已更改为 '下载中...'"),f.style.display="block",x.style.width="0%",console.log("显示整体进度条");let l=0,s=0;!function e(){if(l<n.length){const t=n[l],o=t.video,c=t.index,a=$.children[c],i=a.querySelector("div:nth-child(2)"),r=i.querySelector("div"),d=a.querySelector("div:nth-child(3)");m.innerText=`正在下载 (${l+1}/${n.length}): ${o.title}`,console.log(`开始下载 (${l+1}/${n.length}): ${o.title} - ${o.videoUrl}`),i.style.display="block",d.style.display="block";const h=new XMLHttpRequest,p=""+o.videoUrl;console.log(`下载链接: ${p}`),h.open("GET",p,!0),h.responseType="blob";let u=Date.now();h.onprogress=function(e){if(e.lengthComputable){const t=(e.loaded/e.total*100).toFixed(2);r.style.width=t+"%";const o=(Date.now()-u)/1e3,n=e.loaded,l=o>0?(n/o/1024).toFixed(2):"0",s=e.total-e.loaded,c=l>0?(s/1024/l).toFixed(2):"0";d.innerText=`速度: ${l} KB/s | 预计剩余时间: ${c} s`}},h.onload=function(){if(200===h.status||206===h.status){const e=h.response,t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=o.title.replace(/[\/\\:*?"<>|]/g,"_")+".mp4",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t),console.log(`下载已启动 (${o.title}): ${n.download}`)}else console.error(`下载失败 (${o.title}): 状态码 ${h.status}`),alert(`下载失败: ${o.title} （状态码 ${h.status}）`);s++,console.log(`完成下载: ${o.title} (${s}/${n.length})`);const t=(s/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,setTimeout(e,1e3)},h.onerror=function(){console.error(`下载失败 (${o.title}): 网络错误`),alert(`下载失败: ${o.title} （网络错误）`),s++,console.log(`下载错误处理: ${o.title} (${s}/${n.length})`);const t=(s/n.length*100).toFixed(2);x.style.width=t+"%",console.log(`整体进度: ${t}%`),l++,setTimeout(e,1e3)},console.log(`发送XHR请求 (${o.title})`),h.send()}else m.innerText="所有下载已完成！请查看浏览器的下载管理器。",console.log("所有下载已完成"),setTimeout((()=>{f.style.display="none",console.log("隐藏整体进度条")}),5e3),u.disabled=!1,u.innerText="下载选中视频",u.style.backgroundColor="#4CAF50",u.style.cursor="pointer",console.log("恢复下载按钮状态")}()}))}(o)}else console.log("从API获取数据失败，数据结构不符合预期")})).catch((e=>{console.log("Error fetching API:",e)}))}()};function I(){const e=$(document).height()-$(window).height()-$(window).scrollTop();$("#nextPage").length>0&&e<100&&($("#nextPage")[0].innerText="加载中...",$("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),$("#nextPage")[0].innerText="点此加载更多")}async function L(e,t=0){if(t>10)return;console.log("开始加载评分数据",e),await new Promise((e=>setTimeout(e,500)));let o=$(e).siblings().first().find("table");if("true"==$(o).attr("data-score"))return;let n=$(o).find("tbody").children("tr");if(0==n.length)return console.log("trs为空 zdbk还在记载 再次调用loadScoreData"),void L(e,t+1);chrome.storage.local.get("search-data",(e=>{e=JSON.parse(e["search-data"]),$(o).find("thead").children("tr").children("th").eq(0).after('<th width="5%" >评分</th>'),n.each((function(t,o){if($(o).attr("id")){let t=[];t=$(o).children("td").eq(1).children("a").html().split("<br>"),console.log("教师姓名",t);let n="";t.forEach((t=>{let o=e.teachers.find((e=>e.name==t));o&&o.rate?parseFloat(o.rate)>8.5?n+='<a style="color:red;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":parseFloat(o.rate)<2?n+='<a style="color:#4340ff;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href=https://chalaoshi.click/t/'+o.id+' target="_blank" >'+o.rate+"</a><br>":n+='<a style="color:black;" href="javascript:void(0);" > N/A </a><br>'})),n&&$(o).children("td").eq(1).after("<td>"+n+"</td>");let l=$(o).children("td").eq(-6).html();console.log("选课难度",l);let s=l.split("/")[0];s=Number(s);let c=$(o).children("td").eq(-3).html();c=c.split("<")[0];let a=Number(c),i=$(o).children("td").eq(-2).html();i=i.split("<")[0];let r=Number(i);if(console.log("余量",s),console.log("本专业待定",a),console.log("全部待定",r),s<=0)$(o).children("td").eq(-3).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>'),$(o).children("td").eq(-2).append('<br><span style="font-weight:bold; color: darkgray;">无法选中</span>');else{let e=a/s,t=e<1?"容易选中":e<5?"不易选中":e<10?"难选中":"极难选中",n=`<br><span style="font-weight: bold; color: ${e<1?"green":e<5?"darkorange":e<10?"#e60c0c":"black"};">「${e.toFixed(2)} 进 1」<br>${t}</span>`;$(o).children("td").eq(-3).append(n);let l=r/s,c=l<1?"容易选中":l<5?"不易选中":l<10?"难选中":"极难选中",i=`<br><span style="font-weight: bold; color: ${l<1?"green":l<5?"darkorange":l<10?"#e60c0c":"black"};">「${l.toFixed(2)} 进 1」<br>${c}</span>`;$(o).children("td").eq(-2).append(i)}}else console.log("课程错误 无教学班"),$(o).children("td").eq(0).attr("colspan","14")})),$(o).attr("data-score","true")}))}function U(){$(".panel-heading").each((function(e,t){$(t).data("events")&&$(t).data("events").bindForgeClick||($(t).click((e=>L(e.currentTarget))),$(t).data("events",{bindForgeClick:!0}),"display: block;"==$(t).siblings().first().attr("style")&&L(t))}))}let R={enableDataExpirationReminders:!0};function A(e){return new Promise(((t,o)=>{chrome.storage.local.get(e,(e=>{0!==Object.keys(e).length?t(e):t(null)}))}))}const F=document.getElementById("contentBox"),N=new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&e.addedNodes.length>0&&(console.log("选课系统界面栏目已切换 启动默认下拉"),I(),U())}))})),q={childList:!0};function D(e,t){return new Promise(((o,n)=>{chrome.storage.local.set({"search-data":e,"search-last-update":t},(function(){console.log("数据已写入插件储存空间"),o(!0)}))}))}function _(e,t,o=3e3,n=""){chrome.runtime.sendMessage({data:{title:e,message:t,closeTime:o,url:n}},(function(e){console.log("收到来自后台的回复："+e)}))}$(document).ready((async function(){["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)||window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")?(async()=>{var e=6048e5;if(console.log("选课插件已启动"),await async function(){let e=await A("isinit");if(e&&e.isinit)return void console.log("插件已初始化");const t=await fetch(chrome.runtime.getURL("/data/default.json")),o=await t.json();console.log("加载json文件至chrome缓存",o),await new Promise(((e,t)=>{chrome.storage.local.set({"search-data":JSON.stringify(o)},(function(){console.log("数据已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({"search-last-update":0},(function(){console.log("数据时间已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({config:{enableDataExpirationReminders:!1,enableLessonListAutoScroll:!0}},(function(){console.log("配置已写入插件储存空间"),e(!0)}))})),await new Promise(((e,t)=>{chrome.storage.local.set({isinit:!0},(function(){console.log("初始化成功"),e(!0)}))}))}(),["https://chalaoshi.buzz/","https://chalaoshi.click/","https://chalaoshi.de/","http://chalaoshi-buzz-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-click-s.webvpn.zju.edu.cn:8001/","http://chalaoshi-de-s.webvpn.zju.edu.cn:8001/"].includes(window.location.href)){let t=await async function(){const e=await new Promise(((e,t)=>{chrome.storage.local.get("config",(function(t){e(t)}))}));return console.log("配置",e),0===Object.keys(e).length?(console.warn("配置为空对象 使用默认配置"),{enableDataExpirationReminders:!0,lessonListAutoScroll:!0}):e}();R=t.config;let o=(new Date).getTime(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update");if(l=Number(l),n&&o-l<e)console.log("发现本地存储的数据"),await D(n,l),await A("needUpdate").then((e=>{e&&e.needUpdate&&(_("选课插件提示","检测到打开查老师，评分数据已更新",1e4),chrome.storage.local.set({needUpdate:!1},(function(){console.log("needUpdate已写入插件储存空间")})))}));else try{if(await async function(){const e="search-data",t="search-version",o="search-last-update",n=Number(localStorage.getItem(t)),l=Number(localStorage.getItem(o));let s;if(n&&5===n&&Date.now()-l<6048e5&&(s=s||JSON.parse(localStorage.getItem(e)),s&&"colleges"in s&&"teachers"in s))return;const c=new Date,a="/static/json/search.json?v=5&date="+c.getUTCFullYear()+(c.getUTCMonth()+1).toString().padStart(2,"0")+c.getUTCDate().toString().padStart(2,"0");try{const n=await fetch(a);if(n.ok){const l=await n.json();"colleges"in l&&"teachers"in l&&(s=l,localStorage.setItem(e,JSON.stringify(l)),localStorage.setItem(t,5..toString()),localStorage.setItem(o,Date.now().toString()))}}catch(e){console.error("Error fetching search data:",e)}}(),n=localStorage.getItem("search-data"),l=localStorage.getItem("search-last-update"),!n||!l)throw new Error("获取数据失败");console.log("模拟点击查老师搜索框获取数据"),console.log(n),console.log(l),console.log("将页面存储的数据写入插件储存空间"),await D(n,l),_("选课插件提示","检测到打开查老师，评分数据已更新",1e4)}catch(e){console.log("模拟点击查老师搜索框获取数据失败",e),_("选课插件提示","检测到打开查老师，查老师未响应，请稍后再试",1e4)}}else if(window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxk")){let t=await A("search-last-update");if(t=t["search-last-update"],t=Number(t),(!t||(new Date).getTime()-t>e)&&R.enableDataExpirationReminders&&(_("选课插件提示","评分数据已过期，点击打开查老师页面更新评分",2e4,"http://chalaoshi.click/"),await new Promise(((e,t)=>{chrome.storage.local.set({needUpdate:!0},(function(){console.log("needUpdate已写入插件储存空间"),e(!0)}))}))),!await A("search-data"))return void _("选课插件提示","评分数据异常，点击打开查老师页面更新评分",2e4);N.observe(F,q),$("#nextPage").length>0&&($("#nextPage").attr("href")&&$("#nextPage").removeAttr("href"),$("#nextPage")[0].click(),U()),$(window).scroll((function(){I(),U()}))}})():window.location.href.includes("https://classroom.zju.edu.cn/coursedetail")&&!window.location.href.includes("livingroom")?P():window.location.href.includes("https://classroom.zju.edu.cn/livingpage?")||window.location.href.includes("https://interactivemeta.cmc.zju.edu.cn/")||window.location.href.includes("https://classroom.zju.edu.cn/livingroom?")?function(){const n=new URL(window.location.href).host;/classroom\.zju\.edu\.cn/.test(n)&&function(){const e=t,n=o;n.addEventListener("click",(function(){const e=document.getElementsByClassName("course_name")[0].innerText,t=document.getElementById("cmc_player_video").src,o=document.createElement("a");o.href=t,o.target="_blank",o.download=e||"ZhiYunPPT",document.body.appendChild(o),o.click(),document.body.removeChild(o)})),e.appendChild(n),document.body.appendChild(e)}(),/interactivemeta\.cmc\.zju\.edu\.cn/.test(n)&&function(){const t=e,n=o;n.addEventListener("click",(function(){const e=document.getElementById("cmc_player_video").src,t=document.createElement("a");t.href=e,t.target="_blank",t.download="ZhiYunPPT",document.body.appendChild(t),t.click(),document.body.removeChild(t)})),t.appendChild(n),document.body.appendChild(t)}()}():window.location.href.includes("http://zdbk.zju.edu.cn/jwglxt/xsxjc")&&async function(){const e=new DOMParser,t=[],o=function(){const e=window.location.search;return new URLSearchParams(e).get("su")}();let n=0;for(;0===t.length&&n<1e4;)Array.from(document.getElementsByClassName("ui-widget-content jqgrow ui-row-ltr")).forEach((e=>{t.push(e)})),await new Promise((e=>setTimeout(e,100))),n+=100;await Promise.all(t.map((async(t,n)=>{const l="xkkh="+t.id,s="http://zdbk.zju.edu.cn/jwglxt/xsxjc/xsxjc_cxJcxx.html?time="+Date.now()+"&gnmkdm=N253535&su="+o;try{const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:l});if(!o.ok)throw new Error("解析失败");const n=await o.text(),c=e.parseFromString(n,"text/html");let a=c.body.textContent||c.body.innerText;a=a.split(/[,:\t\n]/).filter((e=>""!==e.trim()));let i="";"无教材"===a[1]||"作者"===a[1]?i="教材名称：无教材":a.forEach((e=>{i+="教材名称"===e||"作者"===e||"出版社"===e||"版本"===e?e+"：":e+"\n"}));const r=document.createElement("tr"),d=document.createElement("td");d.textContent=i,d.colSpan="8",d.style.border="black 2px solid",d.style.whiteSpace="pre-wrap",r.appendChild(d),t.parentNode.insertBefore(r,t.nextSibling)}catch(e){console.error("报错",e)}})))}()}))})();
