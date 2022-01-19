"use strict";(self.webpackChunkx_cmd_doc=self.webpackChunkx_cmd_doc||[]).push([[869],{3011:function(e,t,l){l.r(t),l.d(t,{data:function(){return d}});const d={key:"v-846465d2",path:"/guide/proxy.html",title:"x proxy",lang:"zh-CN",frontmatter:{title:"x proxy",description:"x-cmd 代理管理代理切换命令行工具，快速切换常见包管理工具的命令行代理（例如：maven, npm, pip, cargo, go 等），并且可在常见的Linux系统中的包管理工具达到快速换源（例如：apt, apk, yum, pacman 等）以及命令行的代理（例如：http/https）",sidebarDepth:1,lastUpdated:!0},excerpt:"",headers:[{level:2,title:"概要",slug:"概要",children:[]},{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"支持镜像源模块",slug:"支持镜像源模块",children:[]},{level:2,title:"子命令",slug:"子命令",children:[]}],git:{updatedTime:1642601728e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:4}]},filePathRelative:"guide/proxy.md"}},2758:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var d=l(6252);const i=(0,d._)("h1",{id:"x-proxy",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#x-proxy","aria-hidden":"true"},"#"),(0,d.Uk)(" x proxy")],-1),a=(0,d.uE)('<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><p><mark>x proxy <a href="#%E6%94%AF%E6%8C%81%E9%95%9C%E5%83%8F%E6%BA%90%E6%A8%A1%E5%9D%97"> &lt;modules&gt; ...</a> <a href="#%E5%AD%90%E5%91%BD%E4%BB%A4">[ subcommand ]...</a></mark> —— 管理命令行镜像源</p><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>x proxy</code> 命令可以帮助你管理，快速切换常见包管理工具的命令行代理（例如：maven, npm, pip, cargo, go 等），并且可在常见的Linux系统中的包管理工具达到快速换源（例如：apt, apk, yum, pacman 等）以及命令行的代理（例如：http/https）。</p><ul><li><strong>方便快捷</strong>：通过命令的交互，快速切换官方镜像源。</li><li><strong>种类多样</strong>：涵盖常见的包管理工具。</li></ul><h2 id="支持镜像源模块" tabindex="-1"><a class="header-anchor" href="#支持镜像源模块" aria-hidden="true">#</a> 支持镜像源模块</h2><ul><li>语言包管理工具 <ul><li>npm</li><li>yarn</li><li>maven</li><li>pip</li><li>go</li><li>cargo</li><li>gem</li></ul></li><li>系统包管理工具 <ul><li>apt</li><li>apk</li><li>yum</li><li>brew</li><li>pacman</li><li>dnf</li><li>brew</li></ul></li><li>命令工具 <ul><li>docker</li></ul></li></ul><h2 id="子命令" tabindex="-1"><a class="header-anchor" href="#子命令" aria-hidden="true">#</a> 子命令</h2><dl><dt>set</dt><dd>设置http/https当前终端会话的代理</dd><dt>unset</dt><dd>取消设置当前终端会话的所有http/https代理</dd><dt>&lt;module name&gt; url</dt><dd>列出所有的镜像源列表</dd><dt>&lt;module name&gt; set, replace [镜像源]</dt><dd><mark>设置更换镜像源 | 不输入[镜像源]将使用默认官方镜像源</mark></dd><dt>&lt;module name&gt; unset</dt><dd>取消镜像源设置</dd><dt>&lt;module name&gt; rollback</dt><dd>回退镜像源设置</dd></dl>',9),r=(0,d.Uk)(" 在 go 包管理工具的换源操作中，提供 "),n=(0,d._)("code",null,"x proxy go tutorial",-1),u=(0,d.Uk)(" 命令来查看具体的详细的命令。"),o={};var p=(0,l(3744).Z)(o,[["render",function(e,t){const l=(0,d.up)("Terminal"),o=(0,d.up)("Badge");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d.Wm)(l,{termIndex:2}),a,(0,d.Wm)(o,{type:"tip",text:"提示",vertical:"middle"}),r,n,u],64)}]])}}]);