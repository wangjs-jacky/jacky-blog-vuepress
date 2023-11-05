(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{597:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),s("p",[t._v("vue create时默认属性为 "),s("code",[t._v("default(babel,eslint)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("babel : 将ES6转化为ES5")])]),t._v(" "),s("li",[s("p",[t._v("eslint：代码规范校验")])]),t._v(" "),s("li",[s("p",[t._v("CSS 预处理器选择：Less ， sass")])]),t._v(" "),s("li",[s("p",[t._v("Linter/formatter ：")]),t._v(" "),s("ul",[s("li",[t._v("约束代码格式（后续还需要选择 Eslint + standard config）代码归法有很多，这里普遍使用standard config ，其余还可以选择 airbnb config / Prettier")]),t._v(" "),s("li",[t._v("Lint on save：保存时：校验带啊吗")]),t._v(" "),s("li",[t._v("Lint and fix on commit：保存时，自动格式化（美化）代码")])])]),t._v(" "),s("li",[s("p",[t._v("配置信息保存（Babel，ESlint文件保存地址）")]),t._v(" "),s("ul",[s("li",[t._v("in dedicated config files")]),t._v(" "),s("li",[t._v("in package.json")])])]),t._v(" "),s("li",[s("p",[t._v("history mode ：不是很好用router")])])]),t._v(" "),s("h3",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("views： 放路由视图组件")]),t._v(" "),s("p",[t._v("component：（多个页面中可能重复使用的组件）公用的组件")]),t._v(" "),s("p",[t._v("router：")]),t._v(" "),s("h3",{attrs:{id:"git-push问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-push问题"}},[t._v("#")]),t._v(" git push问题")]),t._v(" "),s("p",[t._v("error: src refspec master does not match any")]),t._v(" "),s("p",[s("strong",[t._v("原因分析")]),t._v("：目录中没有文件，空目录时不能提交上传的")]),t._v(" "),s("p",[s("strong",[t._v("解决方法")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "# toutiao-publish-admin" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"第一次git步骤解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一次git步骤解析"}},[t._v("#")]),t._v(" 第一次git步骤解析")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push --set-upstream origin main\n// --set-upstream 的简写为 -u,含义是:记录后面两个参数，不然以后push每次必须重复说明后面两个参数，下次可以直接输入 git push 即可\n// origin相当于存入仓库地址的字符串， \n// main是main:main的简写,本地的main分支传入远程仓库的main分支\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"格式化代码的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化代码的问题"}},[t._v("#")]),t._v(" 格式化代码的问题")]),t._v(" "),s("p",[t._v("我的vscode管理代码化用的是："),s("code",[t._v("JS-CSS-HTML Formatter")])]),t._v(" "),s("p",[t._v("配置："),s("code",[t._v("ctrl + shift + p")]),t._v(" 输入 "),s("code",[t._v("formatter config")])]),t._v(" "),s("p",[t._v("修改config如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"javascript": {\n        "indent_size": 2,\n        "end_with_newline": true\n }\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("blockquote",[s("p",[t._v("以上插件太简陋了，所以该插件弃了")])]),t._v(" "),s("p",[t._v("Vscode自动化保存时修改格式写的比较号的是：")]),t._v(" "),s("p",[t._v("https://www.cnblogs.com/itshare/archive/2019/06/15/11028299.html")]),t._v(" "),s("p",[t._v("其中遇到的问题：2020年vscode更新后，一些配置文件也失效了，解决失效问题：")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/weixin_41229588/article/details/105368793?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control")]),t._v(" "),s("p",[t._v("有一篇给出了统一化的解决方案：")]),t._v(" "),s("p",[t._v("https://www.jb51.net/article/135191.htm")]),t._v(" "),s("h3",{attrs:{id:"提问模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提问模板"}},[t._v("#")]),t._v(" 提问模板")]),t._v(" "),s("ul",[s("li",[t._v("该问题是怎么引起的")]),t._v(" "),s("li",[t._v("重现步骤")]),t._v(" "),s("li",[t._v("报错信息")])]),t._v(" "),s("h3",{attrs:{id:"将axios封装起来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将axios封装起来"}},[t._v("#")]),t._v(" 将axios封装起来")]),t._v(" "),s("p",[t._v("原因：程序中会大量使用对数据的请求")]),t._v(" "),s("p",[t._v("axios.create()可以创建一个实例，创建实例后，需要将该实例给暴露出去，以便外部调用。")]),t._v(" "),s("h3",{attrs:{id:"webstorm-相关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webstorm-相关配置"}},[t._v("#")]),t._v(" webstorm 相关配置")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("保存时，自动格式化代码")]),t._v(" "),s("p",[t._v("settings - languages & Frameworks - javascript - code Quality tools - ESlint")]),t._v(" "),s("p",[t._v("勾选：Run eslint -- fix save")])]),t._v(" "),s("li",[s("p",[t._v("创建vue模板，在new file时，可以选择创建vue文件")])])]),t._v(" "),s("h3",{attrs:{id:"vue插件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue插件的使用"}},[t._v("#")]),t._v(" vue插件的使用")]),t._v(" "),s("p",[t._v("可以直接通过component的name快速找到组件")]),t._v(" "),s("h3",{attrs:{id:"css复习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css复习"}},[t._v("#")]),t._v(" css复习")]),t._v(" "),s("p",[t._v("background的设置，url no-repeat background-size的集中设置方式(contain cover)")]),t._v(" "),s("p",[t._v("如何撑满整个页面：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("// 父属性设置\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"组件设置name的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件设置name的意义"}},[t._v("#")]),t._v(" 组件设置name的意义")]),t._v(" "),s("h3",{attrs:{id:"路由中设置name的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由中设置name的意义"}},[t._v("#")]),t._v(" 路由中设置name的意义")]),t._v(" "),s("p",[t._v("更加美观规范，注意复习：命名路由")]),t._v(" "),s("p",[t._v("this.$router 于 this.$route的区别")]),t._v(" "),s("p",[t._v("这部分写的超级详细的博文：https://blog.csdn.net/u014395524/article/details/88194842")]),t._v(" "),s("h3",{attrs:{id:"阿里的iconfont"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里的iconfont"}},[t._v("#")]),t._v(" 阿里的iconfont")]),t._v(" "),s("p",[t._v("可以创建项目，对素材进行管理，并且可以对图标的一些大小位置进行调整")]),t._v(" "),s("p",[t._v("图标的引用：不用下载下来，font-class模式，添加图标入库：https://blog.csdn.net/ame1314/article/details/97120606")]),t._v(" "),s("p",[t._v("如过库中的图标发生了改动，必须重新生成css链接地址")]),t._v(" "),s("h3",{attrs:{id:"控制页面的访问权限-设置token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制页面的访问权限-设置token"}},[t._v("#")]),t._v(" 控制页面的访问权限：设置token")]),t._v(" "),s("p",[t._v("window.localstorage.setitem() 本地只能存子符串，而其余格式的内容必须转化为json子符串，使用时转换为原格式。")]),t._v(" "),s("p",[t._v("obj.toString() JSON.parse()转换为原格式")]),t._v(" "),s("p",[t._v("ES6拼接子符串： "),s("code",[t._v("Bear $(user.tokenddddddddddddddddddddddd)")])]),t._v(" "),s("h3",{attrs:{id:"axios-有拦截器统一设置token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axios-有拦截器统一设置token"}},[t._v("#")]),t._v(" axios 有拦截器统一设置token")]),t._v(" "),s("p",[t._v("axios的官方文档：直接在github库上")]),t._v(" "),s("p",[s("code",[t._v("request.interceptors.request.use{}")])]),t._v(" "),s("p",[t._v("拦截器必须"),s("code",[t._v("return 结果")])]),t._v(" "),s("p",[t._v("在return 的前面可以定制化一些，这里可以加上浏览器中的"),s("code",[t._v("token")])]),t._v(" "),s("h3",{attrs:{id:"侧边栏的收缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏的收缩"}},[t._v("#")]),t._v(" 侧边栏的收缩")]),t._v(" "),s("p",[t._v("技巧： "),s("code",[t._v("变量 != 变量")])]),t._v(" "),s("p",[t._v("技巧2： 样式也可以绑定 "),s("code",[t._v(":calss = “{css类名: 布尔值}”")])]),t._v(" "),s("p",[t._v("props传递对象的时候：命名"),s("code",[t._v("is-collaps")])]),t._v(" "),s("h3",{attrs:{id:"路由拦截器-导航守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截器-导航守卫"}},[t._v("#")]),t._v(" 路由拦截器|导航守卫")]),t._v(" "),s("p",[t._v("应用场景：login 到 指定页面，")]),t._v(" "),s("blockquote",[s("p",[t._v("如：主页的访问必须先通过登录页面，再登录到使用页面")])]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("router.beforeEach(to,from,next)")])]),t._v(" "),s("h3",{attrs:{id:"native修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native修饰符"}},[t._v("#")]),t._v(" native修饰符")]),t._v(" "),s("p",[t._v("组件默认是不识别原生的时间的，除非内部做了处理")]),t._v(" "),s("p",[t._v('@click.native = "onLogout"')]),t._v(" "),s("h3",{attrs:{id:"import-的引入问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-的引入问题"}},[t._v("#")]),t._v(" import 的引入问题")]),t._v(" "),s("p",[t._v("建议默认写index.vue ，引入的时候可以写到文件，而非文件")]),t._v(" "),s("h3",{attrs:{id:"element-ui-熟悉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-熟悉"}},[t._v("#")]),t._v(" element ui 熟悉")]),t._v(" "),s("p",[t._v("卡片 作为外包")]),t._v(" "),s("ul",[s("li",[t._v("面包靴作为导航")]),t._v(" "),s("li",[t._v("数据表单")])]),t._v(" "),s("p",[t._v("slot-scope = scope")]),t._v(" "),s("h3",{attrs:{id:"es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),s("p",[t._v("若 属性名 和 赋值变量的名称相同，可以直接缩写")]),t._v(" "),s("h3",{attrs:{id:"图片加载问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片加载问题"}},[t._v("#")]),t._v(" 图片加载问题")]),t._v(" "),s("p",[t._v("如果图片需要再运行期间动态改变处理的，而本地图片属于静态资源，必须打包的时候就存在")]),t._v(" "),s("blockquote",[s("p",[t._v("也就是说，本地资源必须要先渲染再页面上？")])]),t._v(" "),s("p",[t._v("数据加载时，后端可以设置page ，和per age的数量【接口设置】")]),t._v(" "),s("p",[t._v("参数的默认值写法 "),s("code",[t._v("page = 1")])]),t._v(" "),s("h3",{attrs:{id:"变量赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量赋值"}},[t._v("#")]),t._v(" 变量赋值")]),t._v(" "),s("p",[t._v("使用解构语法："),s("code",[t._v("const {results, total_count} = res.data.data")])]),t._v(" "),s("p",[t._v("但是vue中强制使用驼峰命名法，所以做重命名修改：")]),t._v(" "),s("p",[s("code",[t._v("const {results, total_count：totalCount} = res.data.data")])]),t._v(" "),s("h3",{attrs:{id:"模板语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板语法"}},[t._v("#")]),t._v(" 模板语法")]),t._v(" "),s("p",[t._v("将label 和 文本分开处理")]),t._v(" "),s("p",[s("code",[t._v(':label="0"')])])])}),[],!1,null,null,null);a.default=r.exports}}]);