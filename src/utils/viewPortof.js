
/**
 * 判断元素是否在视野外
 * @param {*} el  Dom
 * @return {boolean} 
 */

export default function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    // console.log('top', top)
     // 这里有个+100是为了提前加载+ 100
    return top <= viewPortHeight + 100
}