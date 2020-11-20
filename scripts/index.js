/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

var Slide = function(scrolled, begin, last){
    if(scrolled - begin < 0 ) slide = 0;
    if(scrolled - begin <= last && scrolled - begin >= 0) slide = ((scrolled - begin) / last);
    if(scrolled - begin > last) slide = 1;
    return slide;
}

var DeSlide = function(scrolled, begin, last){
    if(scrolled - begin < 0 ) slide = 1;
    if(scrolled - begin <= last && scrolled - begin >= 0) slide = 1 - ((scrolled - begin) / last);
    if(scrolled - begin > last) slide = 0;
    return slide;
}

var F_S_DSlide = function(scrolled, begin, last){
    if(scrolled - begin < 0 ) slide = 1;
    if(scrolled - begin <= last && scrolled - begin >= 0) slide = (((scrolled - begin) / last) - 1)*(((scrolled - begin) / last) - 1);
    if(scrolled - begin > last) slide = 0;
    return slide;
}

var MinusSlide = function(scrolled, begin, last){
    if(scrolled - begin < 0 ) slide = -1;
    if(scrolled - begin <= last && scrolled - begin >= 0) slide = ((scrolled - begin) / last)*2 - 1;
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
const text2= document.querySelector('.text_2');
const list1= document.querySelector('#list_1');
const l7= document.querySelector('#l7');
const l8= document.querySelector('#l8');
const p2= document.querySelector('#rice');
const box1= document.querySelector('#box1');
const box2= document.querySelector('#box2');
const box3= document.querySelector('#box3');
const box4= document.querySelector('#box4');
const box5= document.querySelector('#box5');
const box6= document.querySelector('#box6');
const p3= document.querySelector('.transparent');

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
    list1.style.setProperty('--up', MinusSlide(scrolled, 0.2, 0.3))
    text2.style.setProperty('--opacity', DeSlide(scrolled, 0.4, 0.05))
    l7.style.setProperty('--up', F_S_DSlide(scrolled, 0.4, 0.2))
    l8.style.setProperty('--up', F_S_DSlide(scrolled, 0.45, 0.2))
    p2.style.setProperty('--up', F_S_DSlide(scrolled, 0.47, 0.2))
    box1.style.setProperty('--fade', `${100 - Slide(scrolled, 0.56, 0.05)*100}%`)
    box2.style.setProperty('--fade', `${100 - Slide(scrolled, 0.58, 0.05)*100}%`)
    box3.style.setProperty('--fade', `${100 - Slide(scrolled, 0.60, 0.05)*100}%`)
    box4.style.setProperty('--fade', `${100 - Slide(scrolled, 0.62, 0.05)*100}%`)
    box5.style.setProperty('--fade', `${100 - Slide(scrolled, 0.64, 0.05)*100}%`)
    box6.style.setProperty('--fade', `${100 - Slide(scrolled, 0.66, 0.05)*100}%`)
    p3.style.setProperty('--slide', `${100 - Slide(scrolled, 0.78, 0.22)*100}%`)
})