// 1.	Eldor ning yoshi X, Aziza ning yoshi – Y. Ularning o’rtacha yoshini aniqlang va har bir bolaning o’rtacha yoshdan farqini toping.
// let x = +prompt('Eldorni yoshni kiriting:')
// let y = +prompt('Azizani yoshni kiriting:')
// c = (x+y)/2
// d = x - c
// n = y - c
// console.log(`Eldorning yoshi = ${x}\nAzizaning yoshi =${y}\nUlarning ortasha yoshi = ${c}`);
// console.log('Eldorning yoshni ortacha yoshdan farqi =',d,'\nAzizaning yoshni ortacha yoshdan farqi =',n);
// 2.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”
// let a = +prompt('a sonni kiriting:')
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

// 3.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni juft”
// let a = prompt('a sonni kiriting')
// let b = a < 0 ? 'a son manfi'
//                 : a % 2==0 ? 'a son juft son'
//                     : 'Toq son'
// console.log(b);
// if (a %2 == 0) {
//     c = 'a soni juft'
// }
// else if (a % 2 != 0 ){
//     c = 'a son toq'
// }
// else {c = 'Raqam kiriting'}
// console.log(c);

// 4.	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni 5 ga karrali”

// let a = +prompt(' a ni kiritng:')
// c = a % 5 == 0 ? 'a soni beshga karrali'
//                 : 'a son 5 ga karrali emas'

// document.write(`a son =${a} <br>${c}`)
// let a = confirm('Salom ketdikmi?')
// console.log(a ? 'Tezroq bol!' : 'Biz ketdik');

// 5.	A va B sonlar berilgan. Quyidagi gapni tekshiring: “A > 2 va B<=3”
// 8.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda o’zgarishsiz qolsin. Natijani chop eting

// let a = +prompt(' a ni kiriting: ')
// console.log('a soni =',a);
// c = a > 0 ? `a soni musbat va 1 ga oshrildi = ${++a}` : `a soni manfiy bolgani uchun ozgarmadi${a}`
// console.log(c);

// 9.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda ikkiga kamaytirilsin. Natijani chop eting
// let a = +prompt(' a ni kiriting: ')
// console.log('a soni =',a);
// c = a > 0 ? `a soni musbat va 1 ga oshrildi = ${++a}` : `a soni manfiy bolgani uchun 2 ga kamydi${--a-1}`
// console.log(c);

// 10.	A soni berilgan. Agarda musbat bo’lsa qiymati ikki barobar oshirilsin, aks holda 2 ga kamaytirilsin, agarda 0 ga teng bo’lsa, qiymatini 10 bilan almashtirilsin. Natijani chop eting
// let a = +prompt(' a ni kiriting')
// console.log('a soni =',a);
// c = a > 0 ? `a soni musbat bolgani uchun 2 barobar oshrildi ${a*2}`
//             : a ==0 ? `a soni 0 ga teng bolgani uchun 10 ga ozgardi a = ${a=10}`
//             : `a soni manfiy bolgani uchun 2 ga kamaytirildi ${--a-1}`
// console.log(c);

// 16.	N soni berilgan. N ga to’g’ri keluvchi hafta kunini chop eting
// let kun = +prompt('n ga son kiriting')
// console.log('Agar Dushanba kun  oyning 1-kuniga togri kelsa');
// switch(kun){
//     case 1 :
//     case 8 :
//     case 15 :
//     case 22 :
//     case 29 :
//         console.log('Dushanba');
//     break
//     case 2 :
//     case 9 :
//     case 16 :
//     case 23 :
//     case 30 :
//         console.log('Seshanba');
//     break
//     case 3 :
//     case 10 :
//     case 17 :
//     case 24 :
//     case 31 :
//         console.log('Chorshanba');
//     break
//     case 4 :
//     case 11 :
//     case 18 :
//     case 25 :
//         console.log('Payshanba');
//     break
//     case 5 :
//     case 12 :
//     case 19 :
//     case 26 :
//         console.log('Juma');
//     break
//     case 6:
//     case 13 :
//     case 20 :
//     case 27 :
//         console.log('Shanba');
//     break
//     case 7:
//     case 14 :
//     case 21 :
//     case 28 :
//         console.log('Yakshanba');
//     break
//     default :
//     console.log('Iltimos 1 dan 31 gacha raqam kiriting');

// }

// 17.	M soni berilgan. M ga to’g’ri keluvchi oy nomini chop eting
// let m = +prompt('m ni kiriting:')
// c = m == 1 ? 'Yanvar' :
//     m == 2 ? 'Fevral':
//     m == 3 ? 'Mart':
//     m == 4 ? 'Aprel':
//     m == 5 ? 'May':
//     m == 6 ? 'Iyun':
//     m == 7 ? 'Iyul':
//     m == 8 ? 'Avgust':
//     m == 9 ? 'Sentabr':
//     m == 10 ? 'Oktabr':
//     m == 11 ? 'Noyabr':
//     m == 12 ? 'Dekabr':
//     'Siz 1 dan 12 gacha son kiriting'
// console.log(c);
// document.write(`${c}`)

// 18.	Y soni berilgan. Berilgan Y qiymatdagi yilning kabisaligini tekshiring
// shart yil 400 ga bolinsa va 4 ga bolinsa,ammo 100 ga bolinmasa
// let yil = +prompt(' yil kiriting:')
// if (yil % 100 != 0 && yil % 4 == 0 || yil % 400 == 0){
//     console.log('Kabisa yili');
// }else {console.log('Kabisa yili emas');}

// 19.	Bokschining vazni berilgan. Vazn qiymatiga qarab. Yengil vazn (60gacha), Birinchi o’rta vazn (64gacha), O’rta vazn (69gacha). Qaysi kategoriyaga to’g’ri kelishini aniqlang
// let kg = +prompt('Bokischi kg ni kiritng:')
// c = kg <= 60 ? 'Yengil vazin':
//     kg >= 61 && kg <= 64 ? 'Birinchi orta vazin':
//     kg >=65 && kg <=69 ? 'Orta vazin':
//     'Og`ir vazin'
// document.write(`Bokischi vazini ${kg} <br>Bokschi ${c}`)