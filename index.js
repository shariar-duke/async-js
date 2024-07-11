var lang = "javaScript"
// global schope

function learn(topic) {

    // this lang is inside the function scope 
    var lang = topic;
    console.log(`I want to learn ${lang}`)
}

learn("python")

console.log(`I know  ${lang}`)

