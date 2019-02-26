export default class Drink {
    constructor(glass, ingredients) {
        this.glass = glass;
        this.ingredients = ingredients;
    }

    glassDraw(x = 55, y = 80) {
        if (this.glass === "tumbler") {
            return [[x, y, x, y+40], [x, y+40, x+40, y+40], [x+40, y+40, x+40, y]]
        } else if (this.glass === "cocktail") {
            return this.drawCocktailGlass()
        }
    }

    drawCocktailGlass(canvasHeight = 150, canvasWidth = 150) {
        let stemHeight = 50
        let baseWidth = 40
        let bowlWidth = 50
        let bowlHeight = 25

        let x = canvasWidth/2 - baseWidth/2
        let y = canvasHeight/2 + (stemHeight + bowlHeight)/2

        let base = [x, y, x + baseWidth, y]
        let stem = [x + baseWidth/2, y, x + baseWidth/2, y - stemHeight]
        let leftRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 - bowlWidth/2, y - stemHeight - bowlHeight]
        let rightRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 + bowlWidth/2, y - stemHeight - bowlHeight]
    
        return [base, stem, leftRim, rightRim]
    }

}