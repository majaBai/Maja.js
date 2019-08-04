const log = console.log.bind(console)

const ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败', message)
    } else {
        log('*** 测试成功')
    }
}

const e = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `selector ${selector} not found`
        alert(s)
        //
        return null
    } else {
        return element
    }
}

// es 返回一个数组，包含所有被选中的元素
const es = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `selector ${selector} not found`
        alert(s)
        //
        return []
    } else {
        return elements
    }
}

const appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// bindAll 给所有的元素绑定事件
const bindAll = function(elements, eventName, callback) {
    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i]
        tag.addEventListener(eventName, callback)
    }
}

const removeClassAll = function(className) {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        log('classname', className, e)
        e.classList.remove(className)
    }
}

// find 函数可以查找 element 的所有子元素
const find = function(element, selector) {
    let e = element.querySelector(selector)
    if (e === null) {
        let s = `selector ${selector} not found`
        alert(s)
        return null
    } else {
        return e
    }
}

//查找某一元素的父元素
const closestClass = function(element, className) {
    let e = element
    while (e !== null) {
        if (e.classList.contains(className)) {
            //className 是父元素的，下面函数的 idName 也一样
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closestId = function(element, idName) {
    let e = element
    while (e !== null) {
        if (e.id === idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closestTag = function(element, tagName) {
    let e = element
    while (e !== null) {
        if (e.tagName.toUpperCase() === tagName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closest = function(element, selector) {
    let firstChar = selector[0]
    if (firstChar === '.') {
        let className = selector.slice(1)
        return closestClass(element, className)
    } else if (firstChar === '#') {
        let idName = selector.slice(1)
        return closestId(element, idName)
    } else {
        let tagName = selector
        return closestTag(element, tagName)
    }
}

//判断两个数组是否相等
const arrayEqual = (a, b) => {
    if(a.length !== b.length) {
        return false
    } else {
        for(let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]){
                return false
            }
        }
        return true
    }
}


