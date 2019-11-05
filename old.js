var allButtons = $('#buttons>div')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (sgs) { //鼠标点击事件
        var index = $(sgs.currentTarget).index() //index会找出它在兄弟姐妹中排第几
        var distance = index * -920
        $('#images').css(
            {
                transform: 'translate(' + distance + 'px)'
            }
        )
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
var timerId = setTimer() //初始化闹钟

playSlide(n % size)


$('.windows').on('mouseenter', function () { //鼠标进入停止并清除闹钟
    window.clearInterval(timerId)
})
$('.windows').on('mouseleave', function () { //鼠标离开再次初始化闹钟
    timerId = setTimer()
})

//工具函数
function activeButton($button) { //激活button，即三个div按钮
    $button
        .addClass('active')
        .siblings('.active').removeClass('active')
}
function playSlide(index) { //轮播
    allButtons.eq(index).trigger('click')
    //activeButton(allButtons.eq(index)) 上面click已经激活
}
function setTimer() { //制作闹钟
    return setInterval(
        () => {
            n += 1
            playSlide(n % size)
        }, 2000
    )
}