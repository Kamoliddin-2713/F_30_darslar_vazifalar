                    //   Savollar
// 1-savol .	3 ta o’zgaruvchi berilgan. O’zgaruvchilar qiymati 31, 18 va 79. Uchta o’zgaruvchini orasida bitta probel bilan chop eting.(31 18 79)
// let x = 31
// let y = 18
// let z = 79
// console.log(`${x} ${y} ${z}`);

// 2- savol . 	Konsolga 50 va 10 ni yangi qatorlarda yozing.
// let x = 50
// let y = 10
// console.log(`
// ${x}
// ${y}`);

// 3-savol .	Klaviaturadan foydalanuvchi ismini so’rang. Console ga ‘Assalom aleykum, ’ va foydalanuvchi ismini bilan chop eting.
// let ism = prompt("Ismingizni kiriting:")
// console.log(`Assalom aleykum ${ism}`);

// 4-savol. Klaviaturadan foydalanuvchining sevimli futbol komandasini so’rang. Console ga komanda nomi bilan birga ‘ - chempion’ dib chop eting.
// let x = prompt("Sevimli futbol kamandangizni kiriting:")
// console.log(`${x} - chempion`);

// 5-savol .Klaviaturadan kiritilgan raqamning oldingi va keying qiymatlarini chop eting. Misol. 15 kiritilsa, konsolda ’15 sonning keying qiymati 16, 15 sonning oldingi qiymati 14’.
// let x = +prompt('Marhamat biror butun son kiriting:')
// console.log(`
// Siz kiritgan son ${x}
// ${x} dan oldingi son ${x-1}
// ${x} dan keyingi son ${x+1}
// `);

// 6-savol .Do’kondan n kg nok, s kg sabzi, b kg bodring sotib olib umumiy narhni konsolga chiqaring.
let n = +prompt("Dokonimizda 1 kg nok 5000 so'm.Siz necha kilo olasiz?:")
let s = +prompt("Dokonimizda 1 kg sabzi 2000 so'm.Siz necha kilo olasiz?:")
let b = +prompt("Dokonimizda 1 kg bodring 1000 so'm.Siz necha kilo olasiz?:")
const formatter = new Intl.NumberFormat('en-UZ', {
    style: 'currency',
    currency: 'UZB',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
console.log(`
Siz ${n} kg nok oldingiz jami: ${n*5000} so'm
Siz ${s} kg sabzi oldingiz jami: ${s*2000} so'm
Siz ${b} kg bodring oldingiz jami: ${b*1000} so'm`,
'Sizdan jami:',formatter.format(`${n*5000+s*2000+b*1000}`),"so'm");

// 7-savol.	A va B sonlar berilgan ularning o’rtacha qiymatini hisoblang.
// let a = +prompt('A sonni kiriting: ')
// let b = +prompt('B sonni kiriting: ')
// console.log(`A son ${a},B son ${b} ikki sonning ortacha qiymati ${(a+b)/2}`);

// 8-savol.	A va B sonlar berilgan ularning o’rta geometric qiymatini hisoblang.
// let a = +prompt('A sonni kiriting: ')
// let b = +prompt('B sonni kiriting: ')
// console.log(`A son ${a},B son ${b} ikki sonning ortacha giometrik qiymati`, Math.sqrt(`${(a+b)}`));

// 9-savol.	Kvadrat tomoni berilgan. Uning perimetri hisoblansin. P = x*4

// let x = +prompt('Kvadrat tomonini kiriting:')
// console.log(`Kvadrat parametri: ${x*4}`);

// 10.	Kvadratning tomoni berilgan uning yuzasi topilsin.
// let y = +prompt('Kvadrat tamonini kiriting:')
// console.log(` Kvadrat tomoni ${y}
// `,'Kvadrat yuzi:',Math.pow(`${y}`,2));

// 11.	To’g’rito’rtburchakning tomonlari A va B berilgan. Uning yuzasi S = a*b va perimetri P = 2*(a+b) ni hisoblang.
// let a = +prompt('A tamoni kiriting:')
// let b = +prompt('B tamoni kiriting:')
// console.log(` Tamonlari ${a} va ${b} bo'lgan to'g'ri  to'rtburchak
// `,`Parametri: ${2*(a+b)}`,`
//  Yuzi:${a*b}`);

// 12.	Diametr D berilgan. Uning uzunligi L=pi*d  ni hisoblang. Pi ni 3.14 hisoblang.
// let d = +prompt("Diometrni kiriting:")
// console.log(`L uzunig teng`,Math.PI*(`${d}`));

// 13.	Kub tomon a  berilgan. Kubning hajmi topilsin   va uning maydoni topilsin
// let a = +prompt("Kub tamonini kiriting:")
// console.log(`Tomoni ${a} bolgan kub
// Hajmi:${Math.pow(a,3)}
// Yuzi:${Math.pow(a,2)*6}`);

// 14.	Parallipipedning tomonlari a,b,c berilgan. Uning hajmini   va yuzasi   topilsin
// let a = +prompt('A ni kiriting:')
// let b = +prompt('B ni kiriting:')
// let c = +prompt('C ni kiriting:')
// console.log(`Tomonlari A=${a},B=${b},C=${c} bo'lgan paralapedning
// Hajmi:${a*b*c}
// Yuzi:${2*(a*b+a*c+c*b)}`);
