/***************************************************************/
/*************************饥人谷********************************/
/***********************author:大王*****************************/
/***********************2018.5.18*******************************/
/*******************图片增加无需更改js代码***********************/
/**************************************************************/

//获取页面中全部需要轮播的图片
let img=$('#window > img')
setInit()//初始化
let n = 1;
setInterval(() => {
    xxx()
    n++
}, 3000)









//以下工具函数

//以下工具函数




//初始化

function setInit() {
    //因为img是变量，是个对象，所以不用加引号，如果是标签li img 等,如就要加引号$('li')
    $(img[0]).addClass('center').siblings().addClass('right')
}

//获取状态值
function getN(n) {
    n = n % img.length
    if (n === 0) {
        n = img.length
    }
    return n //1 2 3 等状态值（有多少个图片就有多少个状态）
}

//主体函数 不知道应该叫什么
function xxx() {
    setLeft($(`#window > img:nth-child(${getN(n)})`))
        .one('transitionend', (ev) => {
            setRight($(ev.currentTarget))
        })
    setCenter($(`#window > img:nth-child(${getN(n + 1)})`))
}

//站左边
function setLeft($node) {
    return $node.addClass('left').removeClass('center')
}
//站中间
function setCenter($node) {
    return $node.addClass('center').removeClass('right')
}
//站右边
function setRight($node) {
    return $node.addClass('right').removeClass('left')
}