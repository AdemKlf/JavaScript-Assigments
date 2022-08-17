console.log("*****ASSİGMENT-1*****")

//Basic Calculator

// const n1 = +prompt("sayi1:");
// const n2 = +prompt("sayi2:");
// const islem = prompt("is:");
// if( islem == "+" ){
//     console.log(`${n1}+${n2}:${n1 + n2}`);
// }else if( islem == "-" ){
//     console.log(`${n1}-${n2} : ${n1 - n2}`);
// }else if( islem == "*"){
//     console.log(`${n1}*${n2} : ${n1 * n2}`);
// }else if ( islem == "/"){
//     console.log(`${n1}/${n2} : ${n1 / n2}`);
// }else{
//     console.log(`"Please enter operator"`);
// }


//Week Days

// let day = +prompt("Enter days between 1-7 ")

// switch(day){
//     case 1: alert(`InClass`);
//         break;
//     case 2: alert(`InClass`);
//         break;
//     case 3: alert(`InClass`);
//         break;
//     case 4: alert(`InClass`);
//         break;
//     case 5: alert(`Teamwork`);
//         break;
//     case 6: alert(`InClass + Workshop`);
//         break;
//     case 7: alert(`Self-Study`);
//     default:
//         alert("Should be between day 1-7")
//         break;
// }
// console.log(outday);

// const mass = {
//     aylik: 1000, }

// console.log(mass)

// const maas = mass;

// maas.aylik = (`${mass.aylik * 5}`);
// console.log(mass);

Salary Increase

const maas = +prompt("Enter maas ")
const newmaas =  maas <= 5500 ? `${maas*1.5}`:`${maas*1.1}`;
console.log(`İncreased Salary ${newmaas}₺`);