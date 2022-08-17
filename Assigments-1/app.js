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

let day = +prompt("Enter days between 1-7 ")

switch(day){
    case 1: alert(`Today is Monday`);
        break;
    case 2: alert(`Today is Tuesday`);
        break;
    case 3: alert(`Today is Wednesday`);
        break;
    case 4: alert(`Today is Thursday`);
        break;
    case 5: alert(`Today is Friday`);
        break;
    case 6: alert(`Today is Saturday`);
        break;
    case 7: alert(`Today is Sunday`);
    default:
        alert("Should be between day 1-7")
        break;
}
// console.log(outday);