console.log("*****ASSİGMENT-1*****")

const n1 = +prompt("sayi1:");
const n2 = +prompt("sayi2:");
const islem = prompt("is:");
if( islem == "+" ){
    console.log(`${n1}+${n2}:${n1 + n2}`);
}else if( islem == "-" ){
    console.log(`${n1}-${n2} : ${n1 - n2}`);
}else if( islem == "*"){
    console.log(`${n1}*${n2} : ${n1 * n2}`);
}else if ( islem == "/"){
    console.log(`${n1}/${n2} : ${n1 / n2}`);
}else{
    console.log(`"Please enter operator"`);
}