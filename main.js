const div = dom.create("<div><span>newDiv</span></div>")
console.log(div)

// dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const node = dom.empty(window.empty)
console.log(node)

const attr2 = dom.attr(test, 'title', 'Hi,I am Frank')
const title = dom.attr(test, 'title')
console.log(title)

dom.text(test, '你好啊，这是新的内容')
const text = dom.text(test)
console.log(text)

dom.html(test, 'xxx')
const html = dom.html(test)
console.log(html)

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)

const testDDD = dom.find('.red', test2)[0]
console.log(testDDD)

console.log(dom.parent(test))


const ss = dom.find('#s3')[0]
console.log(dom.siblings(ss))
console.log(dom.next(ss))
console.log(dom.previous(ss))

console.log(dom.children(travel))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(s2))