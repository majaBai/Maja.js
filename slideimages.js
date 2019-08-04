
const nextIndex = function(slide, offset) {
    // 得到图片总数和当前图片下标
    let numberOfImgs = parseInt(slide.dataset.imgs, 10)
    let activeIndex = Number(slide.dataset.active)
    // 求出下一张图片的 id
    let i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    return i
}

const bindEventSlide = function() {
    let selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event) {
        let self = event.target
        // 找到 slide div
        let slide = self.parentElement
        // 上一张图片的 offset 是 -1
        // 下一张图片的 offset 是 1
        let offset = Number(self.dataset.offset)
        // 算出下一张图片的 index
        let index = nextIndex(slide, offset)
        // 显示下一张图片
        showImageAtIndex(slide, index)
    })
}

const showImageAtIndex = function(slide, index) {
    let nextIndex = index
    //slide 实际是 botton 元素的父元素，此函数中表示一个元素; index是一个数值
    // 设置父节点的 data-active
    slide.dataset.active = nextIndex

    // 删除当前图片的 class 给下一张图片加上 class
    let className = 'gua-active'
    removeClassAll(className)
    let nextSelector = '#id-guaimage-' + String(nextIndex)
    let img = e(nextSelector)
    img.classList.add(className)

    // 切换小圆点
    let indicatorClassName = 'gua-white'
    // 1. 删除当前小圆点的 class
    removeClassAll(indicatorClassName)
    // 2. 得到下一个小圆点的选择器
    let indicatorSelector = '#id-indicator-' + String(nextIndex)
    let indicator = e(indicatorSelector)
    indicator.classList.add(indicatorClassName)
}

//鼠标放在小圆点上切换图片，即直接播放第（小圆点的) data-index 的图片
const bindEventIndicator = function() {
    let selector = '.gua-slide-indi'
    bindAll(selector, 'mouseover', function(event) {
        let self = event.target
        let index = Number(self.dataset.index)
        log('index', index, typeof index)
        let slide = self.closest('.gua-slide')
        // 直接播放第 n 张图片
        showImageAtIndex(slide, index)
    })
}

const bindEvents = function() {
    bindEventSlide()
    bindEventIndicator()
}

const playNextImage = function() {
    let slide = e('.gua-slide')
    // 默认 offset 是 1
    let index = nextIndex(slide, 1)
    // 显示下一张图片
    showImageAtIndex(slide, index)
}

const autoPlay = function() {
    let interval = 2000
    setInterval(function() {
        // 每 2s 都会调用这个函数
        playNextImage()
    }, interval)
}

const timerDemo = function() {
    let clockId = setInterval(function() {
        log('time', new Date())
    }, 1000)
    log('clockId', clockId)
}

const __main = function() {
    bindEvents()
    autoPlay()
}

__main()
