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
// let n = +prompt("Dokonimizda 1 kg nok 5000 so'm.Siz necha kilo olasiz?:")
// let s = +prompt("Dokonimizda 1 kg sabzi 2000 so'm.Siz necha kilo olasiz?:")
// let b = +prompt("Dokonimizda 1 kg bodring 1000 so'm.Siz necha kilo olasiz?:")
// const formatter = new Intl.NumberFormat('en-UZ', {
//     style: 'currency',
//     currency: 'UZB',
//     // These options are needed to round to whole numbers if that's what you want.
//     //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//     //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
//   });
// console.log(`
// Siz ${n} kg nok oldingiz jami: ${n*5000} so'm
// Siz ${s} kg sabzi oldingiz jami: ${s*2000} so'm
// Siz ${b} kg bodring oldingiz jami: ${b*1000} so'm`,
// 'Sizdan jami:',formatter.format(`${n*5000+s*2000+b*1000}`),"so'm");

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

// 15.	Aylananing radiusi R berilgan. Uning uzunligi L=2*pi*R  va yuzasini S=pi*R**2 toping
// let r = +prompt('r ga qiymat bering: ')
// console.log(`Aylana Radiusi R =${r}\nAylana uzunligi L=${(2*r*Math.PI)}\nAylana yuzi S=${Math.PI*r**2}`);

// 16.	A va B qiymat berilgan. O’rta arifmetikini toping
// let a = +prompt('a ni qiymatni kiriting:')
// let b = +prompt('b ni qiymatni kiriting:')
// console.log(`a = ${a}\nb = ${b}\n(a+b)/2 = ${(a+b)/2}`);
// document.write(`<h1>A ni qiymati a = ${a}<br>B ni qiymat b = ${b}<br> Orta arfmetik (a+b)/2 = ${(a+b)/2}</h1>`)

// 17.	A va B berilgan. Ularning o’rta geometriyasini toping.
// let a = +prompt('a ga qiymat kiriting:')
// let b = +prompt('b ga qiymat kiriting:')
// c = Math.sqrt(a+b)
// console.log("O`rta giometrik a va b ni = ",c);
// document.write(`<h1><mark>a teng = ${a}</mark></h1> <br><h2><mark> b teng = ${b}</mark></h2> <br><h3><mark>(a+b)<sup>1/2</sup> = ${(Math.sqrt(a+b))}</mark></h3> `)

//18.  A va B berilgan. Ularning yig’indisi, ayirmasi, ko’paytmasi va o’zaro qoldiqi topilsin

// let a = +prompt("a ni kiriting:")
// let b = +prompt("b ni kiriting:")
// c = a + b
// d = a - b
// n = a * b
// m = a % b
// console.log('a + b = ',c,"\na - b = ",d,"\na * b = ",n,"\na % b = ",m);

// document.write('<b>a + b = ',`${c}<br>`,"a - b = ",`${d}<br>`,"a * b = ",`${n}<br>`,"a % b = ",`${m}</b>`)

//19. Tog`ri burchakli Uchburchakning a va b tomoni berilgan. Uchburchakning 3-tomoni c ni toping va perimetrini Parametrni toping:
// let a = +prompt('a tomoni')
// let b = +prompt('b tomoni')
// c = Math.sqrt(a**2+b**2)
// p = a + b + c
// console.log(`c tomoni = ${c}\nparametri p = a+b+c = ${p}`);
// document.write(`Uchburchakning c tomoni = ${c}<br>Uchburchak parametri = ${a + b + c}`)

// 20.	 Aylaning yuzi S berilgan. Diametri D va uzunligi L topilsin.

// let s = +prompt('S yuzi kiritilsin:')
// d = Math.sqrt(s)*2
// l = d*Math.PI
// console.log("Diometri",d,"\nuzunligi",l);

// 21.	 X va Y nuqtalar berilgan. Ularning orasidagi masofa topilsin. | X – Y |
// let a = +prompt('a ni kiriting:')
// let b = +prompt('b ni kiriting:')
// c = Math.abs(a - b)
// console.log(` a = ${a}\n b = ${b}`,"\n|a - b| = ",c);
// document.write(`a teng = ${a}<br>b teng = ${b}<br>|a - b| = ${c}`)

//22.  (x1,y1) va (x2,y2)  koordinatalar berilgan. Nuqtalar orasidagi masofani aniqlang.

// let x1 = +prompt('x1 ni kiriting:')
// let y1 = +prompt('y1 ni kiriting')
// let x2 = +prompt('x2 ni kiriting:')
// let y2 = +prompt('y2 ni kiriting:')
// c = Math.sqrt(Math.pow(x1-y1,2)+Math.pow(x2-y2,2))
// console.log(c);

// 23.	 A va B lar berilgan bo’lib, ularning qiymatlari almashtirilib yangi A va B chop etilsin

// let a = prompt('a ni kiriting')
// let b = prompt('b ni kiriting')

// console.log(`a teng = ${a}\nb teng = ${b}`,"\na teng = ",a.replace(`${a}`,`${b}`),"\nb teng = ",b.replace(`${b}`,`${a}`));
