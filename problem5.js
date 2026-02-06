function analyzeText(str) {
     if(typeof str !== "string"){
        return "Invalid";
    }
    if(str === ""){
        return "Invalid"
    }

    let split = str.split(" ");
    let longwords = split[0];

    for (const element of split) {
        if(element.length > longwords.length){
            longwords = element;
        }
    }
    
    let join = split.join("");
    let token = join.length;
    return {
        longwords,
        token
}
}

let output = analyzeText("");
console.log(output);