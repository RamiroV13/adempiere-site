"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9465],{94485:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var s=a(78e3);const A=a.p+"assets/img/timeline.904304d8.jpg",i=[(0,s.uE)('<p>修改 readme.txt 文件如下:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.\nGit is free software distributed under the GPL.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后尝试提交:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> readme.txt\n<span class="token comment"># nothing displayed</span>\n$ <span class="token function">git</span> commit -m <span class="token string">&quot;append GPL&quot;</span>\n<span class="token punctuation">[</span>master 1094adb<span class="token punctuation">]</span> append GPL\n <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像这样不断对文件进行修改，然后不断提交修改到版本库里，每当文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 <code>commit</code>。如果把文件改乱了，或者误删了文件，还可以从最近的一个 <code>commit</code> 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。</p><p>现在，我们回顾一下 <code>readme.txt</code> 文件一共有几个版本被提交到 Git 仓库里了:</p><ul><li>版本 1: wrote a readme file</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a version control system.\nGit is free software.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>版本 2: add distributed</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.\nGit is free software.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>版本 3: append GPL</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.\nGit is free software distributed under the GPL.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看版本信息" tabindex="-1"><a class="header-anchor" href="#查看版本信息" aria-hidden="true">#</a> 查看版本信息</h2><p>版本控制系统用 <code>git log</code> 命令可以告诉我们历史记录，在 Git 中，我们查看:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log\ncommit 1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">21</span>:06:15 <span class="token number">2018</span> +0800\n\n    append GPL\n\ncommit e475afc93c209a690c39c13a46716e8fa000c366\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">21</span>:03:36 <span class="token number">2018</span> +0800\n\n    <span class="token function">add</span> distributed\n\ncommit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">20</span>:59:18 <span class="token number">2018</span> +0800\n\n    wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git log</code> 命令显示从最近到最远的提交日志，我们可以看到 3 次提交，最近的一次是 <code>append GPL</code>，上一次是 <code>add distributed</code>，最早的一次是 <code>wrote a readme file</code>。</p><p>如果嫌输出信息太多，看得眼花缭乱的，可以试试加上 <code>--pretty=oneline</code> 参数:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline\n1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> append GPL\ne475afc93c209a690c39c13a46716e8fa000c366 <span class="token function">add</span> distributed\neaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一大串类似 <code>1094adb...</code> 的是 commit id (版本号)，和 SVN 不一样，Git 的 commit id 不是 1，2，3…… 递增的数字，而是一个 SHA1 计算出来的一个非常大的数字，用十六进制表示，为什么 commit id 需要用这么一大串数字表示呢? 因为 Git 是分布式的版本控制系统，多人在同一个版本库里工作，如果大家都用 1，2，3…… 作为版本号，那肯定就冲突了。</p><p>每提交一个新版本，实际上 Git 就会把它们自动串成一条时间线。如果使用可视化工具查看 Git 历史，就可以更清楚地看到提交历史的时间线:</p><p><img src="'+A+'" alt="Git 时间线"></p><div class="custom-container tip"><p class="custom-container-title">更多选项</p><p>关于 <code>git log</code> 的更多选项，请见 <a href="/file/git/progit_v2.1.45.pdf">ProGit 书籍</a> 的 P43。</p></div><h2 id="回退版本" tabindex="-1"><a class="header-anchor" href="#回退版本" aria-hidden="true">#</a> 回退版本</h2><p>好了，现在准备把 readme.txt 回退到上一个版本，也就是 <code>add distributed</code> 的那个版本，怎么做呢?</p><p>首先，Git 必须知道当前版本是哪个版本，在 Git 中，用 <code>HEAD</code> 表示当前版本，也就是最新的提交 <code>1094adb...</code> (注意我的提交 ID 和您的肯定不一样)，上一个版本就是 <code>HEAD^</code>，上上一个版本就是 <code>HEAD^^</code>，当然往上 100 个版本写 100 个 <code>^</code> 比较容易数不过来，所以写成 <code>HEAD~100</code>。</p><p>现在，要把当前版本 <code>append GPL</code> 回退到上一个版本 <code>add distributed</code>，就可以使用 <code>git reset</code> 命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset --hard HEAD^\nHEAD is now at e475afc <span class="token function">add</span> distributed\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看看 readme.txt 的内容是不是版本 add distributed:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt\nGit is a distributed version control system.\nGit is <span class="token function">free</span> software.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然被还原了。</p><p>还可以继续回退到上一个版本 wrote a readme file，不过且慢，然我们用 <code>git log</code> 再看看现在版本库的状态:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log\ncommit e475afc93c209a690c39c13a46716e8fa000c366 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">21</span>:03:36 <span class="token number">2018</span> +0800\n\n    <span class="token function">add</span> distributed\n\ncommit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0\nAuthor: Michael Liao <span class="token operator">&lt;</span>askxuefeng@gmail.com<span class="token operator">&gt;</span>\nDate:   Fri May <span class="token number">18</span> <span class="token number">20</span>:59:18 <span class="token number">2018</span> +0800\n\n    wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最新的那个版本 append GPL 已经看不到了! 肿么办?</p><p>办法其实还是有的，只要上面的命令行窗口还没有被关掉，您就可以顺着往上找啊找啊，找到那个 append GPL 的 commit id 是 1094adb...，于是就可以指定回到未来的某个版本:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reset --hard 1094a\nHEAD is now at 83b0afe append GPL\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>版本号没必要写全，前几位就可以了，Git 会自动去找。当然也不能只写前一两位，因为 Git 可能会找到多个版本号，就无法确定是哪一个了。</p><p>再小心翼翼地看看 readme.txt 的内容:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> readme.txt\nGit is a distributed version control system.\nGit is <span class="token function">free</span> software distributed under the GPL.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>果然，我胡汉三又回来了。</p><p>Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 <code>HEAD</code> 指针，当您回退版本的时候，Git 仅仅是把 <code>HEAD</code> 从指向 append GPL:</p><p><img src="data:image/jpeg;base64,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" alt="示例图4"></p><p>改为指向 <code>add distributed</code>:</p><p><img src="data:image/jpeg;base64,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" alt="示例图5"></p><p>然后顺便把工作区的文件更新了。所以您让 <code>HEAD</code> 指向哪个版本号，您就把当前版本定位在哪。</p><h2 id="找回-commit-id" tabindex="-1"><a class="header-anchor" href="#找回-commit-id" aria-hidden="true">#</a> 找回 commit id</h2><p>如果回退到了某个版本找不到新版本的 <code>commit id</code>，在 Git 中，就无法用 <code>$ git reset --hard HEAD^</code> 回退。</p><p>所以 Git 提供了一个命令 <code>git reflog</code> 用来记录您的每一次命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog\ne475afc HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: reset: moving to HEAD^\n1094adb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: append GPL\ne475afc HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed\neaadf4e HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> reflog\ne475afc HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: reset: moving to HEAD^\n1094adb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: append GPL\ne475afc HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed\neaadf4e HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终于舒了口气，从输出可知，append GPL 的 commit id 是 1094adb，现在，您又可以乘坐时光机回到未来了。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><ul><li><p><code>HEAD</code> 指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令 <code>git reset --hard commit_id</code>。</p></li><li><p>用 <code>git log</code> 可以查看提交历史，以便确定要回退到哪个版本。</p></li><li><p>用 <code>git reflog</code> 查看命令历史，以便确定要回到未来的哪个版本。</p></li></ul>',52)],t={},d=(0,a(13860).Z)(t,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,i)}]])},13860:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},90020:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-6f792996",path:"/software/git/reset.html",title:"版本回退",lang:"zh-CN",frontmatter:{title:"版本回退",icon:"return",author:"廖雪峰",category:["Git"],tag:["Git","软件"],copyright:"Copyright by 廖雪峰 Edited by Mr.Hope",summary:"修改 readme.txt 文件如下: 然后尝试提交: 像这样不断对文件进行修改，然后不断提交修改到版本库里，每当文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 commit。如果把文件改乱了，或者误删了文件，还可以从最近的一个 commit 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。 现在，我们回顾一下 read",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/git/reset.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"版本回退"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://mrhope.site/"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"版本回退"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"软件"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:"",headers:[{level:2,title:"查看版本信息",slug:"查看版本信息",children:[]},{level:2,title:"回退版本",slug:"回退版本",children:[]},{level:2,title:"找回 commit id",slug:"找回-commit-id",children:[]},{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1591291369e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:9}]},readingTime:{minutes:4.88,words:1463},filePathRelative:"software/git/reset.md",localizedDate:"2020年6月4日"}}}]);