(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{476:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_0-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[s._v("#")]),s._v(" 0.前言")]),s._v(" "),a("p",[s._v("本篇博客为："),a("a",{attrs:{href:"https://www.jianshu.com/p/dde6a01c4094",target:"_blank",rel:"noopener noreferrer"}},[s._v("5分钟让你明白“软链接”和“硬链接”的区别"),a("OutboundLink")],1),s._v(" 的读书笔记。")]),s._v(" "),a("p",[s._v("这一部分主要为下一篇《pnpm有什么优势》作概念铺垫。")]),s._v(" "),a("h2",{attrs:{id:"_1-如何创建软、硬链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何创建软、硬链接"}},[s._v("#")]),s._v(" 1.如何创建软、硬链接")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("ln")]),s._v(" 可以创建硬链接：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" myfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("源文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" hardlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("硬链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过 "),a("code",[s._v("ln -s")]),s._v(" 可以创建软链接")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s myfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("源文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" softlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("软链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-区别"}},[s._v("#")]),s._v(" 2.区别")]),s._v(" "),a("p",[a("code",[s._v("linux")]),s._v("系统中用来标识物理硬盘区块的是"),a("code",[s._v("inode")]),s._v("值，可以通过"),a("code",[s._v("ls -li")]),s._v("查看：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s myfile softlink\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -li\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25869085")]),s._v(" -rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" unixzii  staff  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":45 hardlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("硬链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25869085")]),s._v(" -rw-r--r--  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" unixzii  staff  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":45 myfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("源文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25869216")]),s._v(" lrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" unixzii  staff   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":47 softlink -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("软链接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v("ls")]),s._v(" 结果的最左边一列，是文件的 "),a("code",[s._v("inode")]),s._v(" 值。")]),s._v(" "),a("p",[s._v("可以发现，软链接是是一个独立的区别，保存的是一个指针，指针指向拷贝对象的路径。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("执行删除源（如，"),a("code",[s._v("myfile")]),s._v("）操作的时候，两者表现不同：")]),s._v(" "),a("ol",[a("li",[s._v("硬链接仍可以访问")]),s._v(" "),a("li",[s._v("删除软链接，就相当于删除快捷方式，所以软链接无法访问。")])]),s._v(" "),a("h2",{attrs:{id:"_3-结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结论"}},[s._v("#")]),s._v(" 3.结论")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在"),a("code",[s._v("linux")]),s._v("操作系统中的"),a("code",[s._v("软链接")]),s._v("，等价于"),a("code",[s._v("windows")]),s._v("中的快捷方式。")])]),s._v(" "),a("li",[a("p",[s._v("在"),a("code",[s._v("linux")]),s._v("中多出一个"),a("code",[s._v("inode")]),s._v("的概念，即一个文件存在与否，是否有文件指向这个"),a("code",[s._v("inode")]),s._v("区块。事实上，文件系统会维护一个引用计数，只要有文件指向这个区块，它就不会从硬盘上消失。")]),s._v(" "),a("blockquote",[a("p",[s._v("这一点，有点像"),a("code",[s._v("git")]),s._v("分布式管理，只要有一个人还保留着本地的"),a("code",[s._v("git")]),s._v("参库，即使删除了"),a("code",[s._v("origin")]),s._v("，该文件就不算被删除。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);