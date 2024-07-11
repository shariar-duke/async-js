// If I want to return a object from an function what should I do ?


const hello = () =>
(
    {
        a: 10,
        b: 20
    }
)

console.log(hello())

// jode amk response hisebe ekta object send kore dite hoy tahole amk => er por {a:5, b:5} dile hbe na tahle eta k object er bracket vabbe na vabbe holo new block of code tai object
// patahte gele age { } er age () dite hbe jate ei {} take object er bracket vabe


// Antoher way 

const hi = () => {
    return {
        a: 10,
        b: 20
    }
}

console.log(hi())

// jdoe arrow er por {} use krei thake tahole pore r ekta return use kore nite hbe 
