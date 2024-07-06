function a() {
    console.log("a")
}

function b(c) {
    console.log(c);
}

function c() {
    return "c";
}

function d(e) {
    let c = e * 2;
    return c;
}

const aaa="123";


export {
    d,
    c,
    b,
    aaa
}