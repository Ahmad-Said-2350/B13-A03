function newPrice(currentPrice, discount) {
    // validation check
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return "Invalid";
    }
    
    // discount range check
    if (discount < 0 || discount > 100) {
        return "Invalid";
    }
    
    // calculate discount amount
    const discountAmount = (currentPrice * discount) / 100;
    
    // calculate new price
    const newPriceValue = currentPrice - discountAmount;
    
    // return with 3 decimal places
    return parseFloat(newPriceValue.toFixed(3));
}












function validOtp(otp) {
    // check if input is string
    if (typeof otp !== 'string') {
        return "Invalid";
    }
    
    // check length is 8
    if (otp.length !== 8) {
        return false;
    }
    
    // check if starts with "ph-"
    if (otp.startsWith("ph-") === false) {
        return false;
    }
    
    return true;
}







function finalScore(omr) {
    // check if input is object
    if (typeof omr !== 'object' || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }
    
    // check if right, wrong, skip exist and are numbers
    if (typeof omr.right !== 'number' || typeof omr.wrong !== 'number' || typeof omr.skip !== 'number') {
        return "Invalid";
    }
    
    // check if sum is 100
    const total = omr.right + omr.wrong + omr.skip;
    if (total !== 100) {
        return "Invalid";
    }
    
    // calculate score
    // right: +1, wrong: -0.5, skip: 0
    const score = omr.right * 1 + omr.wrong * (-0.5) + omr.skip * 0;
    
    // return rounded score
    return Math.round(score);
}




function gonoVote(array) {
    // check if input is array
    if (!Array.isArray(array)) {
        return "Invalid";
    }
    
    // count votes
    let haCount = 0;
    let naCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haCount++;
        } else if (array[i] === "na") {
            naCount++;
        }
    }
    
    // compare and return
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}

function analyzeText(str) {
    // check if input is string
    if (typeof str !== 'string') {
        return "Invalid";
    }
    
    // check if string is empty or only spaces
    if (str.trim().length === 0) {
        return "Invalid";
    }
    
    // split into words
    const words = str.split(' ');
    
    // find longest word
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    // count total characters without spaces
    const textWithoutSpaces = str.split(' ').join('');
    const tokenCount = textWithoutSpaces.length;
    
    // return object
    return {
        longwords: longestWord,
        token: tokenCount
    };
}

