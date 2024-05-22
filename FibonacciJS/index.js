function fib10(x1, x2, x3) {
    for(let i = 0; i < 10; i++) {
        console.log(x1);
        x3 = x2;
        x2 = x1;
        x1 = x2 + x3;
    }
}

fib10(0, 1, 0);

function fibrec(x1, x2, x3, max) {
    if (x1 > max) {
        return;
    } else {
        console.log(x1);
        x3 = x2;
        x2 = x1;
        x1 = x2 + x3;
        fibrec(x1, x2, x3, max);
    }
}

fibrec(0, 1, 0, 35);