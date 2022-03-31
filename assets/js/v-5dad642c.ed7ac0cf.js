"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20039],{59082:(n,a,s)=>{s.r(a),s.d(a,{default:()=>H});var e=s(66252);const t=(0,e._)("p",null,"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。",-1),p=(0,e._)("p",null,"日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。",-1),c=(0,e._)("p",null,"当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。",-1),l={class:"custom-container info"},o=(0,e._)("p",{class:"custom-container-title"},"缓存依赖",-1),r=(0,e.Uk)("关于缓存依赖的文档，详见 "),i={href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("缓存依赖项以加快工作流程"),h=(0,e.Uk)("。"),k=(0,e._)("h2",{id:"配置项",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#配置项","aria-hidden":"true"},"#"),(0,e.Uk)(" 配置项")],-1),d=(0,e._)("h3",{id:"path",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#path","aria-hidden":"true"},"#"),(0,e.Uk)(" path")],-1),m=(0,e._)("p",null,"要缓存和还原的文件，目录和通配符模式的列表。",-1),b={class:"custom-container info"},g=(0,e._)("p",{class:"custom-container-title"},"相关信息",-1),y=(0,e.Uk)("支持的 glob 模式，请参见 "),f={href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("@actions/glob"),_=(0,e.Uk)("。"),w=(0,e.uE)('<h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>用于保存缓存与还原缓存的的密钥</p><h3 id="restore-keys" tabindex="-1"><a class="header-anchor" href="#restore-keys" aria-hidden="true">#</a> restore-keys</h3><p>当 key 没有命中缓存是用于恢复缓存键值的有序列表</p><h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2><p><code>cache-hit</code>: 一个布尔值，表明是否找到与该键完全匹配的值</p><h2 id="缓存范围" tabindex="-1"><a class="header-anchor" href="#缓存范围" aria-hidden="true">#</a> 缓存范围</h2><p>缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>Yarn:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3\n  <span class="token comment"># 使用此 id 获得 `cache-hit`</span>\n  <span class="token comment"># (`steps.yarn-cache.outputs.cache-hit != &#39;true&#39;`)</span>\n  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      ${{ runner.os }}-yarn-</span>\n\n<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies\n  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="创建一个缓存键" tabindex="-1"><a class="header-anchor" href="#创建一个缓存键" aria-hidden="true">#</a> 创建一个缓存键</h2><p>缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。</p><p>例如，使用 <code>hashFiles</code> 功能可让您在依存关系更改时创建新的缓存。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3\n  <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      node_modules/</span>\n    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies\n  <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;\n  <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="缓存限制" tabindex="-1"><a class="header-anchor" href="#缓存限制" aria-hidden="true">#</a> 缓存限制</h2><p>一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。</p><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2>',20),x={href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("https://github.com/actions/cache"),W={},H=(0,s(83744).Z)(W,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,c,(0,e._)("div",l,[o,(0,e._)("p",null,[r,(0,e._)("a",i,[u,(0,e.Wm)(s)]),h])]),k,d,m,(0,e._)("div",b,[g,(0,e._)("p",null,[y,(0,e._)("a",f,[v,(0,e.Wm)(s)]),_])]),w,(0,e._)("p",null,[(0,e._)("a",x,[U,(0,e.Wm)(s)])])],64)}]])},16758:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-5dad642c",path:"/code/github/actions/cache.html",title:"cache",lang:"zh-CN",frontmatter:{title:"cache",date:"2021-02-20T00:00:00.000Z",category:["GitHub"],tag:["action","workflow"],summary:"这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。\n日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。\n当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。\n缓存依赖\n关于缓存依赖的文档，详见 缓存依赖项以加快工作流程。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/github/actions/cache.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"cache"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"action"}],["meta",{property:"article:tag",content:"workflow"}],["meta",{property:"article:published_time",content:"2021-02-20T00:00:00.000Z"}]]},excerpt:'<p>这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。</p>\n<p>日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。</p>\n<p>当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。</p>\n<div class="custom-container info"><p class="custom-container-title">缓存依赖</p>\n<p>关于缓存依赖的文档，详见 <a href="https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows" target="_blank" rel="noopener noreferrer">缓存依赖项以加快工作流程<ExternalLinkIcon/></a>。</p>\n</div>\n',headers:[{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"path",slug:"path",children:[]},{level:3,title:"key",slug:"key",children:[]},{level:3,title:"restore-keys",slug:"restore-keys",children:[]}]},{level:2,title:"输出",slug:"输出",children:[]},{level:2,title:"缓存范围",slug:"缓存范围",children:[]},{level:2,title:"案例",slug:"案例",children:[]},{level:2,title:"创建一个缓存键",slug:"创建一个缓存键",children:[]},{level:2,title:"缓存限制",slug:"缓存限制",children:[]},{level:2,title:"仓库",slug:"仓库",children:[]}],git:{createdTime:1613826006e3,updatedTime:1648696818e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:1.77,words:532},filePathRelative:"code/github/actions/cache.md"}}}]);