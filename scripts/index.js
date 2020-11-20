/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var Slide = function(scrolled, begin, last){
    if(scrolled - begin < 0 ) slide = 0;
    if(scrolled - begin <= last && scrolled - begin >= 0) slide = (scrolled - begin) * 20;
    if(scrolled - begin > last) slide = 1;
    return slide;
}

const l2= document.querySelector('#l2');
const l3= document.querySelector('#l3');
const p1= document.querySelector('#food');
const bg= document.querySelector('.bgcolor_change');
const l4= document.querySelector('#l4');
const l5= document.querySelector('#l5');
const l6= document.querySelector('#l6');

document.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    console.log(scrolled);
    l2.style.setProperty('--fade', `${100 - Slide(scrolled, 0, 0.05)*100}%`)
    l3.style.setProperty('--fade', `${100 - Slide(scrolled, 0.03, 0.05)*100}%`)
    p1.style.setProperty('--slide', Slide(scrolled, 0, 0.05))
    bg.style.setProperty('--opacity', Slide(scrolled, 0.15, 0.05))
    l4.style.setProperty('--fade', `${100 - Slide(scrolled, 0.25, 0.05)*100}%`)
    l5.style.setProperty('--fade', `${100 - Slide(scrolled, 0.28, 0.05)*100}%`)
    l6.style.setProperty('--fade', `${100 - Slide(scrolled, 0.31, 0.05)*100}%`)
})