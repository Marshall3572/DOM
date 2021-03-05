window.dom = {
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim() //去掉文本（空格）
        return container.content.firstChild
    },
    after(node, node2) {    //在node之后插入一个节点
        node.parentNode.insertBefore(node2, node.nextSibling) //将node2插入到node下一个节点的前面

    },
    before(node, node2) {    //在node之前插入一个节点
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {  //新增子节点
        parent.appendChild(node)
    },
    wrap(node, parent) {    //新增父节点
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {  //删除节点
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {   //删除子节点
        const { childNodes } = node
        // const childNodes=node.childNodes 是上一句代码的复杂形式
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {   //用于读写属性
        if (arguments.length === 3) {   //重载（根据参数不同的个数写不同的代码）
            return node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {    //用于读写文本内容
        if (arguments.length === 2) {
            if ('innerText' in node) {    //适配
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {    //读写html内容
        if (arguments.length === 2) {   //重载
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {  //读写style
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]

            } else if (name instanceof Object) {
                //dom.style(div,{color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }

            }
        }
    },
    class: {    //添加、删除class
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {   //添加、删除时间监听
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) { //获取选择器
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {  //找父元素
        return node.parentNode
    },
    children(node) {    //找子元素
        return node.children
    },
    siblings(node) { //找同级元素
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {    //找下一个同级元素
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {    //找上一个同级元素
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {    //用于遍历所有节点
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {   //查元素的索引
        const list = dom.children(node.parentNode)
        let i = 0
        for (i; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }

}