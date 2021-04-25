function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight //代码看不见，自动往下拉
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight //代码看不见，自动往下拉
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}
var result = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}
/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/* 不玩啦，我来介绍一下我自己吧 */
/* 我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
    background: white;
    height:100%;
    width:100%;
}
`
var result2 = `
#paper{
}

/*
*接下来把 Markdown 变成 HTML
*/

/*
*接下来给 HTML 加样式
*/

/*
*这就是我的会动的简历
*谢谢观看
*/
`
var md = `
# 自我介绍

我叫XXX
199X年1月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉JavaScript CSS

# 项目介绍
1、XXX 轮播
2、XXX 简历
3、XXX 画板

# 联系方式
QQ：1234567890
Email: 13456765@234345.com
手机： 1234567890
`
writeCode('', result, ()=>{
    //异步回调
    cretePaper(()=>{
        //同步回调
        writeCode(result, result2, ()=>{
            writeMarkdown(md,()=>{})
        })
    })
})

function cretePaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
