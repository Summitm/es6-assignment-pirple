const numRange = [1, ...Array(1000).keys()];

function square(num, callback) {
    setTimeout(()=> {
        let squared = num ** 2;
        console.log(squared);
        callback();
    }, num)
}

function findRoot(num, callback) {
    let square_root = Math.sqrt(num);
    console.log(square_root);
    callback();
}

function findPrime(num) {

    var store = [], i, j, primes = []; 

    for(i = 2; i <= num; ++i) {

        if(!store[i]) {

            primes.push(i);

            for(j = i << 1; j <= num; j += i) {

                store[j] = true;

            }

        }

    }
    console.log(primes[primes.length - 1]);

}

function main(num, c1, c2, c3) {
    var startAt = +new Date();
    if(numRange.includes(num)) {
        c1(num, function() {
            c2(num, function() {
                c3(num);
                var endsAT = +new Date();
                console.log(`Time taken to complete is ${endsAT - startAt} ms`)
            });
        });
    }
    else {
        console.log("Error: The number is out of range!")
        var endsAT = +new Date();
        console.log(`Time taken to complete is ${endsAT - startAt} ms`)
    }
}
main(10, square, findRoot, findPrime);