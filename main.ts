let knuffel = 5
let voeden = 5
basic.forever(function () {
    knuffel += knuffel - 1
    basic.pause(1000)
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        voeden += voeden + 5
    }
})
basic.forever(function () {
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        knuffel += knuffel + 5
    }
})
basic.forever(function () {
    voeden += voeden - 1
    basic.pause(1000)
})
basic.forever(function () {
    if ((knuffel || voeden) >= 10) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if ((knuffel && voeden) < 10) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if ((knuffel || voeden) <= 0) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if ((knuffel || voeden) < 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
