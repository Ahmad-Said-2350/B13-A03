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