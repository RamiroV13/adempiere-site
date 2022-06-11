"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[38886],{41049:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(78e3),p=a(85737);const e=(0,t._)("p",null,[(0,t._)("code",null,"Canvas"),(0,t.Uk)(" 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。")],-1),o=(0,t.uE)('<p>没有 Canvas 的年代，绘图只能借助 Flash 插件实现，页面不得不用 JavaScript 和 Flash 进行交互。有了 Canvas，我们就再也不需要 Flash 了，直接使用 JavaScript 完成绘制。</p><p>一个 Canvas 定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于浏览器对 HTML5 标准支持不一致，所以，通常在 <code>&lt;canvas&gt;</code> 内部添加一些说明性 HTML 代码，如果浏览器支持 Canvas，它将忽略 <code>&lt;canvas&gt;</code> 内部的 HTML，如果浏览器不支持 Canvas，它将显示 <code>&lt;canvas&gt;</code> 内部的 HTML:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-stock<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Current Price: 25.51<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 Canvas 前，用 <code>canvas.getContext</code> 来测试浏览器是否支持 Canvas:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML代码 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">heigth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>您的浏览器不支持Canvas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;您的浏览器支持Canvas!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;您的浏览器不支持Canvas!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>getContext(&#39;2d&#39;)</code> 方法让我们拿到一个 <code>CanvasRenderingContext2D</code> 对象，所有的绘图操作都需要通过这个对象完成。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要绘制 3D 怎么办? HTML5 还有一个 WebGL 规范，允许在 Canvas 中绘制 3D 图形:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;webgl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本节我们只专注于绘制 2D 图形。</p><h2 id="绘制形状" tabindex="-1"><a class="header-anchor" href="#绘制形状" aria-hidden="true">#</a> 绘制形状</h2><p>我们可以在 Canvas 上绘制各种形状。在绘制前，我们需要先了解一下 Canvas 的坐标系统:</p><p><img src="'+p+'" alt="canvas-xy"></p><p>Canvas 的坐标以左上角为原点，水平向右为 X 轴，垂直向下为 Y 轴，以像素为单位，所以每个点都是非负整数。</p><p><code>CanvasRenderingContext2D</code> 对象有若干方法来绘制图形:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-shape-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明</span>\nctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#dddddd&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 设置颜色</span>\nctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 把(10,10)位置大小为130x130的矩形涂色</span>\n<span class="token comment">// 利用Path绘制复杂路径:</span>\n<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Path2D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">95</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npath<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#0000ff&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制文本" tabindex="-1"><a class="header-anchor" href="#绘制文本" aria-hidden="true">#</a> 绘制文本</h2><p>绘制文本就是在指定的位置输出文本，可以设置文本的字体、样式、阴影等，与 CSS 完全一致:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#test-text-canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>shadowOffsetX <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>shadowOffsetY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&quot;#666666&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;24px Arial&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#333333&quot;</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;带阴影的文字&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Canvas 除了能绘制基本的形状和文本，还可以实现动画、缩放、各种滤镜和像素转换等高级操作。如果要实现非常复杂的操作，考虑以下优化方案:</p><ul><li><p>通过创建一个不可见的 Canvas 来绘图，然后将最终绘制结果复制到页面的可见 Canvas 中；</p></li><li><p>尽量使用整数坐标而不是浮点数；</p></li><li><p>可以创建多个重叠的 Canvas 绘制不同的层，而不是在一个 Canvas 中绘制非常复杂的图；</p></li><li><p>背景图片如果不变可以直接用 <code>&lt;img&gt;</code> 标签并放到最底层。</p></li></ul>',24),c={},u=(0,a(13860).Z)(c,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.kq)(" more "),o])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},76012:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3fe5c342",path:"/code/language/js/browser/canvas.html",title:"Canvas",lang:"zh-CN",frontmatter:{title:"Canvas",icon:"stack",date:"2019-10-19T00:00:00.000Z",category:["JavaScript"],summary:"Canvas 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/browser/canvas.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"Canvas"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-10-19T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p><code v-pre>Canvas</code> 是 HTML5 新增的组件，它就像一块幕布，可以用 JavaScript 在上面绘制各种图表、动画等。</p>\n",headers:[{level:2,title:"绘制形状",slug:"绘制形状",children:[]},{level:2,title:"绘制文本",slug:"绘制文本",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:2.73,words:819},filePathRelative:"code/language/js/browser/canvas.md",localizedDate:"2019年10月19日"}},85737:n=>{n.exports="data:image/png;base64,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"}}]);