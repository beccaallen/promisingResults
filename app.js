// slowMath.add(6,2).then((results => {
//    console.log(results);
//    return slowMath.multiply(results, 2)
// // slowMath.add(1,1).then((results => {
// //    console.log(results);
// //    return slowMath.multiply(results, 2)
// })).then(results => {
//     console.log(results);
//     return slowMath.divide(results, 4)
// }).then(results =>  {
//     console.log(results);
//     return slowMath.subtract(results, 3)
// }).then(results => {
//     console.log(results);
//     return slowMath.add(results, 98)
// }).then(results => {
//     console.log(results);
//     return slowMath.remainder(results, 2)
// }).then(results => {
//     console.log(results);
//     return slowMath.multiply(results, 50)
// }).then(results => {
//     console.log(results);
//     return slowMath.remainder(results, 40)
// }).then(results =>{
//     console.log(results);
//     return slowMath.add(results, 32)
// }).then(results => {
//     console.log(`The final result is ${results}`);

// }).catch(error =>{
//     console.log("error error");
// })

async function doMath() {
  try {
    let results = await slowMath.add(6, 2);
    console.log(results);
    results = await slowMath.multiply(results, 2);
    console.log(results);
    results = await slowMath.divide(results, 4);
    console.log(results);
    results = await slowMath.subtract(results, 3);
    console.log(results);
    results = await slowMath.add(results, 98);
    console.log(results);
    results = await slowMath.remainder(results, 2);
    console.log(results);
    results = await slowMath.multiply(results, 50);
    console.log(results);
    results = await slowMath.remainder(results, 40);
    console.log(results);
    results = await slowMath.add(results, 32);
    console.log(results);
    results = `The final result is ${results}`;
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}

doMath();
