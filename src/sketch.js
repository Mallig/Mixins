export let drink = null
export default function sketch(p) {
    let glassDraw = []
    let ingredientsDraw = []
    let dragging = false
    let ingredient
    let offsetY
    let topIngredientLevel

    p.setup = function () {
        p.createCanvas(200, 200)
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.drink) {
            drink = props.drink
        }
    }

    p.draw = function () {
        if (drink) {
            glassDraw = drink.glassDraw()
            ingredientsDraw = drink.ingredientsDraw()
        }

        p.background(255, 204, 0)

        p.drawGlass()
        p.drawIngredients()
    }

    p.mousePressed = function () {
        for (var i = 0; i < ingredientsDraw.length; i++) {
            if (p.mouseX > ingredientsDraw[i][6] && p.mouseX < ingredientsDraw[i][4] && Math.round(p.mouseY) === Math.round(ingredientsDraw[i][5])) {
                dragging = true
                offsetY = p.mouseY - topIngredientLevel
                ingredient = Object.keys(drink.ingredients)[i]
            }
        }
    }

    p.mouseReleased = function () {
        dragging = false
    }

    p.drawGlass = function () {
        p.strokeWeight(5)
        for (var i = 0; i < glassDraw.length; i++) {
            p.line(glassDraw[i][0], glassDraw[i][1], glassDraw[i][2], glassDraw[i][3])
        }
    }

    p.drawIngredients = function () {
        p.strokeWeight(1)

        for (var i = 0; i < ingredientsDraw.length; i++) {
            if (!dragging && p.mouseX > ingredientsDraw[i][6] && p.mouseX < ingredientsDraw[i][4] && Math.round(p.mouseY) === Math.round(ingredientsDraw[i][5])) {
                p.fill('red')
            } else {
                p.fill('white')
            }

            topIngredientLevel = ingredientsDraw[ingredientsDraw.length-1][7]
            if (dragging && ingredient === Object.keys(drink.ingredients)[i]) {
                p.fill('green')
                if (topIngredientLevel > drink.rimEdge[1] && p.mouseY-offsetY > drink.rimEdge[1] && p.mouseY < ingredientsDraw[i][1]) {
                    drink.ingredients[ingredient] += (ingredientsDraw[i][5] - p.mouseY)/8
                    topIngredientLevel = ingredientsDraw[ingredientsDraw.length-1][7]
                }
            }

            p.quad(ingredientsDraw[i][0], ingredientsDraw[i][1],
                   ingredientsDraw[i][2], ingredientsDraw[i][3], 
                   ingredientsDraw[i][4], ingredientsDraw[i][5], 
                   ingredientsDraw[i][6], ingredientsDraw[i][7])
        }
    }
}
