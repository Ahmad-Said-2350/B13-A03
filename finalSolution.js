function newPrice(currentPrice , discount ) {
        if(typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100 

        ){ 
                return "Invalid";

}

// if( discount < 0 || discount > 100){
//     return "Invalid";
// }


let discountAmount = currentPrice * discount / 100;
let newPriceAmount = currentPrice - discountAmount;
return newPriceAmount.toFixed(3);

}

// let output = newPrice(2000,17.17);
// console.log(output);



function validOtp(otp) {
    if(typeof otp !== "string"){
        return "Invalid";
    }

    if(otp.length !== 8){
        return false;
    }

    if(otp.startsWith("ph-") !== true){
        return false;
    }

    return true;
}

// let output = validOtp(23456)
// console.log(output);


function finalScore (omr) {
    if(typeof omr !== "object" || omr === null || Array.isArray (omr) ){
        return "Invalid";

    }

    if(typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number"){
        return "Invalid"

    }

    let total = omr.right + omr.wrong + omr.skip;
    if(total !== 100){
        return "Invalid";
    }

    let score = omr.right * 1 + omr.wrong * (-0.5) + omr.skip * 0;

    return Math.round(score);
}

// let output = finalScore(
// { right: 50, wrong: 10, skip: 40 }

// );
// console.log(output);


function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for(let i = 0; i < array.length; i ++){
        if(array[i] === "ha"){
            haCount ++;
        }

        else if(array[i] === "na"){
            naCount ++;
        }
    }

    if( haCount > naCount){
        return true;
    }
    else if(haCount === naCount){
        return "equal"
    }
    else{
        return false;
    }


}


// let output = gonoVote(
//     ["ha", "ha", "ha", "na"]
// );
// console.log(output);


function  analyzeText(str) {
    if(typeof str !== "string"){
        return "Invalid";
    }

    if(str.trim().length === 0){
        return "Invalid";
    }

    let words = str.split(" ");


    let longestWord = "";
    for (let i = 0; i < words.length;i++){
        
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }

    let textWithoutSpaces = str.split(" ").join("");
    let tokenCount = textWithoutSpaces.length;

    return{
        longestWord,
        token: tokenCount
    };
}

// let output = analyzeText(
//     "Keep coding keep shining"
// );
// console.log(output);
