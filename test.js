let a = [1, 8, 3];

let max = a.reduce((prev, cur, arg3, arg4) => {
    console.log(prev, cur, arg3, arg4);
    
    return prev > cur ? prev : cur;
});

console.log(max);
