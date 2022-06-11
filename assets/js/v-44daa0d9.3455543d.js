"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35250],{98882:(n,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(78e3);const o={id:"vconsole",tabindex:"-1"},t=(0,s._)("a",{class:"header-anchor",href:"#vconsole","aria-hidden":"true"},"#",-1),p=(0,s.Uk)(" vConsole "),c=(0,s.uE)('<p>在真机上，如果想要查看 <code>console</code> API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 <code>vConsole</code> 按钮。点击 <code>vConsole</code> 按钮可以打开日志面板。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px" alt="Vconsole"></p><h2 id="vconsole-使用说明" tabindex="-1"><a class="header-anchor" href="#vconsole-使用说明" aria-hidden="true">#</a> vConsole 使用说明</h2><p>由于实现机制的限制，开发者调用 <code>console</code> API 打印的日志内容，是转换成 JSON 字符串后传输给 <code>vConsole</code> 的，导致 <code>vConsole</code> 中展示的内容会有一些限制:</p><ul><li><p>2.3.2 及以上版本，支持打印循环引用对象。循环引用的对象属性会显示引用路径，<code>@</code> 表示对象本身。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> circular <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\ncircular<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">promise</span><span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\ncircular<span class="token punctuation">.</span>a <span class="token operator">=</span> circular<span class="token punctuation">;</span>\ncircular<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x0 <span class="token operator">=</span> circular<span class="token punctuation">.</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>circular<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// &quot;{a: &#39;&lt;Circular: @&gt;&#39;, c: {x0: &#39;&lt;Circular: @.x[0]&gt;&#39;}, x: [{promise: &#39;&lt;Promise&gt;&#39;}]}&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.1 及以上版本，支持展示所有类型的数据。基础库会对日志内容进行一次转换，经过转换的内容会使用 <code>&lt;&gt;</code> 包裹。如:</p><ul><li><code>&lt;Function: func&gt;</code></li><li><code>&lt;Undefined&gt;</code></li><li><code>&lt;Infinity&gt;</code></li><li><code>&lt;Map: size=0&gt;</code></li><li><code>&lt;ArrayBuffer: byteLength=10&gt;</code></li><li>...</li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>尽量避免在非调试情景下打印结构过于复杂或内容过长的日志内容，因为这可能会带来额外耗时。</p></div><h2 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map" aria-hidden="true">#</a> Source Map</h2><blockquote><p>目前只在 iOS 6.7.2 及以上版本支持</p></blockquote><p>小程序/小游戏在打包时，会将所有 js 代码打包成一个文件，为了便于开发者在手机上调试时定位错误位置，小程序/小游戏提供了 Source Map 支持。</p><p>在开发者工具中开启 ES6 转 ES5、代码压缩时，会生成 Source Map 的 <code>.map</code> 文件。开发版小程序中，基础库会使用代码包中的 <code>.map</code> 文件，对 <code>vConsole</code> 中展示的错误信息堆栈进行重新映射(只对开发者代码文件进行)。</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/sourceMap.17b75816.jpg" alt="Sourcemap"></p><p>如果使用外部的编译脚本对源文件进行处理，只需将对应生成的 Source Map 文件放置在源文件的相同目录下</p><p>如:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>pages/index.js\n\npages/index.js.map\n\napp.js\n\napp.js.map\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发者工具会读取、解析 Source Map 文件，并进行将其上传</p><p>后续可以在小程序后台的运营中心可以利用上传的 Source Map 文件进行错误分析</p><ul><li>Source Map 文件不计入代码包大小计算。</li><li>开发版代码包中由于包含了 .map 文件，实际代码包大小会比体验版和正式版大。</li></ul>',17),l={},i=(0,a(13860).Z)(l,[["render",function(n,e){const a=(0,s.up)("Badge");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h2",o,[t,p,(0,s.Wm)(a,{text:"重要",type:"error"})]),c])}]])},13860:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},57178:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-44daa0d9",path:"/code/mini-app/guide/ability/debug.html",title:"调试",lang:"zh-CN",frontmatter:{title:"调试",icon:"debug",category:["小程序"],summary:"vConsole 在真机上，如果想要查看 console API 输出的日志内容和额外的调试信息，需要在点击屏幕右上角的按钮打开的菜单里选择「打开调试」。此时小程序/小游戏会退出，重新打开后会右下角会出现一个 vConsole 按钮。点击 vConsole 按钮可以打开日志面板。 vConsole 使用说明 由于实现机制的限制，开发者调用 console A",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/ability/debug.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"调试"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-03-21T09:22:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-03-21T09:22:34.000Z"}]]},excerpt:"",headers:[{level:2,title:"vConsole",slug:"vconsole",children:[]},{level:2,title:"vConsole 使用说明",slug:"vconsole-使用说明",children:[]},{level:2,title:"Source Map",slug:"source-map",children:[]}],git:{createdTime:1604856934e3,updatedTime:1616318554e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:2.13,words:638},filePathRelative:"code/mini-app/guide/ability/debug.md",localizedDate:"2020年11月8日"}}}]);