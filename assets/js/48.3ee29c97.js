(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{382:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("进程的进程空间（也称为地址空间）是一个独立的虚拟内存区域，进程在其中运行并存储数据。每个进程的进程空间是独立的，不与其他进程共享。进程空间通常分为以下几个主要部分：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("代码段（Text Segment）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("包含程序的可执行代码。")]),s._v(" "),t("li",[s._v("是只读的，防止代码被意外修改。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("数据段（Data Segment）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("包含已初始化的全局变量和静态变量。")]),s._v(" "),t("li",[s._v("在进程生命周期中可以被修改。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("BSS段（Block Started by Symbol Segment）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("包含未初始化的全局变量和静态变量。")]),s._v(" "),t("li",[s._v("系统在进程启动时将其初始化为零。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("堆（Heap）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("用于动态内存分配（如使用 "),t("code",[s._v("malloc")]),s._v("、"),t("code",[s._v("free")]),s._v(" 在 C 语言中）。")]),s._v(" "),t("li",[s._v("堆从低地址向高地址增长。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("栈（Stack）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("用于存储函数调用时的局部变量、返回地址等信息。")]),s._v(" "),t("li",[s._v("栈从高地址向低地址增长。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("共享库（Shared Libraries）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("包含进程所使用的共享库代码。")]),s._v(" "),t("li",[s._v("多个进程可以共享这些库，减少内存占用。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("内核空间（Kernel Space）")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("用户进程无法直接访问的内存区域。")]),s._v(" "),t("li",[s._v("包含操作系统内核和设备驱动程序代码。")])])])]),s._v(" "),t("p",[s._v("进程空间结构的一个常见示意图如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 内核空间 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Kernel Space"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   栈 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Stack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   堆 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Heap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   BSS 段 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BSS Segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   数据段 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Data Segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   代码段 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Text Segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n---------------------------\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("这种分段方法有助于操作系统管理内存，并确保进程之间相互隔离，提高系统的稳定性和安全性。")])])}),[],!1,null,null,null);t.default=e.exports}}]);