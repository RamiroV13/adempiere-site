"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[72466],{39857:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var i=s(78e3);const a=(0,i._)("p",null,"在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。",-1),t=(0,i._)("p",null,"GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。",-1),l=(0,i.uE)('<p>搭建 Git 服务器需要准备一台运行 Linux 的机器，强烈推荐用 Ubuntu 或 Debian，这样，通过几条简单的 <code>apt</code> 命令就可以完成安装。</p><ul><li><p><strong>Ubuntu</strong> 或 <strong>Debian</strong></p><p>假设您已经有 sudo 权限的用户账号，下面，正式开始安装。</p><ul><li><p>第一步，安装 git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>第二步，创建一个 git 用户，用来运行 git 服务:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> adduser <span class="token function">git</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>第三步，创建证书登录:</p><p>收集所有需要登录的用户的公钥，就是他们自己的 <code>id_rsa.pub</code> 文件，把所有公钥导入到 <code>/home/git/.ssh/authorized_keys</code> 文件里，一行一个。</p></li><li><p>第四步，初始化 Git 仓库:</p><p>先选定一个目录作为 Git 仓库，假定是 <code>/srv/sample.git</code>，在 <code>/srv</code> 目录下输入命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">git</span> init --bare sample.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Git 就会创建一个裸仓库，裸仓库没有工作区，因为服务器上的 Git 仓库纯粹是为了共享，所以不让用户直接登录到服务器上去改工作区，并且服务器上的 Git 仓库通常都以 <code>.git</code> 结尾。然后，把 owner 改为 git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> -R git:git sample.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>第五步，禁用 shell 登录:</p><p>出于安全考虑，第二步创建的 git 用户不允许登录 shell，这可以通过编辑 <code>/etc/passwd</code> 文件完成。找到类似下面的一行:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/bin/bash\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改为:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，git 用户可以正常通过 ssh 使用 git，但无法登录 shell，因为我们为 git 用户指定的 git-shell 每次一登录就自动退出。</p></li><li><p>第六步，克隆远程仓库:</p><p>现在，可以通过 <code>git clone</code> 命令克隆远程仓库了，在各自的电脑上运行:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@server:/srv/sample.git\nCloning into <span class="token string">&#39;sample&#39;</span><span class="token punctuation">..</span>.\nwarning: You appear to have cloned an empty repository.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剩下的推送就简单了。</p></li></ul></li><li><p><strong>Centos</strong></p><ol><li><p>安装 Git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel\nyum <span class="token function">install</span> <span class="token function">git</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来创建一个 git 用户组和用户，用来运行 git 服务:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token function">git</span>\n<span class="token function">useradd</span> <span class="token function">git</span> -g <span class="token function">git</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建证书登录</p><p>收集所有需要登录的用户的公钥，公钥位于 <code>id_rsa.pub</code> 文件中，将公钥导入到 <code>/home/git/.ssh/authorized_keys</code> 文件里，一行一个。</p><p>如果没有该文件创建它:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/git/\n<span class="token function">mkdir</span> .ssh\n<span class="token function">chmod</span> <span class="token number">755</span> .ssh\n<span class="token function">touch</span> .ssh/authorized_keys\n<span class="token function">chmod</span> <span class="token number">644</span> .ssh/authorized_keys\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>初始化 Git 仓库</p><p>首先我们选定一个目录作为 Git 仓库，假定是 <code>/home/gitrepo/test.git</code>，在 <code>/home/gitrepo</code> 目录下输入命令:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /home\n$ <span class="token function">mkdir</span> gitrepo\n$ <span class="token function">chown</span> git:git gitrepo/\n$ <span class="token builtin class-name">cd</span> gitrepo\n\n$ <span class="token function">git</span> init --bare test.git\nInitialized empty Git repository <span class="token keyword">in</span> /home/gitrepo/runoob.git/\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上命令 Git 创建一个空仓库，服务器上的 Git 仓库通常都以 <code>.git</code> 结尾。然后，把仓库所属用户改为 git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chown</span> -R git:git runoob.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>克隆仓库</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@192.168.45.4:/home/gitrepo/runoob.git\nCloning into <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">..</span>.\nwarning: You appear to have cloned an empty repository.\nChecking connectivity<span class="token punctuation">..</span>. done.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>192.168.45.4 为 Git 所在服务器 ip ，您需要将其修改为您自己的 Git 服务 ip。</p><p>这样我们的 Git 服务器安装就完成。</p></li></ul>',2),o={},d=(0,s(13860).Z)(o,[["render",function(e,n){return(0,i.wg)(),(0,i.iD)("div",null,[a,t,(0,i.kq)(" more "),l])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,i]of n)s[e]=i;return s}},26674:(e,n,s)=>{s.r(n),s.d(n,{data:()=>i});const i={key:"v-84d4a76c",path:"/software/git/server.html",title:"服务器搭建",lang:"zh-CN",frontmatter:{title:"服务器搭建",icon:"network",category:["Git"],tag:["Git","软件"],summary:"在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。\nGitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/software/git/server.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"服务器搭建"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Git"}],["meta",{property:"article:tag",content:"软件"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>在远程仓库一节中，我们讲了远程仓库实际上和本地仓库没啥不同，纯粹为了 7x24 小时开机并交换大家的修改。</p>\n<p>GitHub 就是一个免费托管代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，不想将源代码提交给任何第三方，这种情况下，就需要搭建 Git 服务器。</p>\n",headers:[],git:{createdTime:1591291369e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:6}]},readingTime:{minutes:2.91,words:872},filePathRelative:"software/git/server.md",localizedDate:"2020年6月4日"}}}]);