arrayNumeros = [2,6,1,2,6,98]

for (let i= 0; i < arrayNumeros.length -1; i++) {
    for (let j = 0; j < arrayNumeros.length -1 -i; j++) {
        if (arrayNumeros[j] < arrayNumeros[j+1]) {
            let temp = arrayNumeros[j];
            arrayNumeros[j] = arrayNumeros[j+1];
            arrayNumeros[j+1] = temp;
        }
    }
}

console.log(arrayNumeros);


var expect = function(val) {
    return {
        toBe: function (val1) {
            if (val === val1) {
                return true;
            } else {
                throw Error("Not Equal")
            }
        },
        notToBe: function (val1){
            return val !== val1 ? true : "Equal"
        }
    }
};
//console.log(expect(10).toBe(null))


var createCounter = function(init) {
    let start = init;
    return {
        increment: ()=>{
            return ++init
        },
        decrement: ()=>{
            return --init
        },
        reset: ()=>{
            return start
        }
    }
};

const funcioncallback = fn => fn("callback")
funcioncallback((mensaje)=> console.log(`esto es un ${mensaje}`))


arrayNumerosT = [2,6,1,2,3,98]

const arraySwap = (array)=>{
    for (let i = 0; i < array.length / 2; i++){
        let temp = array[i];
        array[i] = array[array.length-i-1]
        array[array.length-i-1] = temp
    }
    return array;
}
console.log(arraySwap(arrayNumerosT));


const pipe =  (...functs) => val=> functs.reduce((prevFn, nextFn) => nextFn(prevFn), val)
const pipe2 =  (val, ...functs)=> functs.reduce((prevFn, nextFn) => nextFn(prevFn), val)

const agg2 = x => x+2
const restar1 = x => x-1
const doblar = x => x*2


pipe(agg2, restar1, doblar)(4)
pipe2(4,agg2, restar1, doblar)

const test = par1 => par1 => par1 *2
test(1)(1)

const callback2= fn => fn("test")


callback2(callback => console.log(`hola ${callback}`))