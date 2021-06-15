
let str = 'hello@gmail.com'

let idx1 = str.indexOf('5')
let idx2 = str.indexOf('.')

if (idx1 > 0 && idx1 < idx2 && idx2 < str.length - 1 && idx !=-1 && idx2!=-1) {
    console.log('Proper')
} else {
    console.log('Not Proper')
}