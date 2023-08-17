// 1.	Eldor ning yoshi X, Aziza ning yoshi – Y. Ularning o’rtacha yoshini aniqlang va har bir bolaning o’rtacha yoshdan farqini toping.
// let x = +prompt('Eldorni yoshni kiriting:')
// let y = +prompt('Azizani yoshni kiriting:')
// c = (x+y)/2
// d = x - c
// n = y - c
// console.log(`Eldorning yoshi = ${x}\nAzizaning yoshi =${y}\nUlarning ortasha yoshi = ${c}`);
// console.log('Eldorning yoshni ortacha yoshdan farqi =',d,'\nAzizaning yoshni ortacha yoshdan farqi =',n);
// 2.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”
let a = +prompt('a sonni kiriting:')
// 1-usul
// if (a > 0 ){
//     console.log('a son musbat');
// }
// else if (a < 0) {
//     console.log('a son manfiy');
// }
// else {
//     console.log('Raqam kiriting');
// }
// 2-usul Ternariy
// console.log(a > 0 ? 'a son musbat' :
//                 a < 0 ? 'a son manfi':
//                     'raqm kiriting');
// 3-usul
// let farq = a > 0 ? 'a son musbat'
//                 : a < 0 ? 'a son manfi'
//                     : 'raqam kiriting'
// document.write(`${farq} <br>a = ${a}`)