export default function sketch(p) {
    let glassDraw = []
    let ingredientsDraw = []

    p.setup = function () {
        p.createCanvas(150, 150)
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        glassDraw = props.glassDraw
        ingredientsDraw = props.ingredientsDraw
    }

    p.draw = function () {
        p.background(255, 204, 0)
        p.strokeWeight(5)
        for (var i = 0; i < glassDraw.length; i++) {
            p.line(glassDraw[i][0], glassDraw[i][1], glassDraw[i][2], glassDraw[i][3])
        }
        p.strokeWeight(1)
        for (i = 0; i < ingredientsDraw.length; i++) {
            p.quad(ingredientsDraw[i][0], ingredientsDraw[i][1],
                   ingredientsDraw[i][2], ingredientsDraw[i][3], 
                   ingredientsDraw[i][4], ingredientsDraw[i][5], 
                   ingredientsDraw[i][6], ingredientsDraw[i][7])
        }
    }
}
