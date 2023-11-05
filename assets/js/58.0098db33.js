(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{463:function(_,v,t){"use strict";t.r(v);var e=t(19),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("参考地址："),t("a",{attrs:{href:"https://www.safekodo.com/wiki/content/68973962.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.safekodo.com/wiki/content/68973962.html"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"_0-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[_._v("#")]),_._v(" 0. 前言")]),_._v(" "),t("p",[t("strong",[_._v("需求")]),_._v("：想监听一个 json 文件的变化，需要知道其变更前后的数据差异。")]),_._v(" "),t("p",[t("strong",[_._v("思路")]),_._v("：使用"),t("code",[_._v("chokidar")]),_._v("监听 json 文件，在"),t("code",[_._v("add")]),_._v("和"),t("code",[_._v("change")]),_._v("事件回调中通过"),t("code",[_._v("require")]),_._v("或"),t("code",[_._v("fs.readFile")]),_._v("获取到文件数据。")]),_._v(" "),t("p",[t("strong",[_._v("问题")]),_._v("："),t("strong",[_._v("该 json 文件数据较大，存放的着几百万条文件的数据")]),_._v("，每条数据约 200 字节。总大小 1G 多。不知道能否通过 require 读取这么大的文件，读取效率相比 "),t("code",[_._v("fs.readFile")]),_._v(" 如何。")]),_._v(" "),t("h2",{attrs:{id:"_1-解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决方案"}},[_._v("#")]),_._v(" 1. 解决方案")]),_._v(" "),t("p",[_._v("尝试造数据模拟跑了 "),t("code",[_._v("10+")]),_._v("，得出下列对比数据，从统计数据上看有 2 个结论：")]),_._v(" "),t("p",[_._v("1、"),t("code",[_._v("require")]),_._v(" 读取 "),t("code",[_._v("JSON")]),_._v("  文件相当于 "),t("code",[_._v("fs.readFileSync + JSON.parse")]),_._v("，明显在这题里，"),t("code",[_._v("require")]),_._v(" 方案不用考虑")]),_._v(" "),t("p",[_._v("2、如果只是读取文本数据，"),t("code",[_._v("fs.readFile")]),_._v(" 要比 "),t("code",[_._v("fs.createReadStream")]),_._v(" 快得多，但是如果要转成数据的话，反而是 "),t("code",[_._v("fs.createReadStream")]),_._v(" 快的多且稳定，数据量越大越明显。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("700w 条数据，134M")]),_._v(" "),t("th",[_._v("fs.readFileSync")]),_._v(" "),t("th",[_._v("fs.readFile")]),_._v(" "),t("th",[_._v("fs.createReadStream")]),_._v(" "),t("th",[_._v("require + 删缓存")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("读取文本数据")]),_._v(" "),t("td",[_._v("294ms")]),_._v(" "),t("td",[_._v("294ms")]),_._v(" "),t("td",[_._v("1220ms")]),_._v(" "),t("td",[_._v("-")])]),_._v(" "),t("tr",[t("td",[_._v("读取 JSON 对象数据（文本再转对象）")]),_._v(" "),t("td",[_._v("27200ms")]),_._v(" "),t("td",[_._v("27200ms")]),_._v(" "),t("td",[_._v("16000ms")]),_._v(" "),t("td",[t("code",[_._v("27000")]),_._v(" ms")])])])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("1000w 条数据，495M")]),_._v(" "),t("th",[_._v("fs.readFile")]),_._v(" "),t("th",[_._v("fs.createReadStream")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("读取文本数据")]),_._v(" "),t("td",[_._v("422ms")]),_._v(" "),t("td",[_._v("1690ms")])]),_._v(" "),t("tr",[t("td",[_._v("读取 JSON 对象数据（文本再转对象）")]),_._v(" "),t("td",[_._v("47571ms")]),_._v(" "),t("td",[_._v("28016ms")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);