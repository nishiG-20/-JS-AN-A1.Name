console.log('--------------------Task 1------------------')

let str = 'Abc'
let conc = 'x'
let opStr = ''
for (let i = 0; i < str.length; i++) {
    opStr += str[i] + conc
    conc += 'x'
}
console.log(opStr)
