(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{451:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_0-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[t._v("#")]),t._v(" 0.前言")]),t._v(" "),a("p",[t._v("去年（"),a("code",[t._v("2022")]),t._v("） 年，已写了篇博客"),a("RouterLink",{attrs:{to:"/pages/bd23ca/"}},[t._v("《浏览器页面渲染机制》")]),t._v(" 对浏览器的机制进行了梳理，发现对其中的一些概念还存在模糊的理解。故，本篇文章进一步从浏览器的渲染流程入手，分析页面渲染机制。")],1),t._v(" "),a("h2",{attrs:{id:"_1-简述浏览器的渲染流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述浏览器的渲染流程"}},[t._v("#")]),t._v(" 1. 简述浏览器的渲染流程")]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[t._v("                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("  下载 css 文件 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n                                         ↑            ↓\n预解析线程： 解析到如 "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" 标签后   →  启用网络线程  →  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSSOM")]),t._v("\n              ↑   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n（渲染主进程"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ↓\n渲染主线程"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("parse HTML")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" → "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("recaculate style")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" → "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("layout")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" → "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("composite")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" → "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("paint")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\n合成线程：  →  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Tiling")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("     "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Tiles")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("  → "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Raster")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("      位图  →  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n                ↓            ↑           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          ↑         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("线程池）分块线程"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、分块线程"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、分块线程"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n                                         ↓          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         ↓\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GPU")]),t._v(" 进程：                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GPU")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("进程")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("光栅化"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v("   矩阵运算\n                                                              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n                                                              ↓\n                                                        （安全）调用 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GPU")]),t._v(" 硬件\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"_2-细节解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-细节解析"}},[t._v("#")]),t._v(" 2. 细节解析")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("parse HTML")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("其中涉及到 "),a("code",[t._v("JS")]),t._v(" 阻塞 "),a("code",[t._v("DOM")]),t._v(" 解析线程，推荐使用 "),a("code",[t._v("defer")]),t._v(" 字段。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("css")]),t._v(" 的四种方案。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("<style>")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<link ....>")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v('<div style ="">')]),t._v(" 内联")])]),t._v(" "),a("li",[a("p",[t._v("浏览器默认样式表")]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("styleSheets → StyleSheetList\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("styleSheets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border:2px solid #f40 !important'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("扩展：现代浏览器的额外优化，使用预解析器，预先下载可点击链接的内容（预解析线程）")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("recaculate style")])]),t._v(" "),a("ul",[a("li",[t._v("此阶段将 "),a("code",[t._v("DOM")]),t._v(" 树 + "),a("code",[t._v("CSSOM")]),t._v(" 树 合并。")]),t._v(" "),a("li",[t._v("可通过 "),a("code",[t._v("document.getComputedStyle")]),t._v(" 或 "),a("code",[t._v("computed")]),t._v(" 面板获取该计算的值。")]),t._v(" "),a("li",[t._v("此阶段的作用\n"),a("ul",[a("li",[t._v("相对单位 "),a("code",[t._v("em")]),t._v(" → 绝对单位 "),a("code",[t._v("px")])]),t._v(" "),a("li",[t._v("预设值 "),a("code",[t._v("red")]),t._v(" → 绝对值"),a("code",[t._v("rgba(255,0,0,0)")])])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("laylout")]),t._v(" 计算（几何信息）")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("C++")]),t._v(" 对象。")]),t._v(" "),a("li",[t._v("哪写属性会影响几何信息的计算？\n"),a("ul",[a("li",[a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("li",[a("code",[t._v("font-size")])]),t._v(" "),a("li",[t._v("计算 "),a("strong",[t._v("相对定位")]),t._v("，其中相对的是包含块？")])])]),t._v(" "),a("li",[a("code",[t._v("DOM")]),t._v(" 树和 "),a("code",[t._v("Layout")]),t._v(" 树的区别？\n"),a("ul",[a("li",[t._v("会少：\n"),a("ul",[a("li",[a("code",[t._v("Layout")]),t._v(" 只会对 "),a("code",[t._v("DOM")]),t._v(" 树的可见部分进行生成。")]),t._v(" "),a("li",[t._v("如，此时会根据 "),a("code",[t._v("CSS")]),t._v(" 选择器，找到 "),a("code",[t._v("display: none")])])])]),t._v(" "),a("li",[t._v("会多：\n"),a("ul",[a("li",[t._v("伪元素 "),a("code",[t._v(":before")]),t._v(" 或者 "),a("code",[t._v(":after")])]),t._v(" "),a("li",[t._v("新增 "),a("strong",[t._v("匿名行盒")]),t._v(" 和 "),a("strong",[t._v("匿名块盒")]),t._v("，满足以下规则：\n"),a("ol",[a("li",[t._v("文本等内容必须在 "),a("strong",[t._v("匿名行盒")]),t._v(" 中。")]),t._v(" "),a("li",[t._v("行盒和块盒是不能相邻的，所以会新增 "),a("strong",[t._v("匿名快盒")]),t._v("。")])])])])])])]),t._v(" "),a("li",[t._v("是否可以使用通过 "),a("code",[t._v("js")]),t._v(" 访问 "),a("code",[t._v("Layout")]),t._v(" 树？【重绘操作】\n"),a("ul",[a("li",[t._v("不可以，因为该树为 "),a("code",[t._v("C++")]),t._v(" 对象，可通过 "),a("code",[t._v("document.body.clientWidth/offset")]),t._v(" 读取内置暴露出的 "),a("strong",[t._v("布局信息")]),t._v(" 。")]),t._v(" "),a("li",[t._v("注意的点是："),a("code",[t._v("js")]),t._v(" 对 "),a("code",[t._v("dom")]),t._v(" 操作行为的表现是不同的，设置是 "),a("strong",[t._v("异步操作")]),t._v("，而读取行为属于 "),a("strong",[t._v("同步")]),t._v(" 操作，读取行为会立即触发 "),a("strong",[t._v("重绘")]),t._v(" 操作。\n"),a("ul",[a("li",[t._v("设置："),a("code",[t._v("dom.style.width = ?")]),t._v(" ，这里异步的原因是可以多个设置行为合并为一次批处理行为，减少浏览器的渲染消耗。")]),t._v(" "),a("li",[t._v("读取："),a("code",[t._v("document.body.clientWidth")]),t._v(" ，立即触发重绘。")])])])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("composite")]),t._v(" 分层")]),t._v(" "),a("ul",[a("li",[t._v("该行为由浏览器自动分配。")]),t._v(" "),a("li",[t._v("与分层属性有关：\n"),a("ul",[a("li",[t._v("如："),a("code",[t._v("z-index")]),t._v(" 属性。")]),t._v(" "),a("li",[t._v("其中 "),a("code",[t._v("will-change")]),t._v(" 会极大影响分层结果。")])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("paint")]),t._v(" 绘制指令")]),t._v(" "),a("ul",[a("li",[t._v("渲染主线程会为每个 "),a("strong",[t._v("图层")]),t._v(" 生成绘制指令集，用于描述这一层的内容该如何画出来。")]),t._v(" "),a("li",[t._v("完成绘制后，主线程结束，会将每个图层的绘制信息提交给合成线程，剩余工作将由 "),a("strong",[t._v("合成线程")]),t._v(" 完成。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Tiling")]),t._v(" 分块")]),t._v(" "),a("ul",[a("li",[t._v("将每一层分为多个小的区域，内部会触发分块线程，会从多个 "),a("strong",[t._v("线程池")]),t._v(" 中拿取多个线程来完成工作。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Raster")]),t._v(" 光栅化（会调用 GPU 进程）计算出位图。")]),t._v(" "),a("ul",[a("li",[t._v("作用：将 "),a("strong",[t._v("块")]),t._v(" 转 化为 "),a("strong",[t._v("位图")]),t._v("。")]),t._v(" "),a("li",[t._v("采用 "),a("code",[t._v("GPU")]),t._v(" 可以加快光栅化的速度。")]),t._v(" "),a("li",[t._v("优先处理靠近视口位置的快，并将后续结果会交给 "),a("code",[t._v("合成线程")]),t._v("。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Draw")]),t._v(" 生成 "),a("strong",[t._v("像素信息")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("会生成 "),a("code",[t._v("quad")]),t._v(" (指引信息)")])]),t._v(" "),a("li",[a("p",[t._v("（此阶段会执行 "),a("code",[t._v("transform")]),t._v(" 等旋转或者缩放的变变形，即进行矩阵运算。）")])]),t._v(" "),a("li",[a("p",[t._v("这里会有一个特点，需要先交给 "),a("code",[t._v("GPU")]),t._v(" 进程，再由 "),a("code",[t._v("GPU")]),t._v(" 进程交给 "),a("code",[t._v("GPU")]),t._v(" 硬件进行计算。")]),t._v(" "),a("blockquote",[a("p",[t._v("原因：整个渲染进程是在 沙盒 中执行的，不会影响操作系统，不会进行系统调用。")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-对应的面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-对应的面试题"}},[t._v("#")]),t._v(" 3. 对应的面试题")]),t._v(" "),a("ol",[a("li",[t._v("解释 "),a("code",[t._v("reflow")]),t._v(" 原理。")]),t._v(" "),a("li",[t._v("解释 "),a("code",[t._v("repaint")]),t._v(" 原理。")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_31512493/article/details/126739124",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解浏览器渲染原理及流程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ke.qq.com/course/5892689/13883868337269329",target:"_blank",rel:"noopener noreferrer"}},[t._v("渡一：袁进"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);