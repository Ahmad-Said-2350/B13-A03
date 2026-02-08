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
        longwords:longestWord,
        token: tokenCount
    };
}

// let output = analyzeText(
//     "Keep coding keep shining"
// );
// console.log(output);


