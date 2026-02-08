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
