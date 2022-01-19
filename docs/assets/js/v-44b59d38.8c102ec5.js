"use strict";(self.webpackChunkx_cmd_doc=self.webpackChunkx_cmd_doc||[]).push([[238],{407:function(d,t,e){e.r(t),e.d(t,{data:function(){return l}});const l={key:"v-44b59d38",path:"/enhance/ls.html",title:"x ls",lang:"zh-CN",frontmatter:{title:"x ls",description:"x-cmd 增强 ls 命令 | 文件列表展示命令",sidebarDepth:1,lastUpdated:!0},excerpt:"",headers:[{level:2,title:"概要",slug:"概要",children:[]},{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"命令选项",slug:"命令选项",children:[{level:3,title:"过滤选项",slug:"过滤选项",children:[]},{level:3,title:"长视图选项",slug:"长视图选项",children:[]}]}],git:{updatedTime:1642601728e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:5}]},filePathRelative:"enhance/ls.md"}},708:function(d,t,e){e.r(t),e.d(t,{default:function(){return x}});var l=e(6252);const r=(0,l._)("h1",{id:"x-ls",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#x-ls","aria-hidden":"true"},"#"),(0,l.Uk)(" x ls")],-1),i=(0,l._)("h2",{id:"概要",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#概要","aria-hidden":"true"},"#"),(0,l.Uk)(" 概要")],-1),n=(0,l._)("p",null,[(0,l._)("mark",null,[(0,l.Uk)("x ls "),(0,l._)("a",{href:"#%E5%91%BD%E4%BB%A4%E9%80%89%E9%A1%B9"},"[ OPTION ]..."),(0,l.Uk)(" [ Folder ]...")]),(0,l.Uk)(" —— 增强输出文件列表")],-1),a=(0,l.Uk)("利用 x-cmd 静态编译模块，对 "),o={href:"https://github.com/ogham/exa",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Uk)("exa"),c=(0,l.Uk)(" 进行分发托管，达到在不同环境下的快速安装使用。"),h=(0,l.uE)('<br><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>x ll</code> 命令等同 <code>x ls -l</code> 输出长列表命令</p></div><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>x ls</code> 是 Unix 和 Linux 操作系统附带的古老文件列表命令行程序的现代替代品，赋予它更多功能和更好的默认值。它使用颜色来区分文件类型和元数据。它了解符号链接、扩展属性和 Git。它体积小、速度快，而且只有一个二进制文件，相比传统的 <code>ls</code> 命令 <code>x ls</code> 功能更强大、对用户更友好。</p><ul><li><strong>颜色</strong>:不同类型的文件和数据将采用不同的颜色，并且将为当前用户突出显示用户和组列。</li><li><strong>信息</strong>:显示文件的扩展属性，以及标准文件系统信息，例如 权限，大小和文件创建更新的日期和时间。</li><li><strong>树视图</strong>:标准tree工具是内置的。</li><li><strong>Git支持</strong>:查看每个文件的暂存和未暂存状态，就在标准视图中。也适用于树状视图，以获取存储库的高级概览。</li></ul><h2 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项" aria-hidden="true">#</a> 命令选项</h2><blockquote><p><code>x ls</code> 命令选项几乎但不完全于 <code>ls</code>相同</p></blockquote><dl><dt>-1 , --oneline</dt><dd>每行显示一个条目</dd><dt>-G , --grid</dt><dd>将条目显示为网格（默认）</dd><dt>-l , --long</dt><dd>显示扩展细节和属性</dd><dt>-R , --recurse</dt><dd>递归到目录</dd><dt>-T , --tree</dt><dd><mark>作为树递归到目录中</mark></dd><dt>-x , --across</dt><dd>对网格进行排序，而不是向下排序</dd><dt>-F , --classify</dt><dd>按文件名显示类型指示器</dd><dt>--icons</dt><dd>显示图标</dd><dt>--no-icons</dt><dd>不显示图标（总是覆盖 --icons）</dd></dl><h3 id="过滤选项" tabindex="-1"><a class="header-anchor" href="#过滤选项" aria-hidden="true">#</a> 过滤选项</h3><dl><dt>-a , --all</dt><dd><mark>显示隐藏和“点”前缀文件</mark></dd><dt>-d , --list-dirs</dt><dd>普通文件一样列出目录</dd><dt>-L , --level=(depth)</dt><dd>限制递归深度</dd><dt>-r , --reverse</dt><dd>反转排序顺序</dd><dt>-s , --sort=(field)</dt><dd>按哪个字段排序</dd><dt>--group-directories-first</dt><dd>在其他文件之前列出目录</dd><dt>-D , --only-dirs</dt><dd>只列出目录</dd><dt>--git-ignore</dt><dd>忽略中提到的文件.gitignore</dd><dt>-I , --ignore-glob=(globs)</dt><dd>要忽略的文件的全局模式（管道分隔）</dd></dl><h3 id="长视图选项" tabindex="-1"><a class="header-anchor" href="#长视图选项" aria-hidden="true">#</a> 长视图选项</h3><dl><dt>-b , --binary</dt><dd>列出带有二进制前缀的文件大小</dd><dt>-B , --bytes</dt><dd>以字节为单位列出文件大小，不带任何前缀</dd><dt>-g , --group</dt><dd>列出每个文件的组</dd><dt>-h , --header</dt><dd>为每一列添加一个标题行</dd><dt>-H , --links</dt><dd>列出每个文件的硬链接数</dd><dt>-i , --inode</dt><dd>列出每个文件的 inode 编号</dd><dt>-m , --modified</dt><dd>使用修改后的时间戳字段</dd><dt>-S , --blocks</dt><dd>列出每个文件的文件系统块数</dd><dt>-t , --time=(field)</dt><dd>使用哪个时间戳字段</dd><dt>-u , --accessed</dt><dd>使用访问的时间戳字段</dd><dt>-U , --created</dt><dd>使用创建的时间戳字段</dd><dt>-@ , --extended</dt><dd>列出每个文件的扩展属性和大小</dd><dt>--changed</dt><dd>使用改变的时间戳字段</dd><dt>--git</dt><dd>列出每个文件的 Git 状态，如果被跟踪或忽略</dd><dt>--time-style</dt><dd>如何格式化时间戳</dd><dt>--no-permissions</dt><dd>禁止权限字段</dd><dt>--octal-permissions</dt><dd>以八进制格式列出每个文件的权限</dd><dt>--no-filesize</dt><dd>取消文件大小字段</dd><dt>--no-user</dt><dd>禁止用户字段</dd><dt>--no-time</dt><dd>抑制时间字段</dd></dl>',12),u=(0,l.Uk)("更多内容可查看 "),g={href:"https://github.com/ogham/exa",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("exa 文档查阅"),p={};var x=(0,e(3744).Z)(p,[["render",function(d,t){const e=(0,l.up)("Terminal"),p=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,(0,l.Wm)(e,{termIndex:0}),i,n,(0,l._)("blockquote",null,[(0,l._)("p",null,[a,(0,l._)("a",o,[s,(0,l.Wm)(p)]),c])]),h,(0,l._)("blockquote",null,[(0,l._)("p",null,[u,(0,l._)("a",g,[m,(0,l.Wm)(p)])])])],64)}]])}}]);