export default function sketch(p) {
    let glassDraw = []
    let ingredientsDraw = []
    let drink = null
    let dragging = false
    let ingredient

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
        p.tint(255, 120)
        for (var i = 0; i < ingredientsDraw.length; i++) {
            if (p.mouseX > ingredientsDraw[i][6] && p.mouseX < ingredientsDraw[i][4] && Math.round(p.mouseY) === Math.round(ingredientsDraw[i][5])) {
                p.fill('red')
            } else {
                p.fill('white')
            }

            if (dragging && ingredient === Object.keys(drink.ingredients)[i]) {
                p.fill('green')
                drink.ingredients[ingredient] += (ingredientsDraw[i][5] - p.mouseY)/8
                ingredientsDraw = drink.ingredientsDraw()
            }

            p.quad(ingredientsDraw[i][0], ingredientsDraw[i][1],
                   ingredientsDraw[i][2], ingredientsDraw[i][3], 
                   ingredientsDraw[i][4], ingredientsDraw[i][5], 
                   ingredientsDraw[i][6], ingredientsDraw[i][7])
        }
    }

}
