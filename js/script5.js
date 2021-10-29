//ตัวแปร variable

var a = 20;
let x = 10000000000;


//var ใช้ตรงไหนก็ได้
//let ใช้ได้แค่ใน scope ที่ประกาศ แต่ถ้าประกกาศด้านนอก ก็ใช้ได้ทุกที่
//const d ตั้งค่าแล้วห้ามเปลี่ยน

{
    let b = 15;
    var c = 99;
    const d = 888888;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log('-----------------');
    
    b = 30;
    a = 100;
    c = 555;
    //d = 111111; error
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x);
    console.log('-----------------');

}

console.log(x);
console.log(a);
//console.log(b); error
console.log(c);
//console.log(d); error
console.log('--------------------');