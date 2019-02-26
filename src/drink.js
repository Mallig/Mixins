export default class Drink {
    constructor(name) {
        this.name = name;
    }

    glassDraw() {
        var x = 50
        var y = 60
        if (this.name === "tumbler") {
            return [[x, y, x, y+40], [x, y+40, x+30, y+40], [x+30, y+40, x+30, y]]
        } else if (this.name === "cocktail") {
            return [[5, 90, 45, 90], [25, 90, 25, 50], [25, 50, 0, 25], [25, 50, 50, 25]]
        }
    }
}