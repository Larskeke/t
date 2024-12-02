input.onButtonPressed(Button.A, function () {
    voeden += voeden + 5
})
input.onButtonPressed(Button.AB, function () {
    knuffel += knuffel + 5
})
let voeden = 0
let knuffel = 0
knuffel = 5
voeden = 5
let dood = 0
basic.forever(function () {
    knuffel += -1
    basic.pause(1000)
})
basic.forever(function () {
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (dood == 0) {
        if (knuffel >= 10 && voeden >= 10) {
            basic.showIcon(IconNames.Happy)
        }
        if (voeden < 10 && voeden >= 5 || knuffel < 10 && knuffel >= 5) {
            basic.showIcon(IconNames.Asleep)
        }
        if (knuffel <= 0 || voeden <= 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            dood = 1
        }
    }
})
