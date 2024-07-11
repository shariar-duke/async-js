
if (true) {
    var b = 10;
}
console.log(b);


// var is a function scoped so it works fine inside a function . As I havend't declred it within any function it is first declaring it on the global level
// then it is assigning it self inside the if statement  . The scenario is happending here is

// var b;

// if (true) {
//     var b = 10;
// }
// console.log(b); 