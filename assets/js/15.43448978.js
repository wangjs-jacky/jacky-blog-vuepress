(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{420:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_0-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[s._v("#")]),s._v(" 0.前言")]),s._v(" "),a("p",[s._v("在刚开始接触 "),a("code",[s._v("React")]),s._v(" 项目中，静态资源必须使用以 "),a("code",[s._v("import")]),s._v(" 的方式导入。")]),s._v(" "),a("p",[s._v("可是，在之前的静态网页开发过程中，我们只需要以 "),a("code",[s._v("相对路径")]),s._v("的方式引入静态资源：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("./assets/demo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是，当使用 "),a("code",[s._v("npm run dev")]),s._v(" 启动本地服务器，可以发现图片资源无法得到正确的引入，甚至还有可能报跨域错误。")]),s._v(" "),a("p",[s._v("其实，以上的问题主要是在 "),a("code",[s._v("React")]),s._v(" 框架中已经内置了"),a("code",[s._v("create-react-app(cra)")]),s._v(" ，在 "),a("code",[s._v("cra")]),s._v(" 中集成了通用性的"),a("code",[s._v("webpack")]),s._v(" 配置，这就是造成静态资源的导入失败的原因。")]),s._v(" "),a("h2",{attrs:{id:"_1-静态资源存放位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-静态资源存放位置"}},[s._v("#")]),s._v(" 1.静态资源存放位置")]),s._v(" "),a("p",[s._v("首先以 "),a("strong",[s._v("相对路径")]),s._v(" 的方式引入图片等静态资源到底读取的是什么资源？")]),s._v(" "),a("p",[s._v("一般图片等静态资源存放的位置有两处："),a("code",[s._v("public/assets")]),s._v("、"),a("code",[s._v("src/assets")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("两者的主要区别")]),s._v("：")]),s._v(" "),a("p",[s._v("两者的区别主要是在是否可以被 "),a("code",[s._v("webpack")]),s._v(" 所处理，"),a("code",[s._v("public")]),s._v("文件下的内容会被原封不动地 "),a("code",[s._v("copy")]),s._v(" 至 "),a("code",[s._v("dist")]),s._v(" 文件夹，而 "),a("code",[s._v("src")]),s._v(" 文件下的内容则会被 "),a("code",[s._v("webpack")]),s._v(" 处理，")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("常见的webpack处理有")]),s._v("：")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("js")]),s._v(" 文件或者 "),a("code",[s._v("css")]),s._v(" 会被压缩并捆绑在一起，以避免额外的网络请求。")])]),s._v(" "),a("li",[a("p",[s._v("缺少文件会导致编译错误，而不是用户的404错误。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("webpack")]),s._v(" 会对文件进行 "),a("code",[s._v("rename")]),s._v("，如原有路径 "),a("code",[s._v("'@/assets/img/banner.png'")]),s._v("，转换成了 "),a("code",[s._v("'/static/img/banner.[chunk].png'")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nmodule.exports = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".js' \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//其余占位符：Hash Chunkhash Contenthash")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("比如图片，如果你的图片小于你在"),a("code",[s._v("webpack")]),s._v("中的 "),a("code",[s._v("loader")]),s._v(" 下设置的 "),a("code",[s._v("limit")]),s._v(" 大小（可配置），它会被编译成"),a("code",[s._v("base64")]),s._v("写在行内，从而在实际项目中减少 "),a("code",[s._v("http")]),s._v(" 请求。")]),s._v(" "),a("blockquote",[a("p",[s._v("Ps: 但是随着HTTP协议不断发展，"),a("code",[s._v("HTTP1.1")]),s._v("中已经默认开启了 "),a("code",[s._v("Keep-alive")]),s._v("长连接，"),a("code",[s._v("HTTP2.0")]),s._v(" 又具有多路复用的特性，目前已经不是很有必要再做这种操作了。")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 url-loader 设置图片的大小")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" /.(jpg|png|gif)$/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("'\n      limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])])])]),s._v(" "),a("h2",{attrs:{id:"_2-图片加载方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-图片加载方案"}},[s._v("#")]),s._v(" 2.图片加载方案")]),s._v(" "),a("h3",{attrs:{id:"_2-1-若文件存在public文件下-可以直接使用相对路径读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-若文件存在public文件下-可以直接使用相对路径读取"}},[s._v("#")]),s._v(" 2.1 若文件存在"),a("code",[s._v("public")]),s._v("文件下，可以直接使用相对路径读取")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("./assets/demo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" // 读取 public/assets/demo.png\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其原理是："),a("code",[s._v("public")]),s._v("下的文件会被原封不动地拷贝到"),a("code",[s._v("build")]),s._v("下，而"),a("code",[s._v("src")]),s._v("下的文件则被压缩至"),a("code",[s._v("build/static")]),s._v("，且会被rename，所以不能使用相对路径的方式导入src下的文件。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-若图片存在src下-将图片等静态资源当做模块加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-若图片存在src下-将图片等静态资源当做模块加载"}},[s._v("#")]),s._v(" 2.2 若图片存在"),a("code",[s._v("src")]),s._v("下，将图片等静态资源当做模块加载")]),s._v(" "),a("p",[s._v("常用的两种模块化方式 "),a("code",[s._v("require")]),s._v("（CMD语法）和 "),a("code",[s._v("import")]),s._v("（ES6语法）")]),s._v(" "),a("blockquote",[a("p",[s._v("关于"),a("code",[s._v("CMD")]),s._v("、"),a("code",[s._v("ES6")]),s._v("、"),a("code",[s._v("CommonJS")]),s._v("、"),a("code",[s._v("AMD")]),s._v("的请见：https://juejin.cn/post/6844903576309858318")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("// import 引入静态资源\nimport png from './assets/demo.png' // 该文件在src下\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),s._v("{png}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('\n\n// require \n<img src={require("./assets/demo.png").default} alt="" >'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看")]),s._v(" "),a("p",[a("strong",[s._v("额外补充的知识点：")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("impot")]),s._v(" 有两种使用方式："),a("strong",[s._v("1.作为函数 2.关键字")])]),s._v(" "),a("p",[s._v("比较常见的是作为关键字，但是仍有几个需要注意的点，以下是几个错误示例：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. import 作为关键字，必须作用在顶部作用域")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tryImport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" flag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./example.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2. import 的变量是只读属性，无法再修改，类似加了const")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./example.js"')]),s._v("\nnum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("import的第二种用法是作为函数，其返回的是"),a("strong",[s._v("Promise对象")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./assets/demo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出：Module {default:'/static/media/demo.0a407da5.png',}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("从上可以看出，原本的 "),a("code",[s._v("src")]),s._v(" 目录下的 "),a("code",[s._v("assets/demo.png")]),s._v("  被拷贝到 "),a("code",[s._v("public/static/media")]),s._v(" 下，且图片的名称以 "),a("code",[s._v("[name].[hash].png")]),s._v(" 的方式被 "),a("code",[s._v("rename")]),s._v("。")]),s._v(" "),a("p",[s._v("此外，在打印的时候仍需注意的：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<<<'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./assets/aaa.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("打印次序为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<<< Promise {<pending>}\n123\nModule {default:'/static/media/demo.0a407da5.png',}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("⭐️ "),a("code",[s._v("import")]),s._v(" 关键字被设计为"),a("strong",[s._v("静态")]),s._v("的，"),a("strong",[s._v("以便让诸如文本编辑器之类的工具能轻易判断模块有哪些信息可 用")]),s._v("。--《深入理解ES6》")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-3-当使用-require-动态引入图片-会导致cannot-find-module的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-当使用-require-动态引入图片-会导致cannot-find-module的问题"}},[s._v("#")]),s._v(" 2.3 当使用 "),a("code",[s._v("require")]),s._v(" 动态引入图片，会导致"),a("code",[s._v("cannot find module")]),s._v("的问题")]),s._v(" "),a("p",[s._v("现在要实现的一个大的集合中遍历去加载每一项的图片，因此我将数据存放在一个json文件中，"),a("code",[s._v("data.json")]),s._v("的内容如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"imagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/assets/demo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"imagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/assets/demo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"imagePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/assets/demo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("若仍用 "),a("code",[s._v("require")]),s._v(" 的方式读入：")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" picJson "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./data.json'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("picJson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("则会提示："),a("code",[s._v('can\'t find moudle "@/assets/demo.png"')]),s._v("，但"),a("code",[s._v('require("@/assets/demo.png")')]),s._v("是能够正常导入的。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("▶️ "),a("strong",[s._v("原因是")]),s._v("："),a("code",[s._v("require")]),s._v(" 是在 "),a("code",[s._v("动态运行")]),s._v(" 时引入资源的，且加载的是"),a("strong",[s._v("webpack预编译后的文件路径")]),s._v("；当 "),a("code",[s._v("require")]),s._v(" 使用"),a("strong",[s._v("变量")]),s._v("来引入图片时，React 在渲染时实际传给require 的是"),a("code",[s._v("'@/assets/demo.png'")]),s._v("。因此在打包结果中，根本就找不到这个图片的模块。可以用下面两个方式对其进行改进：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("使用模板字符串的方式引入")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("picJson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagePath"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("技巧：加上一个空字符串")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("picJson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-4-使用-public-url-拼接为绝对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-使用-public-url-拼接为绝对路径"}},[s._v("#")]),s._v(" 2.4 使用 "),a("code",[s._v("%PUBLIC_URL%")]),s._v(" 拼接为绝对路径")]),s._v(" "),a("p",[s._v("这个方法有些看不懂，暂时只记录看的懂得部分：https://juejin.cn/post/6892950616977948680")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("html：")]),s._v(" "),a("p",[s._v("⭐️在"),a("code",[s._v("public")]),s._v("目录中有个"),a("code",[s._v("index.html")]),s._v("是单页面应用的基本模板，所有react生成的代码都会注入到此HTML中。所以此处可以添加一些cdn脚本或者全局的html。")]),s._v(" "),a("p",[s._v("在公共目录下，你可以放字体文件、图片、svg等文件，访问这些文件最好添加 "),a("code",[s._v("%PUBLIC_URL%")]),s._v("作为根目录。 "),a("code",[s._v('<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">')])])]),s._v(" "),a("li",[a("p",[s._v("Javascript:")]),s._v(" "),a("p",[a("code",[s._v("process.env.PUBLIC_URL")])])])]),s._v(" "),a("h2",{attrs:{id:"本篇blog仍未解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本篇blog仍未解决的问题"}},[s._v("#")]),s._v(" 本篇blog仍未解决的问题：")]),s._v(" "),a("ol",[a("li",[s._v("需要再复习一下webpack的配置")]),s._v(" "),a("li",[a("code",[s._v("npm run serve")]),s._v("和"),a("code",[s._v("build")]),s._v("以后再启动live-server的区别？与"),a("code",[s._v("file://")]),s._v("的方式打开html？有什么区别？")]),s._v(" "),a("li",[s._v("在测试的过程中，"),a("code",[s._v("import")]),s._v(" 和 "),a("code",[s._v("require")]),s._v(" 编译后的"),a("code",[s._v("html")]),s._v("为啥有区别？")])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料：")]),s._v(" "),a("ol",[a("li",[s._v("require 动态引入图片，导致"),a("code",[s._v("cannot find module")]),s._v("见：https://juejin.cn/post/6892950616977948680")]),s._v(" "),a("li",[s._v("public文件夹的使用见：https://juejin.cn/post/6892950616977948680")]),s._v(" "),a("li",[s._v("Vue如何动态加载本地图片：https://www.cnblogs.com/lvonve/p/15044160.html")])]),s._v(" "),a("h2",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[s._v("#")]),s._v(" 扩展阅读：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("webpack学习笔记--按需加载：https://www.cnblogs.com/joyco773/p/9051401.html")])]),s._v(" "),a("li",[a("p",[s._v("按需加载2：https://www.cnblogs.com/mamimi/p/7646358.html")])]),s._v(" "),a("li",[a("p",[s._v("webpack打包的多页模式(本身就是懒加载?)与单页模式，见：https://www.cnblogs.com/nangezi/p/9201226.html")]),s._v(" "),a("p",[s._v("任务：看完要能说出多页模式和单页模式的优缺点？")])]),s._v(" "),a("li",[a("p",[s._v("react-scripts流程及源码分析，见：https://juejin.cn/post/6844903951893004296")]),s._v(" "),a("p",[s._v("这篇文章实在是太难理解了，需要预先学习好多知识点，图做的超级棒👍🏻。")])]),s._v(" "),a("li",[a("p",[s._v("阮一峰写的ES6的module模块引入：https://es6.ruanyifeng.com/#docs/module-loader")])]),s._v(" "),a("li",[a("p",[s._v("掘金中总结的很好的模块化文章：https://juejin.cn/post/6844903576309858318\n5和6待总结成一篇文章")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);