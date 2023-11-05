(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{474:function(e,a,s){"use strict";s.r(a);var v=s(19),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_0-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[e._v("#")]),e._v(" 0.前言")]),e._v(" "),s("p",[e._v("本篇博客主要讲的是：不同包管理工具形成"),s("code",[e._v("node_modules")]),e._v("拓扑结构的变化。")]),e._v(" "),s("p",[e._v("在这一节就可以明显的发现最近大火的"),s("code",[e._v("pnpm")]),e._v("相比于前代包管理（"),s("code",[e._v("npm/yarn")]),e._v("）工具上在资源空间上的优势，创造性的使用"),s("code",[e._v("hardlink")]),e._v("和"),s("code",[e._v("softlink")]),e._v("来链接"),s("code",[e._v("module")]),e._v("与"),s("code",[e._v("module")]),e._v("之间的引用。")]),e._v(" "),s("p",[e._v("此外，讲解"),s("code",[e._v("pnpm")]),e._v("的时候，需要有"),s("code",[e._v("软链接")]),e._v("和"),s("code",[e._v("硬链接")]),e._v("的前提知识，这个可以看我的另一篇文章《软链接与硬链接》。")]),e._v(" "),s("h2",{attrs:{id:"_1-module-的查找方式-向上查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-module-的查找方式-向上查找"}},[e._v("#")]),e._v(" 1."),s("code",[e._v("module")]),e._v(" 的查找方式：向上查找")]),e._v(" "),s("p",[e._v("当 "),s("code",[e._v("require('package-hello')")]),e._v(" 时，假设 "),s("code",[e._v("package-hello")]),e._v(" 是一个 "),s("code",[e._v("npm")]),e._v(" 库，我们是如何找到该 "),s("code",[e._v("package")]),e._v(" 的？")]),e._v(" "),s("ol",[s("li",[e._v("寻找当前目录的 "),s("code",[e._v("node_modules/package-hello")]),e._v(" 目录")]),e._v(" "),s("li",[e._v("如果未找到，寻找上一级的 "),s("code",[e._v("../node_modules/package-hello")]),e._v(" 目录，以此递归查找。")])]),e._v(" "),s("h2",{attrs:{id:"_2-npm2-的依赖结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-npm2-的依赖结构"}},[e._v("#")]),e._v(" 2."),s("code",[e._v("npm2")]),e._v(" 的依赖结构")]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("npmv2")]),e._v(" 时，"),s("code",[e._v("node_modules")]),e._v(" 对于各个 package 的拓扑为嵌套结构。")]),e._v(" "),s("p",[e._v("假设:")]),e._v(" "),s("ol",[s("li",[e._v("项目依赖 "),s("code",[e._v("package-a")]),e._v(" 与 "),s("code",[e._v("package-b")]),e._v(" 两个 package")]),e._v(" "),s("li",[s("code",[e._v("package-a")]),e._v(" 与 "),s("code",[e._v("package-b")]),e._v(" 均依赖 "),s("code",[e._v("lodash@4.17.4")])])]),e._v(" "),s("p",[e._v("依赖关系以 Markdown 列表表示:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("+ package-a\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@4.17.4"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n+ package-b\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@4.17.4"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("此时 "),s("code",[e._v("node_modules")]),e._v(" 目录结构如下:")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20220217205125333.png",alt:"image-20220217205125333"}}),e._v(" "),s("p",[e._v("此时最大的问题：")]),e._v(" "),s("ol",[s("li",[e._v("嵌套过深。")]),e._v(" "),s("li",[e._v("占用空间过大。")])]),e._v(" "),s("h2",{attrs:{id:"_3-npm3-的依赖结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm3-的依赖结构"}},[e._v("#")]),e._v(" 3."),s("code",[e._v("npm3")]),e._v(" 的依赖结构")]),e._v(" "),s("blockquote",[s("p",[e._v("目前在 npm/yarn 中仍然为平铺结构，但 pnpm 使用了更省空间的方法，以后将会提到。")]),e._v(" "),s("p",[e._v("扁平/平铺的含义：第三方依赖和第三方依赖的依赖会被安装在同级。")])]),e._v(" "),s("p",[e._v("在 "),s("code",[e._v("npmv3")]),e._v(" 之后 "),s("code",[e._v("node_modules")]),e._v(" 为平铺结构，拓扑结构如下:")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20220217205222349.png",alt:"image-20220217205222349"}}),e._v(" "),s("p",[e._v("问题：以下依赖最终"),s("code",[e._v("node_modules")]),e._v("的结果是什么？")]),e._v(" "),s("blockquote",[s("p",[e._v("可参考"),s("a",{attrs:{href:"https://github.com/shfshanyue/node-examples/tree/master/engineering/package/topology",target:"_blank",rel:"noopener noreferrer"}},[e._v("该示例"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("依赖关系以 Markdown 列表表示：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("+ package-a\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@^4.17.4"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n+ package-b\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@^4.16.1"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("答: 与上图所示的拓扑结构一致，因为二者为 "),s("code",[e._v("^")]),e._v(" 版本号，他们均会下载匹配该版本号范围的最新版本，即 "),s("code",[e._v("@4.17.4")]),e._v("，因此二者依赖一致。")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("如果考虑 "),s("code",[e._v("package.lock.json")]),e._v("文件的话，会严格按照"),s("code",[e._v("package.json")]),e._v("中指定的版本规则，此时拓扑结构会变成：")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20220217205723089.png",alt:"image-20220217205723089"}}),e._v(" "),s("p",[e._v("此时，"),s("code",[e._v("npm3")]),e._v("拓扑结构的问题就差不多出现了，即当存在两个相同"),s("code",[e._v("module")]),e._v("，而不同"),s("code",[e._v("version")]),e._v("时。")]),e._v(" "),s("p",[e._v("即，当第一个同名的"),s("code",[e._v("module")]),e._v("会被扁平的安装在与"),s("code",[e._v("dependency")]),e._v("同级的目录，其余"),s("code",[e._v("version")]),e._v("的"),s("code",[e._v("module")]),e._v("则会和"),s("code",[e._v("npm2")]),e._v("一样嵌套的安装在依赖下方。")]),e._v(" "),s("p",[e._v("如，假设存在依赖:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("+ package-a\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@4.0.0"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n+ package-b\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@4.0.0"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n+ package-c\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@3.0.0"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n+ package-d\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("lodash@3.0.0"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("答：package-d 只能从自身的 "),s("code",[e._v("node_modules")]),e._v(" 下寻找 "),s("code",[e._v("lodash@3.0.0")]),e._v("，而无法从 "),s("code",[e._v("package-c")]),e._v(" 下寻找，此时 "),s("strong",[e._v("lodash@3.0.0 不可避免地会被安装两次")])]),e._v(" "),s("p",[s("code",[e._v("node_modules")]),e._v(" 目录结构如下图:")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20220217210312826.png"}}),e._v(" "),s("h2",{attrs:{id:"_4-pnpm的依赖结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-pnpm的依赖结构"}},[e._v("#")]),e._v(" 4."),s("code",[e._v("pnpm")]),e._v("的依赖结构")]),e._v(" "),s("p",[e._v("那么不可避免地在 npm 或者 yarn 中，"),s("code",[e._v("lodash@3.0.0")]),e._v(" 会被多次安装，无疑造成了空间的浪费与诸多问题。")]),e._v(" "),s("p",[e._v("这是一个较为常见的场景，在平时项目中有些库相同版本甚至会安装七八次，如 "),s("code",[e._v("postcss")]),e._v("、"),s("code",[e._v("ansi-styles")]),e._v("、"),s("code",[e._v("ansi-regex")]),e._v("、"),s("code",[e._v("braces")]),e._v(" 等。")]),e._v(" "),s("p",[e._v("而在 "),s("code",[e._v("pnpm")]),e._v(" 中，它改变了 "),s("code",[e._v("npm/yarn")]),e._v(" 的目录结构，采用"),s("code",[e._v("软链接")]),e._v("+"),s("code",[e._v("硬链接")]),e._v("的方式，避免了 "),s("code",[e._v("doppelgangers")]),e._v(" 问题，更加节省空间。")]),e._v(" "),s("p",[e._v("假设在"),s("code",[e._v("package.json")]),e._v("中存在以下依赖：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("+ bar@1.0.0\n+ bar\n  + "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("foo@1.0.0"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#(且foo之前已经被别的依赖在同级安装过了)")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("pnpm")]),e._v("的目录拓扑结构如下所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20220217211025030.png",alt:""}})]),e._v(" "),s("p",[s("code",[e._v("pnpm")]),e._v("在安装"),s("code",[e._v("bar")]),e._v("依赖时，会在"),s("code",[e._v("node_modules")]),e._v("目录下会生成两个文件：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 1. node.js正常寻找的目录")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- node_modules/bar  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 全部存放着软链接")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 2. modulde真正存放的位置")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- node_modules/.pnpm/bar@1.0.0/node_modules/A  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 硬链接")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("从图中可以发现，当 "),s("code",[e._v("foo")]),e._v(" 遇到其余同名其他 "),s("code",[e._v("version")]),e._v(" 的依赖时，会把多个"),s("code",[e._v("version")]),e._v(" 版本的"),s("code",[e._v("module")]),e._v("安装在"),s("code",[e._v(".pnpm")]),e._v("这一层级上，并以"),s("code",[e._v("hardlink")]),e._v("的方式与真实硬件存放的"),s("code",[e._v(".pnpm store")]),e._v("链接在一起，如图中的"),s("code",[e._v("foo@1.0.0")]),e._v("、"),s("code",[e._v("foo@2.0.0")]),e._v("。")]),e._v(" "),s("p",[e._v("当发现重复的依赖时，如"),s("code",[e._v("foo@1.0.0")]),e._v("，则会以软链接的方式与第一层的"),s("code",[e._v("foo@1.0.0")]),e._v("链接起来。")]),e._v(" "),s("blockquote",[s("p",[e._v("此时，会有同学存在一个问题，为啥嵌套的依赖不以"),s("code",[e._v("hardlink")]),e._v("方式与"),s("code",[e._v(".pnpm store")]),e._v("链接起来呢？")]),e._v(" "),s("p",[e._v("这部分我也不是很清楚，详见：https://pnpm.io/blog/2020/05/27/flat-n"),s("a",{attrs:{href:"https://blog.csdn.net/guyue35/article/details/49761347",target:"_blank",rel:"noopener noreferrer"}},[e._v("ode-modules"),s("OutboundLink")],1),s("a",{attrs:{href:"https://pnpm.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way",target:"_blank",rel:"noopener noreferrer"}},[e._v("-is-not-the-only-way"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/shfshanyue/Daily-Question/issues/746",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Q720】请描述 node_modules 的目录结构(拓扑结构) #746"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/guyue35/article/details/49761347",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Q725】pnpm 有什么优势"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://rushjs.io/pages/advanced/npm_doppelgangers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM doppelgangers"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=_.exports}}]);