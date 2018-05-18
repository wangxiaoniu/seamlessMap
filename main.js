/***************************************************************/
/*************************饥人谷*********************************/
/***********************author:大王*****************************/
/***********************2018.5.18*******************************/
/**************************************************************/
/**************************************************************/

setInit()//初始化
let n = 1;
setInterval(() => {
    switch (getN(n)) { 
        case 1://状态1
            xxx()
            break;
        case 2://状态2
            xxx()
            break;
        case 3://状态3
            xxx()
            break;
    }
    n++
}, 3000)









//以下工具函数

//以下工具函数




//初始化
function setInit() {
    $('#window > img:nth-child(1)').addClass('center')
    $('#window > img:nth-child(2)').addClass('right')
    $('#window > img:nth-child(3)').addClass('right')
}

//获取状态值
function getN(n) {
    n = n % 3
    if (n === 0) {
        n = 3
    }
    return n //1 2 3状态值
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