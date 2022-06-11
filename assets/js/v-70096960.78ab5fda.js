"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80734],{73396:(n,e,t)=>{t.r(e),t.d(e,{default:()=>qn});var a=t(78e3);const o=(0,a.Uk)("注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 "),s=(0,a._)("div",{class:"custom-container warning"},[(0,a._)("p",{class:"custom-container-title"},"注意"),(0,a._)("p",null,"App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。")],-1),p=(0,a.uE)('<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="object-object" tabindex="-1"><a class="header-anchor" href="#object-object" aria-hidden="true">#</a> Object object</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>onLaunch</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序初始化。</td><td></td></tr><tr><td>onShow</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序启动或切前台。</td><td></td></tr><tr><td>onHide</td><td>function</td><td></td><td>否</td><td>生命周期回调——监听小程序切后台。</td><td></td></tr><tr><td>onError</td><td>function</td><td></td><td>否</td><td>错误监听函数。</td><td></td></tr><tr><td>onPageNotFound</td><td>function</td><td></td><td>否</td><td>页面不存在监听函数。</td><td>1.9.90</td></tr><tr><td>onUnhandledRejection</td><td>function</td><td></td><td>否</td><td>未处理的 Promise 拒绝事件监听函数。</td><td>2.10.0</td></tr><tr><td>onThemeChange</td><td>function</td><td></td><td>否</td><td>监听系统主题变化</td><td>2.11.0</td></tr></tbody></table><p>| 其他 | any | | 否 | 开发者可以添加任意的函数或数据变量到 <code>Object</code> 参数中，用 <code>this</code> 可以访问 |</p>',4),c=(0,a.Uk)("关于小程序前后台的定义和小程序的运行机制，请参考 "),r=(0,a.Uk)("运行机制"),l=(0,a.Uk)("。"),i=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something initial when launch.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something when show.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Do something when hide.</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&quot;I am global data&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onlaunch-object-object" tabindex="-1"><a class="header-anchor" href="#onlaunch-object-object" aria-hidden="true">#</a> onLaunch(Object object)</h3>',2),d=(0,a.Uk)("小程序初始化完成时触发，全局只触发一次。参数也可以使用 "),u={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},h=(0,a._)("code",null,"wx.getLaunchOptionsSync",-1),m=(0,a.Uk)(" 获取。"),b=(0,a.Uk)("参数: 与 "),k={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html",target:"_blank",rel:"noopener noreferrer"},g=(0,a._)("code",null,"wx.getLaunchOptionsSync",-1),v=(0,a.Uk)(" 一致"),j=(0,a._)("h3",{id:"onshow-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onshow-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onShow(Object object)")],-1),_=(0,a.Uk)("小程序启动，或从后台进入前台显示时触发。也可以使用 "),f={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},w=(0,a._)("code",null,"wx.onAppShow",-1),x=(0,a.Uk)(" 绑定监听。"),U=(0,a.Uk)("参数: 与 "),q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html",target:"_blank",rel:"noopener noreferrer"},A=(0,a._)("code",null,"wx.onAppShow",-1),y=(0,a.Uk)(" 一致"),O=(0,a._)("h2",{id:"onhide",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onhide","aria-hidden":"true"},"#"),(0,a.Uk)(" onHide()")],-1),W=(0,a.Uk)("小程序从前台进入后台时触发。也可以使用 "),P={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html",target:"_blank",rel:"noopener noreferrer"},S=(0,a._)("code",null,"wx.onAppHide",-1),T=(0,a.Uk)(" 绑定监听。"),E=(0,a._)("h2",{id:"onerror-string-error",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onerror-string-error","aria-hidden":"true"},"#"),(0,a.Uk)(" onError(String error)")],-1),N=(0,a.Uk)("小程序发生脚本错误或 API 调用报错时触发。也可以使用 "),C={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},R=(0,a._)("code",null,"wx.onError",-1),F=(0,a.Uk)(" 绑定监听。"),L=(0,a.Uk)("参数: 与 "),D={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html",target:"_blank",rel:"noopener noreferrer"},H=(0,a._)("code",null,"wx.onError",-1),I=(0,a.Uk)(" 一致"),z=(0,a._)("h2",{id:"onpagenotfound-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onpagenotfound-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onPageNotFound(Object object)")],-1),Z=(0,a.Uk)("小程序要打开的页面不存在时触发。也可以使用 "),B={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},M=(0,a._)("code",null,"wx.onPageNotFound",-1),G=(0,a.Uk)(" 绑定监听。注意事项请参考 "),J={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},K=(0,a._)("code",null,"wx.onPageNotFound",-1),Q=(0,a.Uk)("。"),V=(0,a.Uk)("参数: 与 "),X={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html",target:"_blank",rel:"noopener noreferrer"},Y=(0,a._)("code",null,"wx.onPageNotFound",-1),$=(0,a.Uk)(" 一致"),nn=(0,a.uE)('<p>示例代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;pages/...&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果是 tabbar 页面，请使用 wx.switchTab</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onunhandledrejection-object-object" tabindex="-1"><a class="header-anchor" href="#onunhandledrejection-object-object" aria-hidden="true">#</a> onUnhandledRejection(Object object)</h2><blockquote><p>基础库 2.10.0 开始支持</p></blockquote>',4),en=(0,a.Uk)("小程序有未处理的 Promise 拒绝时触发。也可以使用 "),tn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},an=(0,a._)("code",null,"wx.onUnhandledRejection",-1),on=(0,a.Uk)(" 绑定监听。注意事项请参考 "),sn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},pn=(0,a._)("code",null,"wx.onUnhandledRejection",-1),cn=(0,a.Uk)("。"),rn=(0,a.Uk)("参数: 与 "),ln={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"},dn=(0,a._)("code",null,"wx.onUnhandledRejection",-1),un=(0,a.Uk)(" 一致"),hn=(0,a._)("h2",{id:"onthemechange-object-object",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#onthemechange-object-object","aria-hidden":"true"},"#"),(0,a.Uk)(" onThemeChange(Object object)")],-1),mn=(0,a._)("blockquote",null,[(0,a._)("p",null,"基础库 2.11.0 开始支持")],-1),bn=(0,a.Uk)("系统切换主题时触发。也可以使用 "),kn={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},gn=(0,a._)("code",null,"wx.onThemeChange",-1),vn=(0,a.Uk)(" 绑定监听。"),jn=(0,a.Uk)("参数: 与 "),_n={href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html",target:"_blank",rel:"noopener noreferrer"},fn=(0,a._)("code",null,"wx.onThemeChange",-1),wn=(0,a.Uk)(" 一致"),xn=(0,a.uE)('<h2 id="appobject-getapp-object-object" tabindex="-1"><a class="header-anchor" href="#appobject-getapp-object-object" aria-hidden="true">#</a> AppObject getApp(Object object)</h2><p>获取到小程序全局唯一的 App 实例。</p><h3 id="getapp-参数" tabindex="-1"><a class="header-anchor" href="#getapp-参数" aria-hidden="true">#</a> getApp 参数</h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>allowDefault</td><td>boolean</td><td>false</td><td>否</td><td>在 <code>App</code> 未定义时返回默认实现。当 <code>App</code> 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包</td><td>2.2.4</td></tr></tbody></table><p>示例代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// other.js</span>\n<span class="token keyword">const</span> appInstance <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// I am global data</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>不要在定义于 <code>App()</code> 内的函数中，或调用 <code>App</code> 前调用 <code>getApp()</code> ，使用 <code>this</code> 就可以拿到 app 实例。</li><li>通过 <code>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li></ul></div>',8),Un={},qn=(0,t(13860).Z)(Un,[["render",function(n,e){const t=(0,a.up)("Badge"),Un=(0,a.up)("RouterLink"),qn=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[o,(0,a.Wm)(t,{text:"重要",type:"error"})]),s,(0,a.kq)(" more "),p,(0,a._)("p",null,[c,(0,a.Wm)(Un,{to:"/code/mini-app/guide/service/run.html"},{default:(0,a.w5)((()=>[r])),_:1}),l]),i,(0,a._)("p",null,[d,(0,a._)("a",u,[h,(0,a.Wm)(qn)]),m]),(0,a._)("p",null,[b,(0,a._)("a",k,[g,(0,a.Wm)(qn)]),v]),j,(0,a._)("p",null,[_,(0,a._)("a",f,[w,(0,a.Wm)(qn)]),x]),(0,a._)("p",null,[U,(0,a._)("a",q,[A,(0,a.Wm)(qn)]),y]),O,(0,a._)("p",null,[W,(0,a._)("a",P,[S,(0,a.Wm)(qn)]),T]),E,(0,a._)("p",null,[N,(0,a._)("a",C,[R,(0,a.Wm)(qn)]),F]),(0,a._)("p",null,[L,(0,a._)("a",D,[H,(0,a.Wm)(qn)]),I]),z,(0,a._)("p",null,[Z,(0,a._)("a",B,[M,(0,a.Wm)(qn)]),G,(0,a._)("a",J,[K,(0,a.Wm)(qn)]),Q]),(0,a._)("p",null,[V,(0,a._)("a",X,[Y,(0,a.Wm)(qn)]),$]),nn,(0,a._)("p",null,[en,(0,a._)("a",tn,[an,(0,a.Wm)(qn)]),on,(0,a._)("a",sn,[pn,(0,a.Wm)(qn)]),cn]),(0,a._)("p",null,[rn,(0,a._)("a",ln,[dn,(0,a.Wm)(qn)]),un]),hn,mn,(0,a._)("p",null,[bn,(0,a._)("a",kn,[gn,(0,a.Wm)(qn)]),vn]),(0,a._)("p",null,[jn,(0,a._)("a",_n,[fn,(0,a.Wm)(qn)]),wn]),xn])}]])},13860:(n,e)=>{e.Z=(n,e)=>{const t=n.__vccOpts||n;for(const[n,a]of e)t[n]=a;return t}},34037:(n,e,t)=>{t.r(e),t.d(e,{data:()=>a});const a={key:"v-70096960",path:"/code/mini-app/guide/service/app.html",title:"App",lang:"zh-CN",frontmatter:{title:"App",icon:"app",category:["小程序"],summary:"注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 \n注意\nApp() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/service/app.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"App"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-21T09:53:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-21T09:53:58.000Z"}]]},excerpt:'<p>注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。 <Badge text="重要" type="error" /></p>\n<div class="custom-container warning"><p class="custom-container-title">注意</p>\n<p>App() 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。</p>\n</div>\n',headers:[{level:2,title:"参数",slug:"参数",children:[{level:3,title:"Object object",slug:"object-object",children:[]},{level:3,title:"onLaunch(Object object)",slug:"onlaunch-object-object",children:[]},{level:3,title:"onShow(Object object)",slug:"onshow-object-object",children:[]}]},{level:2,title:"onHide()",slug:"onhide",children:[]},{level:2,title:"onError(String error)",slug:"onerror-string-error",children:[]},{level:2,title:"onPageNotFound(Object object)",slug:"onpagenotfound-object-object",children:[]},{level:2,title:"onUnhandledRejection(Object object)",slug:"onunhandledrejection-object-object",children:[]},{level:2,title:"onThemeChange(Object object)",slug:"onthemechange-object-object",children:[]},{level:2,title:"AppObject getApp(Object object)",slug:"appobject-getapp-object-object",children:[{level:3,title:"getApp 参数",slug:"getapp-参数",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1616320438e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:2.92,words:875},filePathRelative:"code/mini-app/guide/service/app.md",localizedDate:"2020年11月8日"}}}]);