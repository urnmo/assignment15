function longX(words) {
    let string = words.split('');
    let count = 0;
    let biggun = 0;
    for (i = 0; i < string.length; i++) {

        if ('x' === string[i]) {
            count = count + 1;
        } else {
            count = 0;
        }
        if (count > biggun) {
            biggun = count;
        }
    }
    return biggun;
}

console.log(longX('xaiwkdfsxxxxj'));


function longest(word) {
    let x = word.split('');
    let biggun = {};
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (biggun.hasOwnProperty(x[i]) === false) {
            biggun[x[i]] = 1;
        } else {
            biggun[x[i]] = biggun[x[i]] + 1;
        }
        console.log(biggun);
    }
    for (let thing in biggun) {

        if (biggun[thing] > count) {
            count = biggun[thing];
        }
    }

    return count;
}

console.log(longest('xaiwkdfsxxxxj'));

function reduce(num, den) {
    let gcd = 0;
    if (num < den) {
        gcd = num
    } else {
        gcd = den
    };

    for (let i = gcd; i >= 2; i--) {
        if (num % i === 0 && den % i === 0) {
            return den / i;
        }
    }
}
console.log(reduce(10, 100));


// let testAges = [

//     {
//         birth: 1904,
//         death: 1992
//     },

//     {
//         birth: 1948,
//         death: 2007
//     },

//     {
//         birth: 1915,
//         death: 1925
//     },
//     {
//         birth: 1985,
//         death: 2075
//     },

// ]



// function celebrity(notDeadTogether){

// let yearsNotDead = [];
// let count = 0;
// let biggun = 0;
// let currentYear = 0;

// for (let i = 0; i < notDeadTogether.length; i++);{
//     for (let y = notDeadTogether[i].birth; y <= notDeadTogether[i].death; y++){
//         yearsNotDead.push(y);
//     }
// }
// let peoplesYears = yearsNotDead.sort();
// for (let z = 1; z < peoplesYears.length; z++ )

// }








let ArrayFantastico = [4, 9, 10, 12, 15];
let ArrayPeligroso = [2, 3];
function divisible(arrayOne, arrayTwo){
    //loop through the arrayOne and use modulus function to see
    // if each value is divisible by arrayTwo
    //if it is push it to a new array
    // add the contents of that array
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < arrayOne.length; i++);{
        for (let y = 0; y < arrayTwo.length; y++){
            if ( arrayOne[i]%arrayTwo[y]=== 0){
                newArray.push(arrayOne[i]);

            }
        }
        
    }
    for(let x=0; x<newArray.length, x++;){
        if ( newArray[x] > 0){
            sum = newArray[x] + sum;
        }

    }
    return sum;
}

// console.log(divisible(ArrayFantastico, ArrayPeligroso));