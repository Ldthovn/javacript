// Tham tri - value type -> Tham tri dang luu gia tri  // Co dang : number, string, boolean, null, undefind
// Tham chieu - reference type -> Luu duoi dang tham chieu nghia la luu dia chi noi giu gia tri chu khong luu gia tri // Co dang array, object

// Tham tri - stored as value type   Dang number
let a = 5;
let b = a; // 5
a = 10;
console.log(b);

// Tham chieu - stored as reference type   // Dang object
const a = { name: "Tho" }; // a co dia chi 1E2F
const b = a; // b copy dia chi 1E2F
a.name = "Po";
console.log(b.name); // Po

// Truyen tham so dang tham tri - pass by value

function doMagic(number) {
  number = 10;
}
const a = 5;
doMagic(a);
console.log(a);

// Truyen duoi dang tham chieu - Pass by reference

function doMagic2(obj) {
  obj.name = "Po";
}
const a = { name: "Hau" };
doMagic2(a);
console.log(a);

// Lam sao de khong bi dinh tham chieu
// --> Clone object
// --> Clone array
// ES6: spead operator (...)
const a = { name: "Tho" }; // 1E2F
const b = { ...a }; // 1E2F
a.name = "Po";
console.log(b.name);

const a = [1, 2, 3];
const b = [...a];
a.push(4);
console.log(a);
