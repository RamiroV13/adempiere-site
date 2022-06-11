"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15260],{7727:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var s=a(78e3);const o=(0,s._)("p",null,"由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。",-1),t=(0,s._)("h2",{id:"安装-node-js",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#安装-node-js","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装 Node.js")],-1),d=(0,s._)("p",null,"目前 Node.js 的 LTS 版本是 16.14.2。首先，从 Node.js 官网下载对应平台的安装程序。点击 LTS 版本的下载按钮。",-1),l={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("Node.js官网"),i=(0,s.uE)('<h3 id="安装过程" tabindex="-1"><a class="header-anchor" href="#安装过程" aria-hidden="true">#</a> 安装过程</h3><ul><li><p>在 Windows 上安装时务必选择全部组件，包括勾选 <code>Add to Path</code>。</p><p>在安装过程中，无需勾选 &quot;Automatically install the necessary tools&quot;。选中此项会在电脑中安装 VS 等日常开发使用不到的软件。</p><p>安装完成后，在 Windows 环境下，请打开命令提示符，然后输入 <code>node -v</code> ，如果安装正常，您应该看到 <code>v12.18.0</code> 这样的输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>IEUser<span class="token operator">&gt;</span>node -v\nv12.18.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>继续在命令提示符输入 node，此刻您将进入 Node.js 的交互环境。在交互环境下，您可以输入任意 JavaScript 语句，例如 <code>100 + 200</code>，回车后将得到输出结果。</p><p>要退出 Node.js 环境，连按两次 <code>Ctrl+C</code> 。</p></li><li><p>在 Mac 或 Linux 环境下，请打开终端，然后输入 <code>node -v</code>，您应该看到如下输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">node</span> -v\nv12.18.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>在正式开始 Node.js 学习之前，我们先认识一下 npm。</p><p>Npm 是什么东东? npm 其实是 Node.js 的包管理工具(package manager)。</p><p>为啥我们需要一个包管理工具呢? 因为我们在 Node.js 上开发时，会用到很多别人写的 JavaScript 代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生: 大家都把自己开发的模块打包后放到 npm 官网上，如果要使用，直接通过 npm 安装就可以直接用，不用管代码存在哪，应该从哪下载。</p><p>更重要的是，如果我们要使用模块 A，而模块 A 又依赖于模块 B，模块 B 又依赖于模块 X 和模块 Y，npm 可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。</p><p>讲了这么多，npm 究竟在哪?</p><p>其实 npm 已经在 Node.js 安装的时候顺带装好了。我们在命令提示符或者终端输入 <code>npm -v</code>，应该看到类似的输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>npm -v\n<span class="token number">6.13</span>.1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果版本号太小，说明 npm 版本较低，请使用此命令升级到最新版本: <code>npm install -g npm</code>。</p></blockquote><p>如果直接输入 <code>npm</code>，您会看到类似下面的输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token function">npm</span>\n\nUsage: <span class="token function">npm</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>\n\nwhere <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> is one of:\n    <span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的一大堆文字告诉您，npm 需要跟上命令。现在我们不用关心这些命令，后面会一一讲到。目前，您只需要确保 npm 正确安装了，能运行就行。</p><h2 id="墙" tabindex="-1"><a class="header-anchor" href="#墙" aria-hidden="true">#</a> 墙</h2><p>大家都知道天朝是有墙的，有的时候，访问国外的 Node.js 服务器可能会十分缓慢以至于您想把它砸了。</p><p>所以贴心的马云爸爸提供了淘宝镜像，淘宝镜像有一个自己定制的 <code>cnpm</code> 工具，服务器在国内，十分快捷。不过大家在使用 <code>cnpm</code> 安装模块之后再使用 npm 安装会报错，只能重新删掉 <code>node_modules</code> 文件夹重新执行 <code>npm install</code> 全新安装才会不报错。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果大家可以使用 <code>npm</code> 命令，非常不建议大家使用 <code>cnpm</code> 命令安装模块。</p></div><p>安装 <code>cnpm</code> 的命令如下:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npm.taobao.org\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>请在本机安装 Node.js 环境，并确保 Node.js 和 npm 能正常运行。</p>',22),c={},r=(0,a(13860).Z)(c,[["render",function(e,n){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[o,(0,s.kq)(" more "),t,d,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",l,[p,(0,s.Wm)(a)])])]),i])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},14579:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-285ff93c",path:"/code/node-js/install.html",title:"安装 Node.js",lang:"zh-CN",frontmatter:{title:"安装 Node.js",icon:"install",category:["Node.js"],tag:["Node.js","软件","安装"],summary:"由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/node-js/install.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"安装 Node.js"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-12T16:36:15.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Node.js"}],["meta",{property:"article:tag",content:"软件"}],["meta",{property:"article:tag",content:"安装"}],["meta",{property:"article:modified_time",content:"2022-04-12T16:36:15.000Z"}]]},excerpt:"<p>由于 Node.js 平台是在后端运行 JavaScript 代码，所以，必须首先在本机安装 Node.js 环境。</p>\n",headers:[{level:2,title:"安装 Node.js",slug:"安装-node-js",children:[{level:3,title:"安装过程",slug:"安装过程",children:[]}]},{level:2,title:"npm",slug:"npm",children:[]},{level:2,title:"墙",slug:"墙",children:[]},{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1611747207e3,updatedTime:1649781375e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:3.07,words:922},filePathRelative:"code/node-js/install.md",localizedDate:"2021年1月27日"}}}]);