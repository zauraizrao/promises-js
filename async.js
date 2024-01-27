
let prom = async function (complete) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (complete) {
                resolve("russian")
            } else {
                reject()
            }
        }, 3000);
    })
}

async function showData() {
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    let data = await prom (true)
    console.log(data);
    console.log("Hello World");
    console.log("Hello World");
}

showData()