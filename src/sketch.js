export default function sketch(p) {
    let glassDraw = []
    let ingredientsDraw = []

    p.setup = function () {
        p.createCanvas(150, 150)
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.drink) {
            glassDraw = props.drink.glassDraw()
            ingredientsDraw = props.drink.ingredientsDraw()
        }
    }

    p.draw = function () {
        p.background(255, 204, 0)
        p.strokeWeight(5)
        for (var i = 0; i < glassDraw.length; i++) {
            p.line(glassDraw[i][0], glassDraw[i][1], glassDraw[i][2], glassDraw[i][3])
        }
        p.strokeWeight(1)
        
        for (i = 0; i < ingredientsDraw.length; i++) {
            if (p.mouseX > ingredientsDraw[i][6] && p.mouseX < ingredientsDraw[i][4] && Math.round(p.mouseY) === Math.round(ingredientsDraw[i][5])) {
                p.fill('red')
            } else {
                p.fill('white')
            }
            p.quad(ingredientsDraw[i][0], ingredientsDraw[i][1],
                   ingredientsDraw[i][2], ingredientsDraw[i][3], 
                   ingredientsDraw[i][4], ingredientsDraw[i][5], 
                   ingredientsDraw[i][6], ingredientsDraw[i][7])
        }
    }
}
