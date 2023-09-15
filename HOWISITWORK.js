console.log("START")

Promise.resolve().then(() => {
    for(let i = 0; i < Number.MAX_SAFE_INTEGER / 100000000; i++){
        if (i % 10000000 === 0) {
            console.log(i);
        }
    }
})

Promise.resolve().then(() =>{
    console.log('microtask');
});