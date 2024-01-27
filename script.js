console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
 let prom = async function () {
    return new Promise(function (reject,resolve) {
        setTimeout(() => {
            resolve (500)
        }, 3000);
    })
 }

 let main = async function() {
    let data = await prom()
    console.log(data);
    console.log("The End");
 }
main()





