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
