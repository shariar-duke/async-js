// call back function 
// Ekta function k jokhn r ekta function er paramter hisbe pass kore taokhn take call back function bola hoy 
console.log("Line 1")

getStudent(2, (person) => {
    console.log("Id id", person.id)
    console.log("name id ", person.name)
})
console.log("line 2")

function getStudent(id, myCallback) {
    setTimeout(() => {
        console.log("Fetching from database the sutednts data")
        myCallback({ id: id, name: "Shariar" })
    }, 2000)
}


// peramter holo functon defination er somoy jeta use hoy
// ekta function k jokhn amra r ekta function er peramter hisbe use korbo tokhn seta call back function . Pura file a function to koykta ase but kon fucntion ta r ekta function er

//  function getStudent(id, myCallback) {
//     setTimeout(() => {
//         console.log("Fetching from database the sutednts data")
//         myCallback({ id: id, name: "Shariar" })
//     }, 2000)
// }


// ei j function ta amra define korse . er duta perameter ase ekta holo id r ekta holo ekta function , normally function er peramter hoy string, array , boolean obj etc
// but ei function tar ekta perameter asto ekta function . tai ei function ta jkhne define kora hoise  oi jaygay gia bolbo tui ekta call back function

// eta abar define kora hoise getStudent function take call korar somoy .

// call back function khuje ber korbo kmne. Amra function defination gula khujbo I mean function body . function call na. Dekhe er peramter gular dike nojor dbo j er kno peramter
// kno fucntion na to. jode hoy tahole eta call back function


// call back function use korar upokar ki
// dhrlam amar kase duta function ase function A r function B .  ami ekta jayga theke function A k call korbo . Ami function A k emn vabe lkhse jno function A ekta peramter ekta function hoy .

// Now function A call kora holo . Function A tar nijer kaj korlo . Ekhn function A er ekta perameter j hutu ekta function er name . So oi name ta ses a call kore dilo. tate amar j kaj ta holo ssta holo Ami
// A function ta call korlam so ami first a chai A j kaj korte chai seta koruk . Kora ses hole B er kisu kaj ase seta jno suru hoy . And B fucntion er body ami abar A function call kora sathe sateh lekhse

// Real use case . Ami dhorlam upore amar A function ase jeta api fetch kore then niche B function ase seta api er ekta data chai. ekhn A function er kaj ses hote deri holoe B function call hoye jabe

// tai ekhne B function take A er peramter hisbe emne use kora hoise j A er kaj jokhn ses hbe . Tokhn jno se B k call kore dey . Caile A er kisu property B call korar somoy pass o kroe dite pare jate b seta receive kre kaj korte pare 

