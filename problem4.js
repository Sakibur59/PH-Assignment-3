function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid"
    }
    let count = 0;
    let count2 = 0
    for (const element of array) {
        if(element === "ha"){
            count++
        } else if (element === "na"){
            count2++
        }
    }

    if(count > count2){
        return true;
    } else if (count === count2){
        return "equal"
    } else {
        return false;
    }
}

let output = gonoVote(["ha","na","na","ha","ha"]);
console.log(output);