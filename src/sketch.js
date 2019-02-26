export default function sketch(p) {
    let glassDraw = []

    p.setup = function () {
        p.createCanvas(150, 150)
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        glassDraw = props.glassDraw
    }

    p.draw = function () {
        p.background(255, 204, 0)
        for (var i = 0; i < glassDraw.length; i++) {
            p.line(glassDraw[i][0], glassDraw[i][1], glassDraw[i][2], glassDraw[i][3])
        }
    }
}
