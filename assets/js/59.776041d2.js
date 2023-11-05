(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{466:function(s,a,n){"use strict";n.r(a);var e=n(19),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("在使用"),n("code",[s._v("terminal2")]),s._v("发布博客的时候，执行")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/Project/vuepress-jacky-blog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("执行 "),n("code",[s._v("npm run dev")]),s._v(" 报错：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("Error: EACCES: permission denied, \nunlink "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/vuepress-jacky-blog/node_modules/@vuepress/core/.temp/app-enhancers/0.js'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("说明缺少权限，一般情况下，只需在原有指令前添加"),n("code",[s._v("sudo")]),s._v("，如 "),n("code",[s._v("sudo npm run dev")])]),s._v(" "),n("p",[s._v("但是也可以给文件夹添加"),n("code",[s._v("权限")]),s._v("，在"),n("code",[s._v("MAC")]),s._v("中添加"),n("code",[s._v("权限")]),s._v("的方式如下：")]),s._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),n("p",[s._v("文件夹权限设置：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" testfile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("文件权限设置：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" testfile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_777-数字含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_777-数字含义"}},[s._v("#")]),s._v(" 777 数字含义")]),s._v(" "),n("p",[s._v("文件或目录的访问权限分为"),n("code",[s._v("只读")]),s._v("，"),n("code",[s._v("只写")]),s._v("和"),n("code",[s._v("可执行")]),s._v("三种，在终端中其所对应的英文缩写："),n("code",[s._v("rwx")]),s._v("。")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("7")]),s._v("的含义")]),s._v(" "),n("p",[n("code",[s._v("7")]),s._v("转为二进制"),n("code",[s._v("111")]),s._v("，分别对应这"),n("code",[s._v("rwx")]),s._v("这三个权限。通过4、2、1的组合，得到以下几种权限：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("（没有权限）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("（读取权限）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("（4+1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 读取+执行）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("（4+2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 读取+写入）\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("（4+2+1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 读取+写入+执行）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("777")]),s._v("的含义")]),s._v(" "),n("p",[s._v("分别对应三类使用者的权限。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("u：表示文件所有者\ng：表示同组用户\no：表示其它用户\na：表示所有用户\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"拓展-chomd-指令学习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拓展-chomd-指令学习"}},[s._v("#")]),s._v(" 拓展： chomd 指令学习")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("who"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("opt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件/目录名\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# who ")]),s._v("\n  u：表示文件所有者\n  g：表示同组用户\n  o：表示其它用户\n  a：表示所有用户\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# opt")]),s._v("\n  +：添加某个权限\n  -：取消某个权限\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("：赋予给定的权限，并取消原有的权限\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mode 权限")]),s._v("\n  r：可读\n  w：可写\n  x：可执行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("例如：给"),n("code",[s._v("shell")]),s._v("脚本给"),n("code",[s._v("deploy.sh")]),s._v("的执行权限")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x deploy.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当然也可以使用数字设定法：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给所有用户添加可执行权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# _ _ x | _ _ x | _ _ x ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0 0 1 | 0 0 1 | 0 0 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简化数字指令： 111")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v(" deploy.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/pingfan1990/p/5065360.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("博客园-mac设置文件权限问题"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);