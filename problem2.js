function validOtp(otp) {
    if(typeof otp !== "string"){
        return "Invalid";
    }

    if(otp.startsWith("ph-") && otp.length === 8){
        return true;
    } else {
        return false;
    }
}

let output =validOtp("ph-12346");
console.log(output);