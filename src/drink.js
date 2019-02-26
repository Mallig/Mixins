export default class Drink {
    constructor(glassType, ingredients) {
        this.glassType = glassType;
        this.ingredients = ingredients;
    }

    glassDraw(x = 55, y = 80) {
        if (this.glassType === "tumbler") {
            return this.drawTumbler()
        } else if (this.glassType === "cocktail") {
            return this.drawCocktailGlass()
        }
    }

    drawCocktailGlass(canvasHeight = 150, canvasWidth = 150) {
        let stemHeight = 45
        let baseWidth = 50
        let bowlWidth = 60
        let bowlHeight = 35

        let x = canvasWidth/2 - baseWidth/2
        let y = canvasHeight/2 + (stemHeight + bowlHeight)/2

        let base = [x, y, x + baseWidth, y]
        let stem = [x + baseWidth/2, y, x + baseWidth/2, y - stemHeight]
        let leftRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 - bowlWidth/2, y - stemHeight - bowlHeight]
        let rightRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 + bowlWidth/2, y - stemHeight - bowlHeight]
    
        return [base, stem, leftRim, rightRim]
    }

    drawTumbler(canvasWidth = 150, canvasHeight = 150) {
        let baseWidth = 60
        let bowlHeight = 60

        let x = canvasWidth/2 - baseWidth/2
        let y = canvasHeight/2 + bowlHeight/2

        let base = [x, y, x + baseWidth, y]
        let leftRim = [x, y, x, y - bowlHeight]
        let rightRim = [x + baseWidth, y, x + baseWidth, y - bowlHeight]

        return [base, leftRim, rightRim]
    }

}