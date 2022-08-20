console.log("*****ASSİGMENT-1*****");

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

// Salary Increase

// const salary = +prompt("Enter maas ")
// const newsalary =  salary <= 5500 ? `${salary*1.5}`:`${salary*1.1}`;
// console.log(`İncreased Salary ${newsalary}₺`);

//credit risk program

// const income  = +prompt("Enter İncome:");
// const expense = +prompt("Enter Expense:");

// `${income-expense}` >= 5500 && `${income-expense}` <= 5500 ? console.log("Kredi Verilir") : console.log("Kredi Verilmez");

//Grade average

let total = 0;
let piece = 0;
let again = true;

do {
  const n = prompt("Enter number or Q or q");
  if (isNaN(n)) {
    if (n === "q" || n === "Q") {
      again = false;
      break;
    } else {
      alert("Please enter a Number  or Q or q");
    }
  } else {
    total += +n;
    piece += 1;
    console.log(total, n);
  }
} while (again);
if (piece > 0) {
  console.log(`Grade average:`, total / piece);
} else {
  console.log("Not enter number, have a nice day");
}
