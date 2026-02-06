function newPrice(currentPrice, discount) {
    if(typeof currentPrice !== "number" || typeof discount !== "number" || discount > 100){
        return "Invalid";
    }
    let dis = (currentPrice* discount) / 100;
    let result = currentPrice - dis;
    return result;
}

let output = newPrice(2000,17.17).toFixed(3);
console.log(output);