function test(number) {
    const arr = [2, 3, 4, 5];
    for(let i = 0; i < arr.length; i++) {
        if(number % arr[i] === 0) {
            console.log(arr[i])
        }
    }
}
test(333)
