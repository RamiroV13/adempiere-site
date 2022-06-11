"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[53462],{93146:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});var e=a(78e3);const l=[(0,e.uE)('<h1 id="标准-i-o" tabindex="-1"><a class="header-anchor" href="#标准-i-o" aria-hidden="true">#</a> 标准 I/O</h1><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><p><code>echo</code> 命令用于将指定内容输出到显示屏(标准输出)。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a <span class="token builtin class-name">test</span>\nthis is a <span class="token builtin class-name">test</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它的参数如下。</p><ul><li><code>-e</code> 解释转义字符。</li><li><code>-n</code> 不输出行尾的换行符</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;a<span class="token entity" title="\\n">\\n</span>b&quot;</span>\na<span class="token punctuation">\\</span>nb\n\n$ <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;a<span class="token entity" title="\\n">\\n</span>b&quot;</span>\na\nb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果不加 <code>-e</code> 参数，<code>\\n</code> 就会按字面形式输出；加了以后，就被解释成了换行符。</p><p>引号之中可以包括多个换行符，即可以输出多行文本。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;HTML&gt;\n    &lt;HEAD&gt;\n          &lt;TITLE&gt;Page Title&lt;/TITLE&gt;\n    &lt;/HEAD&gt;\n    &lt;BODY&gt;\n          Page body.\n    &lt;/BODY&gt;\n&lt;/HTML&gt;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h2><p><code>read</code> 命令被用来从标准输入读取单行数据。这个命令可以用来读取键盘输入，当使用重定向的时候，读取文件中的一行数据。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>variable<span class="token punctuation">..</span>.<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 variable 用来存储输入数值的一个或多个变量名。如果没有提供变量名，shell 变量 <code>REPLY</code> 会包含数据行。</p><p>基本上，read 会把来自标准输入的字段赋值给具体的变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Please enter an integer -&gt; &quot;</span>\n<span class="token builtin class-name">read</span> int\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>read</code> 可以给多个变量赋值。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># read-multiple: read multiple values from keyboard</span>\n<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Enter one or more values &gt; &quot;</span>\n<span class="token builtin class-name">read</span> var1 var2 var3 var4 var5\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;var1 = &#39;<span class="token variable">$var1</span>&#39;&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;var2 = &#39;<span class="token variable">$var2</span>&#39;&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;var3 = &#39;<span class="token variable">$var3</span>&#39;&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;var4 = &#39;<span class="token variable">$var4</span>&#39;&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;var5 = &#39;<span class="token variable">$var5</span>&#39;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面脚本的用法如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ read-multiple\nEnter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a b c d e\nvar1 <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>\nvar2 <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>\nvar3 <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>\nvar4 <span class="token operator">=</span> <span class="token string">&#39;d&#39;</span>\nvar5 <span class="token operator">=</span> <span class="token string">&#39;e&#39;</span>\n\n$ read-multiple\nEnter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a\nvar1 <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>\nvar2 <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\nvar3 <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\nvar4 <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\nvar5 <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n\n$ read-multiple\nEnter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a b c d e f g\nvar1 <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>\nvar2 <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>\nvar3 <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>\nvar4 <span class="token operator">=</span> <span class="token string">&#39;d&#39;</span>\nvar5 <span class="token operator">=</span> <span class="token string">&#39;e f g&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 read 命令接受到变量值数目少于期望的数字，那么额外的变量值为空，而多余的输入数据则会 被包含到最后一个变量中。</p><p>如果 read 命令之后没有列出变量名，则一个 shell 变量 <code>REPLY</code>，将会包含所有的输入。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># read-single: read multiple values into default variable</span>\n<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Enter one or more values &gt; &quot;</span>\n<span class="token builtin class-name">read</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面脚本的输出结果如下。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ read-single\nEnter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a b c d\n<span class="token environment constant">REPLY</span> <span class="token operator">=</span> <span class="token string">&#39;a b c d&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>read 命令的参数如下。</p><ul><li><code>-a array</code> 把输入赋值到数组 array 中，从索引号零开始。</li><li><code>-d delimiter</code> 用字符串 delimiter 中的第一个字符指示输入结束，而不是一个换行符。</li><li><code>-e</code> 使用 Readline 来处理输入。这使得与命令行相同的方式编辑输入。</li><li><code>-n num</code> 读取 num 个输入字符，而不是整行。</li><li><code>-p prompt</code> 为输入显示提示信息，使用字符串 prompt。</li><li><code>-r</code> Raw mode. 不把反斜杠字符解释为转义字符。</li><li><code>-s</code> Silent mode. 不会在屏幕上显示输入的字符。当输入密码和其它确认信息的时候，这会很有帮助。</li><li><code>-t seconds</code> 超时. 几秒钟后终止输入。read 会返回一个非零退出状态，若输入超时。</li><li><code>-u fd</code> 使用文件描述符 fd 中的输入，而不是标准输入。</li></ul><p><code>-p</code> 的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter one or more values &gt; &quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-t</code> 和 <code>-s</code> 的例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">read</span> -t <span class="token number">10</span> -sp <span class="token string">&quot;Enter secret pass phrase &gt; &quot;</span> secret_pass<span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>Secret pass phrase = &#39;<span class="token variable">$secret_pass</span>&#39;&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个脚本提示用户输入一个密码，并等待输入 10 秒钟。如果在特定的时间内没有完成输入， 则脚本会退出并返回一个错误。因为包含了一个 -s 选项，所以输入的密码不会出现在屏幕上。</p><p>Shell 的内部变量 <code>IFS</code> 可以控制输入字段的分离。例如，这个 /etc/passwd 文件包含的数据行 使用冒号作为字段分隔符。通过把 IFS 的值更改为单个冒号，我们可以使用 read 读取 /etc/passwd 中的内容，并成功地把字段分给不同的变量。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># read-ifs: read fields from a file</span>\n<span class="token assign-left variable">FILE</span><span class="token operator">=</span>/etc/passwd\n<span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter a user name &gt; &quot;</span> user_name\n<span class="token assign-left variable">file_info</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;^<span class="token variable">$user_name</span>:&quot;</span> $FILE<span class="token variable">)</span></span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span> <span class="token builtin class-name">read</span> user pw uid gid name home shell <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;User = &#39;<span class="token variable">$user</span>&#39;&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;UID = &#39;<span class="token variable">$uid</span>&#39;&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;GID = &#39;<span class="token variable">$gid</span>&#39;&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Full Name = &#39;<span class="token variable">$name</span>&#39;&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Home Dir. = &#39;<span class="token variable">$home</span>&#39;&quot;</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Shell = &#39;<span class="token variable">$shell</span>&#39;&quot;</span>\n<span class="token keyword">else</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;No such user &#39;<span class="token variable">$user_name</span>&#39;&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shell 允许在一个命令之前立即发生一个或多个变量赋值。这些赋值为跟随着的命令更改环境变量。这个赋值的影响是暂时的；只是在命令存在期间改变环境变量。</p><p>虽然通常 read 命令接受标准输入，但是您不能这样做:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> “foo” <span class="token operator">|</span> <span class="token builtin class-name">read</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们期望这个命令能生效，但是它不能。这个命令将显示成功，但是 REPLY 变量 总是为空。为什么会这样?</p><p>答案与 shell 处理管道线的方式有关系。在 bash(和其它 shells，例如 sh)中，管道线 会创建子 shell。它们是 shell 的副本，且用来执行命令的环境变量在管道线中。上面示例中，read 命令将在子 shell 中执行。</p><p>在类 Unix 的系统中，子 shell 执行的时候，会为进程创建父环境的副本。当进程结束 之后，环境副本就会被破坏掉。这意味着一个子 shell 永远不能改变父进程的环境。read 赋值变量， 然后会变为环境的一部分。在上面的例子中，read 在它的子 shell 环境中，把 foo 赋值给变量 REPLY， 但是当命令退出后，子 shell 和它的环境将被破坏掉，这样赋值的影响就会消失。</p><p>使用 here 字符串是解决此问题的一种方法。</p><p>下面是生成菜单的一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># read-menu: a menu driven system information program</span>\n<span class="token function">clear</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;\nPlease Select:\n\n    1. Display System Information\n    2. Display Disk Space\n    3. Display Home Space Utilization\n    0. Quit\n&quot;</span>\n<span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter selection [0-3] &gt; &quot;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$REPLY</span> <span class="token operator">=~</span> ^<span class="token punctuation">[</span><span class="token number">0</span>-3<span class="token punctuation">]</span>$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$REPLY</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Program terminated.&quot;</span>\n        <span class="token builtin class-name">exit</span>\n    <span class="token keyword">fi</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$REPLY</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hostname: <span class="token environment constant">$HOSTNAME</span>&quot;</span>\n        <span class="token function">uptime</span>\n        <span class="token builtin class-name">exit</span>\n    <span class="token keyword">fi</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$REPLY</span> <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token function">df</span> -h\n        <span class="token builtin class-name">exit</span>\n    <span class="token keyword">fi</span>\n    <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$REPLY</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n        <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Home Space Utilization (All Users)&quot;</span>\n            <span class="token function">du</span> -sh /home/*\n        <span class="token keyword">else</span>\n            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Home Space Utilization (<span class="token environment constant">$USER</span>)&quot;</span>\n            <span class="token function">du</span> -sh <span class="token environment constant">$HOME</span>\n        <span class="token keyword">fi</span>\n        <span class="token builtin class-name">exit</span>\n    <span class="token keyword">fi</span>\n<span class="token keyword">else</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Invalid entry.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',43)],i={},t=(0,a(13860).Z)(i,[["render",function(s,n){return(0,e.wg)(),(0,e.iD)("div",null,l)}]])},13860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},6487:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-5c24bfbd",path:"/linux/bash/archives/deleted/stdio.html",title:"标准 I/O",lang:"zh-CN",frontmatter:{summary:"标准 I/O echo echo 命令用于将指定内容输出到显示屏(标准输出)。 它的参数如下。 -e 解释转义字符。; -n 不输出行尾的换行符; 上面代码中，如果不加 -e 参数，\\n 就会按字面形式输出；加了以后，就被解释成了换行符。 引号之中可以包括多个换行符，即可以输出多行文本。 read read 命令被用来从标准输入读取单行数据。这个命令可以用来",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/deleted/stdio.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"标准 I/O"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"echo",slug:"echo",children:[]},{level:2,title:"read",slug:"read",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:4.93,words:1478},filePathRelative:"linux/bash/archives/deleted/stdio.md",localizedDate:"2020年6月3日"}}}]);