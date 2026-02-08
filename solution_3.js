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