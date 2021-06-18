const numRange = [1, ...Array(1000).keys()];

function square(num) {
    return new Promise((resolve, reject) => {
        let squared = num ** 2;
        resolve(squared);
    });
}

function findRoot(num) {
    return new Promise((resolve, reject) => {
        let square_root = Math.sqrt(num);
        resolve(square_root);
    });
}

function findPrime(num) {
    return new Promise((resolve, reject) => {
        var store = [], i, j, primes = []; 

        for(i = 2; i <= num; ++i) {

            if(!store[i]) {

                primes.push(i);

                for(j = i << 1; j <= num; j += i) {

                    store[j] = true;

                }

            }

        }
        resolve(primes[primes.length - 1]);
    });

}
let num = 100;
if(!numRange.includes(num)) {
    console.log("Error: The number is out of range!");
}
else {
    square(num)
        .then((res) => {
            var startAt = +new Date();
            setTimeout(() => {
                console.log(res);
                Promise.resolve(findRoot(num))
                .then((result) => console.log(result))
                .then(() => {
                    Promise.resolve(findPrime(num))
                    .then((res) => console.log(res))
                    .then(() => {
                        var endsAt = +new Date();
                        console.log(`Time taken to complete is ${endsAt - startAt} ms`)
                    })
                })
            }, num)
        })
}