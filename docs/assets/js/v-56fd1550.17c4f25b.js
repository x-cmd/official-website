"use strict";(self.webpackChunkx_cmd_doc=self.webpackChunkx_cmd_doc||[]).push([[486],{3651:function(e,a,s){s.r(a),s.d(a,{data:function(){return l}});const l={key:"v-56fd1550",path:"/guide/workspace.html",title:"workspace",lang:"zh-CN",frontmatter:{title:"workspace",description:"x-cmd workspace 工作区脚本, 脚本管理项目，轻松搞定代码项目管理",sidebarDepth:1,lastUpdated:!0},excerpt:"",headers:[{level:2,title:"概要",slug:"概要",children:[]},{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"使用",slug:"使用",children:[{level:3,title:"项目目录结构：",slug:"项目目录结构",children:[]},{level:3,title:"脚本编写：",slug:"脚本编写",children:[]}]}],git:{updatedTime:1642678555e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:5}]},filePathRelative:"guide/workspace.md"}},705:function(e,a,s){s.r(a),s.d(a,{default:function(){return d}});var l=s(6252);const n=(0,l._)("h1",{id:"x-workspace",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#x-workspace","aria-hidden":"true"},"#"),(0,l.Uk)(" x workspace")],-1),r=(0,l.uE)('<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><p><mark>x [ 脚本文件名 ]</mark> —— 工作区脚本运行入口</p><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>x workspace</code> 提供项目Shell脚本运行入口，命令根据当前文件夹路径层层递归寻找 <code>.x-cmd</code> 文件夹下的文件，并使用Shell运行脚本。</p><ul><li><strong>方便管理</strong>：提供唯一 x 入口帮助你更好管理项目中的脚本文件。</li><li><strong>无污染外部环境</strong>：使用 <code>x workspace</code> 所运行的脚本文件，不会污染到外部的环境变量。</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构：</h3><ul><li>项目根目录创建 <code>.x-cmd</code> 文件夹用于存放脚本，例如：</li></ul><div class="language-text ext-text"><pre class="language-text"><code>├─ .x-cmd\n│  └── dev\n│  └── deploy\n│  └── build\n│  └── ...\n│\n└─ src\n└─ README.md\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br></div></div><ul><li>运行<code>x &lt;对应脚本文件名&gt;</code>, 例如 <code>x dev</code>即可运行 <code>dev</code> Shell脚本文件</li></ul><h3 id="脚本编写" tabindex="-1"><a class="header-anchor" href="#脚本编写" aria-hidden="true">#</a> 脚本编写：</h3><ul><li>脚本文件名需 <strong>无文件后缀</strong></li><li>脚本第一行需添加 <code>xsh</code> 标识</li><li>提供 <code>x wsroot</code> 命令获取 <strong>项目的根路径</strong></li></ul><p>例子：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># shellcheck shell=bash #xsh</span>\n<span class="token assign-left variable">WS_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>x wsroot<span class="token variable">)</span></span>&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$WS_DIR</span>&quot;</span>\n</code></pre></div>',14),t={};var d=(0,s(3744).Z)(t,[["render",function(e,a){const s=(0,l.up)("Terminal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l.Wm)(s,{termIndex:7}),r],64)}]])}}]);