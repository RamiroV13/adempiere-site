"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[18516],{16083:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});var a=s(78e3);const i=(0,a.uE)('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2><p>Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx’s friendly and flexible configuration.</p><h2 id="starting-stopping-and-reloading-configuration" tabindex="-1"><a class="header-anchor" href="#starting-stopping-and-reloading-configuration" aria-hidden="true">#</a> Starting, Stopping, and Reloading Configuration</h2><p>To start nginx, run the executable file. Once nginx is started, it can be controlled by invoking the executable with the <code>-s</code> parameter. Use the following syntax:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s signal\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where signal may be one of the following:</p><ul><li>stop — fast shutdown</li><li>quit — graceful shutdown</li><li>reload — reloading the configuration file</li><li>reopen — reopening the log files</li></ul><h2 id="configuration-file-s-structure" tabindex="-1"><a class="header-anchor" href="#configuration-file-s-structure" aria-hidden="true">#</a> Configuration File’s Structure</h2><p>Nginx consists of modules which are controlled by directives specified in the configuration file. Directives are divided into simple directives and block directives. A simple directive consists of the name and parameters separated by spaces and ends with a semicolon (<code>;</code>). A block directive has the same structure as a simple directive, but instead of the semicolon it ends with a set of additional instructions surrounded by braces (<code>{</code> and <code>}</code>). If a block directive can have other directives inside braces, it is called a context (examples: <code>events</code>, <code>http</code>, <code>server</code>, and <code>location</code>).</p><p>Directives placed in the configuration file outside of any contexts are considered to be in the main context. The <code>events</code> and <code>http</code> directives reside in the <code>main</code> context, <code>server</code> in <code>http</code>, and <code>location</code> in <code>server</code>.</p><p>The rest of a line after the <code>#</code> sign is considered a comment.</p><h2 id="serving-static-content" tabindex="-1"><a class="header-anchor" href="#serving-static-content" aria-hidden="true">#</a> Serving Static Content</h2><p>An important web server task is serving out files (such as images or static HTML pages). You will implement an example where, depending on the request, files will be served from different local directories: <code>/data/www</code> (which may contain HTML files) and <code>/data/images</code> (containing images). This will require editing of the configuration file and setting up of a server block inside the http block with two location blocks.</p><p>First, create the <code>/data/www</code> directory and put an <code>index.html</code> file with any text content into it and create the <code>/data/images</code> directory and place some images in it.</p><p>Next, open the configuration file. The default configuration file already includes several examples of the server block, mostly commented out. For now comment out all such blocks and start a new server block:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generally, the configuration file may include several server blocks distinguished by ports on which they listen to and by server names. Once nginx decides which server processes a request, it tests the URI specified in the request’s header against the parameters of the location directives defined inside the server block.</p><p>Add the following location block to the server block:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This location block specifies the “<code>/</code>” prefix compared with the URI from the request. For matching requests, the URI will be added to the path specified in the root directive, that is, to <code>/data/www</code>, to form the path to the requested file on the local file system. If there are several matching location blocks nginx selects the one with the longest prefix. The location block above provides the shortest prefix, of length one, and so only if all other location blocks fail to provide a match, this block will be used.</p><p>Next, add the second location block:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will be a match for requests starting with <code>/images/</code> (location <code>/</code> also matches such requests, but has shorter prefix).</p><p>The resulting configuration of the server block should look like this:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is already a working configuration of a server that listens on the standard port <code>80</code> and is accessible on the local machine at <code>http://localhost/</code>. In response to requests with URIs starting with <code>/images/</code>, the server will send files from the <code>/data/images</code> directory. For example, in response to the <code>http://localhost/images/example.png</code> request nginx will send the <code>/data/images/example.png</code> file. If such file does not exist, nginx will send a response indicating the 404 error. Requests with URIs not starting with <code>/images/</code> will be mapped onto the <code>/data/www</code> directory. For example, in response to the <code>http://localhost/some/example.html</code> request nginx will send the <code>/data/www/some/example.html</code> file.</p><p>To apply the new configuration, start nginx if it is not yet started or send the <code>reload</code> signal to the nginx’s master process, by executing:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s reload\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In case something does not work as expected, you may try to find out the reason in <code>access.log</code> and <code>error.log</code> files in the directory <code>/usr/local/nginx/logs</code> or <code>/var/log/nginx</code>.</p><h2 id="setting-up-a-simple-proxy-server" tabindex="-1"><a class="header-anchor" href="#setting-up-a-simple-proxy-server" aria-hidden="true">#</a> Setting Up a Simple Proxy Server</h2><p>One of the frequent uses of nginx is setting it up as a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients.</p><p>We will configure a basic proxy server, which serves requests of images with files from the local directory and sends all other requests to a proxied server. In this example, both servers will be defined on a single nginx instance.</p><p>First, define the proxied server by adding one more <code>server</code> block to the nginx’s configuration file with the following contents:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8080</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/up1</span><span class="token punctuation">;</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will be a simple server that listens on the port <code>8080</code> (previously, the listen directive has not been specified since the standard port <code>80</code> was used) and maps all requests to the <code>/data/up1</code> directory on the local file system. Create this directory and put the <code>index.html</code> file into it. Note that the root directive is placed in the server context. Such root directive is used when the location block selected for serving a request does not include own root directive.</p><p>Next, use the server configuration from the previous section and modify it to make it a proxy server configuration. In the first location block, put the <code>proxy_pass</code> directive with the protocol, name and port of the proxied server specified in the parameter (in our case, it is <code>http://localhost:8080</code>):</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We will modify the second location block, which currently maps requests with the <code>/images/</code> prefix to the files under the <code>/data/images</code> directory, to make it match the requests of images with typical file extensions. The modified location block looks like this:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The parameter is a regular expression matching all URIs ending with <code>.gif</code>, <code>.jpg</code>, or <code>.png</code>. A regular expression should be preceded with <code>~</code>. The corresponding requests will be mapped to the <code>/data/images</code> directory.</p><p>When nginx selects a <code>location</code> block to serve a request it first checks location directives that specify prefixes, remembering <code>location</code> with the longest prefix, and then checks regular expressions. If there is a match with a regular expression, nginx picks this <code>location</code> or, otherwise, it picks the one remembered earlier.</p><p>The resulting configuration of a proxy server will look like this:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080/</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This server will filter requests ending with <code>.gif</code>, <code>.jpg</code>, or <code>.png</code> and map them to the <code>/data/images</code> directory (by adding URI to the root directive’s parameter) and pass all other requests to the proxied server configured above.</p><p>To apply new configuration, send the reload signal to nginx as described in the previous sections.</p><p>There are many more directives that may be used to further configure a proxy connection.</p><h2 id="setting-up-fastcgi-proxying" tabindex="-1"><a class="header-anchor" href="#setting-up-fastcgi-proxying" aria-hidden="true">#</a> Setting Up FastCGI Proxying</h2><p>Nginx can be used to route requests to FastCGI servers which run applications built with various frameworks and programming languages such as PHP.</p><p>The most basic nginx configuration to work with a FastCGI server includes using the <code>fastcgi_pass</code> directive instead of the <code>proxy_pass</code> directive, and <code>fastcgi_param</code> directives to set parameters passed to a FastCGI server. Suppose the FastCGI server is accessible on <code>localhost:9000</code>. Taking the proxy configuration from the previous section as a basis, replace the <code>proxy_pass</code> directive with the fastcgi_pass directive and change the parameter to <code>localhost:9000</code>. In PHP, the <code>SCRIPT_FILENAME</code> parameter is used for determining the script name, and the <code>QUERY_STRING</code> parameter is used to pass request parameters. The resulting configuration would be:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">fastcgi_pass</span>  localhost:9000</span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">fastcgi_param</span> SCRIPT_FILENAME <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>\n        <span class="token directive"><span class="token keyword">fastcgi_param</span> QUERY_STRING    <span class="token variable">$query_string</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>\n        <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will set up a server that will route all requests except for requests for static images to the proxied server operating on <code>localhost:9000</code> through the FastCGI protocol.</p><h2 id="official-docs" tabindex="-1"><a class="header-anchor" href="#official-docs" aria-hidden="true">#</a> Official Docs</h2>',53),t={href:"https://docs.nginx.com/nginx/admin-guide/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("Navigate"),c={},r=(0,s(13860).Z)(c,[["render",function(e,n){const s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[i,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",t,[o,(0,a.Wm)(s)])])])])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},21794:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-4a42ca8c",path:"/en/software/nginx.html",title:"Nginx",lang:"en-US",frontmatter:{icon:"nginx",summary:"Nginx Intro Nginx is a high performance HTTP and reverse proxy server and an IMAP / POP3 / SMTP proxy server. It features low memory, high concurrency, high stability, and Nginx’s ",head:[["meta",{property:"og:url",content:"https://mrhope.site/en/software/nginx.html"}],["meta",{property:"og:site_name",content:"My name is Mr.Hope"}],["meta",{property:"og:title",content:"Nginx"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-11-06T18:25:54.000Z"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-11-06T18:25:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"Intro",slug:"intro",children:[]},{level:2,title:"Starting, Stopping, and Reloading Configuration",slug:"starting-stopping-and-reloading-configuration",children:[]},{level:2,title:"Configuration File’s Structure",slug:"configuration-file-s-structure",children:[]},{level:2,title:"Serving Static Content",slug:"serving-static-content",children:[]},{level:2,title:"Setting Up a Simple Proxy Server",slug:"setting-up-a-simple-proxy-server",children:[]},{level:2,title:"Setting Up FastCGI Proxying",slug:"setting-up-fastcgi-proxying",children:[]},{level:2,title:"Official Docs",slug:"official-docs",children:[]}],git:{createdTime:1591204114e3,updatedTime:1604687154e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3}]},readingTime:{minutes:4.81,words:1442},filePathRelative:"en/software/nginx.md",localizedDate:"June 3, 2020"}}}]);