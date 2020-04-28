大喵教育前端培训
================

## 阶段性测试 2019.12.06

### 大喵教育版权所有，请勿泄漏
≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


01. 列出至少 7 个常用 Linux 命令及其基本使用方法
* cd
* cp
* vi
* ls
* mkdir
* touch
* reboot
02. 什么是 html 实体？常见 html 实体有哪些？
html实体是用于html语言中以用代替预留字符的字符。
&nbsp;  非合并空格
&lt;    <
&gt;    >
&amp;   &
&quot;  "
&apos;  '
&eq;    =
03. 计算机为什么使用二进制？
1和0 代表2中状态 消除误差
二进制足够使用
二进制对应于数学中的布尔逻辑
04. 什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？
Unicode 统一码,为全球所有已知字符编写每个对应的不重复编号。
U+16进制编号
目前最常用的万能编码解决方案UTF-8就是基于Unicode的
05. 什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？
GUI - Graphics User Interface，图形化界面/接口
CLI - Command Line Interface，命令行界面
windows 窗口界面 -gui
windows cmd程序 - cli
06. 在什么情况下 html 标签可以不需要闭合？
p标签后面紧跟着ul标签，则p标签不需要
自闭和标签不需要
07. 在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？
根据html标签分类等规则，在某些嵌套方式下，已经可以推导出该标签必须闭合，着不需要人为书写该闭合标签
浏览器可以推断出标签的结束位置

08. 什么是费茨定律？它有哪些应用？
09. 为什么英文很重要？
10. 将二进制 `10010` 数转换为十进制数
11. 将十六进制数 `ABCDEF` 转换为十进制数
15 + 14 * 16 +
12. 将十进制数 `435` 分别转换成二进制数和十六进制数
13. 列出 HTML 中常见的全局属性
id
class
title
tabindex
style
lang
dir
14. 什么是操作系统的路径（Path）？它的作用及应用场景是？
指操作系统中的一个有序文件夹列表
当用户在命令行或者windows的运行窗口中输入命令时，会按序在路径列表中查找相应放入可知晓程序来执行
一个应用场景时皆有运行窗口快捷打开软件
15. 什么是文本文件？什么是二进制文件？它们最明显的区别是？
实际二者无本质区别都是硬盘上的文件
当一个文件时以文本编码的方式编码了几乎可以用键盘输入的字符时，我们会称其为文本文件
其他情况称为二进制文件
16. 为什么说 html 与数学公式有诸多相似之处？
他们都是树状结构
17. 几种常见图片格式有什么区别和特点？
jpg有损压损，以8*8为单位进行压损，适合保存渐变色的图片，即现实照片
png 无损压缩，支持最高256级透明，适合保存大片纯色 区域的图片 如软件的截图
gif 有损压缩，颜色表，动图
bmp 不压缩，直接保存原始数据，文件一般比较大 取决于图片的尺寸
webp 支持透明且哥方便由于jpg
18. `data-*` 属性一般是用来干嘛？
全局属性
用来放置自定义属性
不会因为标准改变，产生额外语义
19. 用什么方法扩大一个 checkbox 的可点击区域？
不能使用伪元素
用一个label 与该input关联
20. 什么是 MIME Type？
媒体类型，即比文件扩展名更精确
21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？
tragert
<base>
<a>
<form>
<area>

href
<a>
<base>
<link>
<meta>
22. 什么是 BOM 头？
指的是使用Unicode保存的文本文件的两个字节的文件头，用来表明编码字节序的
Byte Order Mark
23. group 类型的标签有哪些？
hgroup
colgroup
optrgoup
fieldset
24. 什么是 SEO？
searcg engine optimissm
搜索引擎优化
让页面在搜索结果中更靠前的手段
25. 分别列出每种常见浏览器的内核名称（自己查）。
webkit
blink
gekco
Trientend
26. 列表类标签有哪些？分别如何使用？需要注意些什么？
ul
ol
dl
28. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？

<script></script>
<noscript></noscript>

<iframe src="">
<p>浏览器不支持</p>
</iframe>
原因在于某些在正常使用时，内部是有内容的饿，所以fallback不能放在其内部，如script
某些变迁在正常使用时，是空的，相当于替换元素，则fallback是可以写在其内部，如iframe
29. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签
<head>
  <meta charset="utf-8" />
  <meta name="charset" connetnt="utf-8" />
  <link rel="favicon" href="xxx.ico" />
  <link rel="stylesheet" href="xxx.css" />
  </head>
30. 什么叫做可访问性，html 中为此做了什么工作？
可访问性 accessibility
分很多层面
1.指软件在不同设备商是否能够正常使用
2.指软件对于不同的人群是否能够正常使用
3.对于各种不同的输入设备能否使用

aria与role属性用来通过浏览器告诉读屏软件当前元素所代表的厂家交互元素如下拉框，选项卡，列表框
tabindex

表格th标签的id与tf标签的headers属性
31. 写出以下几个符号的 ascii 码：`a，A，0，CR，LF，空格，NBSP`。
 a 97
 A 58
 0 48
 CR 13
 LF 10
 space 32
 nbsp 160
32. 中英互翻
    * geek
    * nerd
    * hacker
    * edge
    * bleeding/cutting edge 前沿/尖端/可能存在风险的技术
    * HTML 实体
    * coordinate
    * polygon
    * bit
    * byte
    * alternative
    * 属性
    * obsolate
    已废弃的
    * 二进制
    binary
    * 十进制
    decimal
    * 十六进制
    hexdecimal
    * octal
    8进制
    * deprecate
    不推荐使用
    * loop
    * 行
    * 列
    * horizontal
    * 语义化
    * 可访问性


33. 用文字描述如下选择器将选择哪些（个）元素
  ```css
  div, h1 {}
  选中div和h1元素
  div[class] [id="abc"] {}
  选中含有clas属性里id为abc的元素
  div:hover ul li > div {}
  选中div被hover时里的ul里的li下的div子元素
  body :active {}
  body里的被激活的元素
  div:hover::after {}
  div被hover时元素的after伪元素
  ::selection {}
  匹配元素中被用户选中或处于高亮状态的部分
  :target {}
  当前页面的目标元素
  目标元素：id的值为地址栏中#后面内容的元素
  选中url地址中#以后的对应id字符的元素
  input + ul + p ~ span {}
  选中input下一个ul元素相邻的兄弟p元素中所有span 并且和p同级
  ```

34. 分别写出如下几个选择器的优先级
    ```css
    * * * {} 0，0，0
    div * span {}0,0,2
    div[title] {}0,1,1
    fieldset legend + input {}0,0,3
    #some #thing .not:hover .abc:hover {}2,4,0
    ```

35. `em,px,rem,vw,vh` 分别代表多长？
当前元素的字号大小，当用在font-szie上时 1em=1倍父元素font-size大小
1px=1个像素点大小
1rem=1倍根元素font-size大小
1vw = 可视窗口的宽度的百分之一
1vh = 可是窗口的高度的百分之一
36. 显示器的物理分辨率为 `1920x1080`，操作系统设置的分辨率为 `1280x720`，网页的放大倍数为 `110%`，请计算一个 CSS 像素对应多少个显示器物理像素（面积与长度）？
2像素
37. 写出如下代码显示在浏览器后**每个单词**的字号
    ```html
    <style>
      html {
        font-size: 20px;
      }
      section {
        font-size: 10rem;
      }
      p {
        font-size: 24px;
      }
      span {
        font-size: 150%;
      }
      .sucks {
        font-size: inherit;
      }
    </style>
    <body>20px
      <section>200px
        <h2>Brown</h2> 300px
        <p>quick</p> 24px
        <p>jumps <span>over <span>lazy</span> dog</span></p> 24px 36px 54x 36px
        <p class="sucks">sucks</p> 200px
      </section>
    </body>
    ```

38. 如何给css添加注释
<!-- 注释 -->
39. 指出如下css代码中的错误
    ```
    p,h1,{h1后逗号去掉

        background-color: rgba:(abc) //raba(r,g,b,a)
        <!-- 行尾少了; -->
        font-varient; abc;
        <!-- 属性后:写成;属性值不能为abc -->
        colr: #ff048;
        font: "serif" 25px; //顺序不对font: 25px serif;
    }
    ```

40. 写出如下结构中div元素的所有后代/祖先/子/父/兄弟元素
    ```html
    后代ul li a img
    祖先
    mian section
    子 ul
    父 main
    兄弟h2 aside
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    ```

41. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？
<iframe>
<video>
<embed>
<img>
<input>
区别
有内在宽高
一般没有后代元素

42. 让 CSS 在 HTML 页面上生效有哪些方法，分别写出来。
使用<link rel="stylesheet" href="./css/base.css"> 引入css文件
在<style></style>里直接写
在元素属性中写
使用@import ""导入

43. 如何让页面打印时应用不同的效果？
<link rel="stylesheet" href="./css/base.css" media=“print” />
44. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
    ```html
    <!-- index.html的内容 -->
    <style>
        @import "../a.css";//http://user.coding.me/a.css
    </style>
    ```
    ```css
    /* a.css的内容 */
    @import "b.css";//http://user.coding.me/b.css
    ```

45. 写出满足如下条件的选择器
    * 第  8个子结点之后，倒数第 5 个子结点之前的li结点
    li:nthchild(n+8):lastchild(-n+5)
    * 【类名】以“damiao-”开头的元素 [class^="diaomiao-"],[class*=' diaomiao-']
    * rel 属性中有 nofollow 这个单词的标签[rel*='nofollow']
    [rel~="nofollow"]
46. 链接伪类的几种状态书写的顺序是什么？为什么？
:link
:visited
:focus
:hover
:active
47. 如下 font 属性的值哪一个是书写正确的？
    * font: serif 24px;
    * font: serif bold 24px/1.2;
    * font: bold 24px/1.2 serif; 正确
48. 详述你对盒模型的理解。
每个元素都会生成一个或多个矩形框
这些矩形框可以嵌套
每个矩形框都有可选的外边距边框 内边距
外边距可以为负 其他不行
margin-box padding-box conetnt-box
可以为每个盒子设置宽高，用width，heitht
宽高实际设施的是那个盒子的大小取决于box-sizing属性值可以是border-boxde宽高，也可以是conetnt-box
49. 元素的高度写百分比在什么情况下【无效】，为什么？在什么情况下【有效】，有效时是以哪个元素的高度为基准值？、
父元素高度也为auto时无效
在父元素高度

50. 字体的 italic 与 obsolete 的区别是？
Italic 样式一般是指书写体，相比无样式的字体，通常会占用较少的高度，而 oblique 字形一般只是常规字形的倾斜版本
51. 什么是模拟信号？什么是数字信号？它们的区别是？
模拟信号：将设备，介质中的物理量直接读书出经过转换后使用
数字信号：将介质中的物理量读出来并理解为0和1
区别：数字信号可以几乎完全消除误差 模拟信号会被干扰
52. 将如下 markdown 转换成 html
    ```md
    ## 四季变换
    <h2><p></p></h2>

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```
53. 如下表单提交后将跳转到什么地址
    ```html
    <form action="https://www.baidu.com/s" target="_blank">
      <input type="text" value="bb" name="a">
      <input type="checkbox" name="b" id="b" value="123" checked>
      <input type="checkbox" name="b" id="b" value="456" checked>
      <input type="checkbox" name="b" id="b" value="789">
      <input type="radio" name="c" id="c" value="a2">
      <input type="radio" name="c" id="c" value="a5" checked>
      <input type="radio" name="c" id="c" value="a4">
      <select name="select">
        <option value="01">0001</option>
        <option value="02">0002</option>
        <option value="03" selected>0003</option>
        <option value="04">0004</option>
        <option value="05">0005</option>
      </select>
      <button>提交</button>
    </form>
    ```

54. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。
text
maxlength minlength
checkbox
raido
number
  max min
range
  min max step
file accept
55. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？
autofocus
56. 如何在文本框里放置提示性文字？
placeholder="....."
57. option 标签的主体内容太长影响用户体验，你会如何解决？
用其他标签画出一个select的样式
将内容截断只展示一部分，但将完成内容写title属性上
58. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？
<textarea>
  转义
</textarea>
59. 如何禁用一组输入框？
60. 如下表格渲染出来后是什么效果？不要直接将代码贴入jsbin中看效果
    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```

61. 写出如下标签或属性值的英文全称

    标签：html,
    div,
    p,
    a,
    em,
    tr,
    th,
    td,
    col,
    ul,
    ol,
    li,
    dl,
    dt,
    dd,
    pre,
    nav

    属性：coord,rect,poly,href,src

62. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别
一个命令就对应一个程序，没有界面，只有文字输出，通过参数调整
63. 请确认以下标签分别属性什么类别（Content Category）？

    p, meta, h1, fieldset, option, input, area
64. 解释 box-sizing 可以取哪些值，以及每个值的意义
border-box width和height属性设置border-box的宽高
content-box width和height属性设置content-box的宽高
65. 简述 ie7 市场份额比 ie6 低的原因并在网络上找出目前各大浏览器在中国和全球的市场份额
66. 画出如下代码中 div 及其子元素的渲染结果，并指出 p 标签中【每个行内元素的，内容区，行内框的范围】，p 元素的行框，并指明理论的行框高度。有尺子的可以以 1mm 为 2px 来绘制。
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
      <style>
        p {
          font-size: 20px;
          line-height: 120%;
          margin: 30px;
          margin-left: auto;
          margin-right: -20px;
          width: 300px;
          background-color: tan;
        }

        .a {
          display: inline-block;
        }
        .b {
          font-size: 30px;
          vertical-align: 15px;
        }

        .c {
          display: inline-block;
          width: 60px;
          height: 60px;
          background-color: pink;
          margin: 8px;
        }

        img {
          box-sizing: border-box;
          width: 50px;
          height: 50px;
          border: 2px solid;
          margin: 4px;
          vertical-align: -10px;
          margin-bottom: -5px;
        }
        div {
          width: 400px;
          border: 1px dotted;
        }
      </style>
    </head>
    <body>
      <div>
        <p>
          <span class=a>foo</span>
          <span class=b>bar</span>
          <span class=c></span>
          <img src="https://drscdn.500px.org/photo/205228769/m%3D1170_k%3D1/d721302d063d447aa3bd6301dc1cba87" alt="">
        </p>
      </div>
    </body>
    </html>
    ```
