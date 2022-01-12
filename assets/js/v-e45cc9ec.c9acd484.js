"use strict";(self.webpackChunkx_cmd_doc=self.webpackChunkx_cmd_doc||[]).push([[590],{8135:function(r,t,n){n.r(t),n.d(t,{data:function(){return l}});const l={key:"v-e45cc9ec",path:"/guide/install.html",title:"x install",lang:"zh-CN",frontmatter:{title:"x install",description:"x-cmd 终端主题命令",sidebarDepth:1,lastUpdated:!0},excerpt:"",headers:[{level:2,title:"概要",slug:"概要",children:[]},{level:2,title:"描述",slug:"描述",children:[]},{level:2,title:"命令选项",slug:"命令选项",children:[{level:3,title:"显示选项",slug:"显示选项",children:[]},{level:3,title:"过滤选项",slug:"过滤选项",children:[]},{level:3,title:"长视图选项",slug:"长视图选项",children:[]}]}],git:{updatedTime:1641548309e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:2}]},filePathRelative:"guide/install.md"}},5347:function(r,t,n){n.r(t),n.d(t,{default:function(){return x}});var l=n(6252);const i=(0,l._)("h1",{id:"x-ls",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#x-ls","aria-hidden":"true"},"#"),(0,l.Uk)(" x ls")],-1),s=(0,l._)("p",null,"增强输出文件列表",-1),o=(0,l.Uk)("利用 x-cmd 静态编译模块，对 "),e={href:"https://github.com/ogham/exa",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("exa"),a=(0,l.Uk)(" 进行下载托管，达到在不同环境下的快速安装。"),d=(0,l.uE)('<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2><p>x ls <a href="#%E5%91%BD%E4%BB%A4%E9%80%89%E9%A1%B9">[ OPTION ]...</a> [ FILE ]...</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>x ll</code> 命令等同 <code>x ls -l</code> 输出长列表命令</p></div><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p><code>x ls</code> 是 Unix 和 Linux 操作系统附带的古老文件列表命令行程序的现代替代品，赋予它更多功能和更好的默认值。它使用颜色来区分文件类型和元数据。它了解符号链接、扩展属性和 Git。它体积小、速度快，而且只有一个二进制文件，相比传统的 <code>ls</code> 命令 <code>x ls</code> 功能更强大、对用户更友好。</p><ul><li><strong>颜色</strong>：不同类型的文件和数据将采用不同的颜色，并且将为当前用户突出显示用户和组列。</li><li><strong>信息</strong>：显示文件的扩展属性，以及标准文件系统信息，例如 权限，大小和文件创建更新的日期和时间。</li><li><strong>树视图</strong>：标准tree工具是内置的。</li><li><strong>Git支持</strong>：查看每个文件的暂存和未暂存状态，就在标准视图中。也适用于树状视图，以获取存储库的高级概览。</li></ul><h2 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项" aria-hidden="true">#</a> 命令选项</h2><h3 id="显示选项" tabindex="-1"><a class="header-anchor" href="#显示选项" aria-hidden="true">#</a> 显示选项</h3><ul><li><strong>-1 , --oneline</strong> : 每行显示一个条目</li><li><strong>-G , --grid</strong> : 将条目显示为网格（默认）</li><li><strong>-l , --long</strong> : 显示扩展细节和属性</li><li><strong>-R , --recurse</strong> : 递归到目录</li><li><strong>-T , --tree</strong> : 作为树递归到目录中</li><li><strong>-x , --across</strong> : 对网格进行排序，而不是向下排序</li><li><strong>-F , --classify</strong> : 按文件名显示类型指示器</li><li><strong>--icons</strong> : 显示图标</li><li><strong>--no-icons</strong> : 不显示图标（总是覆盖 --icons）</li></ul><h3 id="过滤选项" tabindex="-1"><a class="header-anchor" href="#过滤选项" aria-hidden="true">#</a> 过滤选项</h3><ul><li><strong>-a , --all</strong> : 显示隐藏和“点”前缀文件</li><li><strong>-d , --list-dirs</strong> : 像普通文件一样列出目录</li><li><strong>-L , --level=(depth)</strong> : 限制递归深度</li><li><strong>-r , --reverse</strong> : 反转排序顺序</li><li><strong>-s , --sort=(field)</strong> : 按哪个字段排序</li><li><strong>--group-directories-first</strong> : 在其他文件之前列出目录</li><li><strong>-D , --only-dirs</strong> : 只列出目录</li><li><strong>--git-ignore</strong> : 忽略中提到的文件.gitignore</li><li><strong>-I , --ignore-glob=(globs)</strong> : 要忽略的文件的全局模式（管道分隔）</li></ul><h3 id="长视图选项" tabindex="-1"><a class="header-anchor" href="#长视图选项" aria-hidden="true">#</a> 长视图选项</h3><ul><li><strong>-b</strong> , <strong>--binary</strong> : 列出带有二进制前缀的文件大小</li><li><strong>-B</strong> , <strong>--bytes</strong> : 以字节为单位列出文件大小，不带任何前缀</li><li><strong>-g</strong> , <strong>--group</strong> : 列出每个文件的组</li><li><strong>-h</strong> , <strong>--header</strong> : 为每一列添加一个标题行</li><li><strong>-H</strong> , <strong>--links</strong> : 列出每个文件的硬链接数</li><li><strong>-i</strong> , <strong>--inode</strong> : 列出每个文件的 inode 编号</li><li><strong>-m</strong> , <strong>--modified</strong> : 使用修改后的时间戳字段</li><li><strong>-S</strong> , <strong>--blocks</strong> : 列出每个文件的文件系统块数</li><li><strong>-t</strong> , <strong>--time=(field)</strong> : 使用哪个时间戳字段</li><li><strong>-u</strong> , <strong>--accessed</strong> : 使用访问的时间戳字段</li><li><strong>-U</strong> , <strong>--created</strong> : 使用创建的时间戳字段</li><li><strong>-@</strong> , <strong>--extended</strong> : 列出每个文件的扩展属性和大小</li><li><strong>--changed</strong> : 使用改变的时间戳字段</li><li><strong>--git</strong> : 列出每个文件的 Git 状态，如果被跟踪或忽略</li><li><strong>--time-style</strong> : 如何格式化时间戳</li><li><strong>--no-permissions</strong> : 禁止权限字段</li><li><strong>--octal-permissions</strong> : 以八进制格式列出每个文件的权限</li><li><strong>--no-filesize</strong> : 取消文件大小字段</li><li><strong>--no-user</strong> : 禁止用户字段</li><li><strong>--no-time</strong> : 抑制时间字段</li></ul>',13),c=(0,l.Uk)("更多内容可查看 "),h={href:"https://github.com/ogham/exa",target:"_blank",rel:"noopener noreferrer"},u=(0,l.Uk)("exa 文档查阅"),p={};var x=(0,n(3744).Z)(p,[["render",function(r,t){const n=(0,l.up)("ExternalLinkIcon"),p=(0,l.up)("Terminal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,s,(0,l._)("blockquote",null,[(0,l._)("p",null,[o,(0,l._)("a",e,[g,(0,l.Wm)(n)]),a])]),(0,l.Wm)(p,{docIndex:0}),d,(0,l._)("blockquote",null,[(0,l._)("p",null,[c,(0,l._)("a",h,[u,(0,l.Wm)(n)])])])],64)}]])}}]);