"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[49435],{3183:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(78e3);const p=[(0,t.uE)('<p>当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？</p><h2 id="使用-type" tabindex="-1"><a class="header-anchor" href="#使用-type" aria-hidden="true">#</a> 使用 <code>type()</code></h2><p>首先，我们来判断对象类型，使用 <code>type()</code> 函数:</p><p>基本类型都可以用 <code>type()</code> 判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;int&#39;</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;str&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span> <span class="token string">&#39;NoneType&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个变量指向函数或者类，也可以用 <code>type()</code> 判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;builtin_function_or_method&#39;</span><span class="token operator">&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.Animal&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是 <code>type()</code> 函数返回的是什么类型呢？它返回对应的 Class 类型。如果我们要在 if 语句中判断，就需要比较两个变量的 type 类型是否相同:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">int</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">str</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">type</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断基本数据类型可以直接写 <code>int</code>，<code>str</code> 等，但如果要判断一个对象是否是函数怎么办？可以使用 <code>types</code> 模块中定义的常量:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> types\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">pass</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token operator">==</span>types<span class="token punctuation">.</span>FunctionType\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">)</span><span class="token operator">==</span>types<span class="token punctuation">.</span>BuiltinFunctionType\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x<span class="token punctuation">)</span><span class="token operator">==</span>types<span class="token punctuation">.</span>LambdaType\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">==</span>types<span class="token punctuation">.</span>GeneratorType\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-isinstance" tabindex="-1"><a class="header-anchor" href="#使用-isinstance" aria-hidden="true">#</a> 使用 <code>isinstance()</code></h2><p>对于 class 的继承关系来说，使用 <code>type()</code> 就很不方便。我们要判断 class 的类型，可以使用 <code>isinstance()</code> 函数。</p><p>我们回顾上次的例子，如果继承关系是:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>object -&gt; Animal -&gt; Dog -&gt; Husky\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么，<code>isinstance()</code> 就可以告诉我们，一个对象是否是某种类型。先创建 3 种类型的对象:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> d <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> h <span class="token operator">=</span> Husky<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> Husky<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>没有问题，因为 <code>h</code> 变量指向的就是 <code>Husky</code> 对象。</p><p>再判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>h</code> 虽然自身是 <code>Husky</code> 类型，但由于 <code>Husky</code> 是从 <code>Dog</code> 继承下来的，所以，<code>h</code> 也还是 <code>Dog</code> 类型。换句话说，<code>isinstance()</code> 判断的是一个对象是否是该类型本身，或者位于该类型的父继承链上。</p><p>因此，我们可以确信，<code>h</code> 还是 <code>Animal</code> 类型:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，实际类型是 <code>Dog</code> 的 <code>d</code> 也是 <code>Animal</code> 类型:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Dog<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，<code>d</code> 不是 <code>Husky</code> 类型:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> Husky<span class="token punctuation">)</span>\n<span class="token boolean">False</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>能用 <code>type()</code> 判断的基本类型也可以用 <code>isinstance()</code> 判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">b&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token builtin">bytes</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且还可以判断一个变量是否是某些类型中的一种，比如下面的代码就可以判断是否是 <code>list</code> 或者 <code>tuple</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token builtin">tuple</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token builtin">tuple</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token boolean">True</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>总是优先使用 <code>isinstance()</code> 判断类型，可以将指定类型及其子类“一网打尽”。</p></div><h2 id="使用-dir" tabindex="-1"><a class="header-anchor" href="#使用-dir" aria-hidden="true">#</a> 使用 <code>dir()</code></h2><p>如果要获得一个对象的所有属性和方法，可以使用 <code>dir()</code> 函数，它返回一个包含字符串的 <code>list</code>，比如，获得一个 <code>str</code> 对象的所有属性和方法:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">dir</span><span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">[</span><span class="token string">&#39;__add__&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;__class__&#39;</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token string">&#39;__subclasshook__&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;capitalize&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;casefold&#39;</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token string">&#39;zfill&#39;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类似 <code>__xxx__</code> 的属性和方法在 Python 中都是有特殊用途的，比如 <code>__len__</code> 方法返回长度。在 Python 中，如果您调用 <code>len()</code> 函数试图获取一个对象的长度，实际上，在 len()函数内部，它自动去调用该对象的 <code>__len__()</code> 方法，所以，下面的代码是等价的:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span>\n<span class="token number">3</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABC&#39;</span><span class="token punctuation">.</span>__len__<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token number">3</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们自己写的类，如果也想用 <code>len(myObj)</code> 的话，就自己写一个 <code>__len__()</code> 方法:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">MyDog</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">return</span> <span class="token number">100</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> dog <span class="token operator">=</span> MyDog<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span>\n<span class="token number">100</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剩下的都是普通属性或方法，比如 <code>lower()</code> 返回小写的字符串:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;ABC&#39;</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token string">&#39;abc&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>仅仅把属性和方法列出来是不够的，配合 <code>getattr()</code>、<code>setattr()</code> 以及 <code>hasattr()</code>，我们可以直接操作一个对象的状态:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         self<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">9</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">def</span> <span class="token function">power</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">return</span> self<span class="token punctuation">.</span>x <span class="token operator">*</span> self<span class="token punctuation">.</span>x\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> obj <span class="token operator">=</span> MyObject<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>紧接着，可以测试该对象的属性:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 有属性&#39;x&#39;吗？</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> obj<span class="token punctuation">.</span>x\n<span class="token number">9</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 有属性&#39;y&#39;吗？</span>\n<span class="token boolean">False</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">setattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span> <span class="token comment"># 设置一个属性&#39;y&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 有属性&#39;y&#39;吗？</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 获取属性&#39;y&#39;</span>\n<span class="token number">19</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> obj<span class="token punctuation">.</span>y <span class="token comment"># 获取属性&#39;y&#39;</span>\n<span class="token number">19</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果试图获取不存在的属性，会抛出 <code>AttributeError</code> 的错误:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 获取属性&#39;z&#39;</span>\nTraceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nAttributeError<span class="token punctuation">:</span> <span class="token string">&#39;MyObject&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;z&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以传入一个 <code>default</code> 参数，如果属性不存在，就返回默认值:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token comment"># 获取属性&#39;z&#39;，如果不存在，返回默认值404</span>\n<span class="token number">404</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以获得对象的方法:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 有属性&#39;power&#39;吗？</span>\n<span class="token boolean">True</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 获取属性&#39;power&#39;</span>\n<span class="token operator">&lt;</span>bound method MyObject<span class="token punctuation">.</span>power of <span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>MyObject <span class="token builtin">object</span> at <span class="token number">0x10077a6a0</span><span class="token operator">&gt;&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fn <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;power&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 获取属性&#39;power&#39;并赋值到变量fn</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fn <span class="token comment"># fn指向obj.power</span>\n<span class="token operator">&lt;</span>bound method MyObject<span class="token punctuation">.</span>power of <span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>MyObject <span class="token builtin">object</span> at <span class="token number">0x10077a6a0</span><span class="token operator">&gt;&gt;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fn<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 调用fn()与调用obj.power()是一样的</span>\n<span class="token number">81</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>通过内置的一系列函数，我们可以对任意一个 Python 对象进行剖析，拿到其内部的数据。要注意的是，只有在不知道对象信息的时候，我们才会去获取对象信息。如果可以直接写:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">sum</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span>x <span class="token operator">+</span> obj<span class="token punctuation">.</span>y\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就不要写:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个正确的用法的例子如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">readImage</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>fp<span class="token punctuation">,</span> <span class="token string">&#39;read&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> readData<span class="token punctuation">(</span>fp<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token boolean">None</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们希望从文件流 <code>fp</code> 中读取图像，我们首先要判断该 <code>fp</code> 对象是否存在 <code>read</code> 方法，如果存在，则该对象是一个流，如果不存在，则无法读取。<code>hasattr()</code> 就派上了用场。</p><p>请注意，在 Python 这类动态语言中，根据鸭子类型，有 <code>read()</code> 方法，不代表该 fp 对象就是一个文件流，它也可能是网络流，也可能是内存中的一个字节流，但只要 <code>read()</code> 方法返回的是有效的图像数据，就不影响读取图像的功能。</p>',62)],e={},o=(0,a(13860).Z)(e,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,p)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},42705:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-1d5feaa7","path":"/code/language/python/oop/info.html","title":"获取对象信息","lang":"zh-CN","frontmatter":{"title":"获取对象信息","author":"廖雪峰","icon":"info","date":"2021-03-28T00:00:00.000Z","category":["Python"],"summary":"当我们拿到一个对象的引用时，如何知道这个对象是什么类型、有哪些方法呢？ 使用 type() 首先，我们来判断对象类型，使用 type() 函数: 基本类型都可以用 type() 判断: 如果一个变量指向函数或者类，也可以用 type() 判断: 但是 type() 函数返回的是什么类型呢？它返回对应的 Class 类型。如果我们要在 if 语句中判断，就需要","head":[["meta",{"property":"og:url","content":"https://mrhope.site/code/language/python/oop/info.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"获取对象信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-02-06T16:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2021-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-02-06T16:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"使用 type()","slug":"使用-type","children":[]},{"level":2,"title":"使用 isinstance()","slug":"使用-isinstance","children":[]},{"level":2,"title":"使用 dir()","slug":"使用-dir","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1616944982000,"updatedTime":1644166018000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1417},"filePathRelative":"code/language/python/oop/info.md","localizedDate":"2021年3月28日"}')}}]);