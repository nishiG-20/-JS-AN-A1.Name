let str = 'heshethemthey'
let arr = str.split('');
let tmp;
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
str = arr.join('')

let count=0
for(let i=0; i<str.length; i++)
{
    if(str[i]!=str[i-1]){
        count++
    }
}
console.log(count)

