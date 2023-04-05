
/**
 * @param {{ingredient: String, amount: Number}} recipe 
 * @param {{ingredient: String, amount: Number}} available 
 * @returns Number of cakes that can be made with the available ingredients
 */
export function cakes(recipe, available) {
    return (Object.keys(recipe).every(Object.prototype.hasOwnProperty.bind(available)) ? howManyCakes(recipe, available) : 0)
}

/**
 * @param {{ingredient: String, amount: Number}} recipe 
 * @param {{ingredient: String, amount: Number}} available 
 * @returns Number of cakes that can be made with the available ingredients
 */
function howManyCakes(recipe, available) {

    var answer = 0
    var min = Number.MAX_VALUE;

    let recipeArr = Object.entries(recipe);
    if (recipeArr.length < 1) {
        return 0
    }
    for (let i = 0; i < recipeArr.length; i++) {
        answer = Math.floor(available[recipeArr[i][0]] / recipeArr[i][1]);

        if (available[recipeArr[i][0]] == 0) {
            min = 0;
            break;
        } else if (answer < min) {
            min = answer
        }
    }

    return min
}