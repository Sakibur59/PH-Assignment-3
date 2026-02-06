function finalScore(omr) {
    let total = omr.right + omr.wrong + omr.skip;

    if(total !== 100) {
        return "Invalid";
    }

    let score = (omr.right * 1) - (omr.wrong * 0.5) + (omr.skip * 0)
    let final = Math.round(score);
    return final;
    
}

let output = finalScore({"right":67,"wrong":23,"skip":10})

console.log(output);