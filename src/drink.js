export default class Drink {
    constructor(glassType, ingredients) {
        this.glassType = glassType;
        this.ingredients = ingredients;
        this.bowlCenterBase = null;
        this.bowlWidth = null;
        this.rimEdge = null;
    }

    glassDraw() {
        if (this.glassType === "tumbler") {
            return this.drawTumbler()
        } else if (this.glassType === "cocktail") {
            return this.drawCocktailGlass()
        }
    }

    ingredientsDraw() {
        if (this.glassType === "tumbler") {
            return this.drawTumblerIngredients()
        } else if (this.glassType === "cocktail") {
            return this.drawCocktailIngredients()
        }
    }

    drawTumblerIngredients() {
        let draw = []
        let x = this.bowlCenterBase[0] - this.bowlWidth/2
        let y = this.bowlCenterBase[1]

        for (var key in this.ingredients) {
            draw.push([
                x +3, y -2,
                x + this.bowlWidth -2, y-2, 
                x + this.bowlWidth -2, y - (this.ingredients[key] * 8) -2, 
                x +3, y - (this.ingredients[key] * 8) -2
            ])
            y -= this.ingredients[key]*8
        }

        return draw
    }

    drawCocktailIngredients() {
        let draw = []
        let xBase = this.bowlCenterBase[0]
        let yBase = this.bowlCenterBase[1] 
        let xRim = this.rimEdge[0]
        let yRim = this.rimEdge[1]

        let x1, x2, y1, y2
        let y3 = yBase
        let x3 = (xRim + (yRim - y3)/(yRim - yBase) * (xBase - xRim))
        let x4 = ((xRim - this.bowlWidth) - (yRim - y3)/(yRim - yBase) * (xBase - xRim))
        let y4 = y3

        for (var key in this.ingredients) {
            x1 = x4
            y1 = y4
            x2 = x3
            y2 = y3
            y3 = y2 - this.ingredients[key]*8
            x3 = (xRim + (yRim - y3)/(yRim - yBase) * (xBase - xRim))
            x4 = ((xRim - this.bowlWidth) - (yRim - y3)/(yRim - yBase) * (xBase - xRim))
            y4 = y3

            draw.push([x1+1, y1-2, x2, y2-2, x3, y3-2, x4+1, y4-2])
        }
        return draw
    }

    drawCocktailGlass(canvasHeight = 200, canvasWidth = 200) {
        let stemHeight = 45
        let baseWidth = 50
        let bowlWidth = 70
        let bowlHeight = 50

        let x = canvasWidth/2 - baseWidth/2
        let y = canvasHeight/2 + (stemHeight + bowlHeight)/2

        let base = [x, y, x + baseWidth, y]
        let stem = [x + baseWidth/2, y, x + baseWidth/2, y - stemHeight]
        let leftRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 - bowlWidth/2, y - stemHeight - bowlHeight]
        let rightRim = [x + baseWidth/2, y - stemHeight, x + baseWidth/2 + bowlWidth/2, y - stemHeight - bowlHeight]
    
        this.bowlWidth = bowlWidth
        this.bowlCenterBase = [canvasWidth/2, y - stemHeight]
        this.rimEdge = [x + baseWidth/2 + bowlWidth/2, y - stemHeight - bowlHeight]

        return [base, stem, leftRim, rightRim]
    }

    drawTumbler(canvasWidth = 200, canvasHeight = 200) {
        let baseWidth = 60
        let bowlHeight = 60

        let x = canvasWidth/2 - baseWidth/2
        let y = canvasHeight/2 + bowlHeight/2

        let base = [x, y, x + baseWidth, y]
        let leftRim = [x, y, x, y - bowlHeight]
        let rightRim = [x + baseWidth, y, x + baseWidth, y - bowlHeight]

        this.bowlWidth = baseWidth
        this.bowlCenterBase = [canvasWidth/2, y]
        this.rimEdge = [x + baseWidth, y - bowlHeight]

        return [base, leftRim, rightRim]
    }
}