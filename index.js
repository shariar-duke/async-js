// Java Script Promise 
// Real life a amara jokhn kno promise kroe tokhn kaj er status tahke holo pending , mane ami successful hoilam naki failed eta ekhno bolar somoy ase nai 
// tarpor kaj ta successful hbe or failed hbe 

// JavaScript Promise mane amader hoye kno asyncronous operation se perform korbe 
// Pending theke jode Successful a turn kore tokhn take bole Resolved 
// Pending theke jode Failure a turn kore tokhn take boel Rejected 

 const p = new Promise((resolve , reject)=> {
  // Promise er modhe of course ayncrounous operation perform hoy sei jnno Promise create kora hoise vai . 
   
  resolve("The Promsie is Successful")
  reject("The Promise is failure")

 })


 p.then((result) => console.log(result)).catch((err)=> 
{
    // ekhne sudhu resolve er result ta pabo karon promise resolve hoise sudhu 
    console.log(err)
})



 // Promise er modhe j function ta lkhlam eta k bola hoy Promise executor function . And then 
 // p holo ekta object Promise object o bola jay . Karon Promise er constructor call kore etar modhe assign kra hoise . So eta to object er syntax 
 // ei p er modhe Promise er sob update paya jabo . 