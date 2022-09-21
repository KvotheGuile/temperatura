basic.forever(function () {
    if (input.temperature() == 10) {
        basic.showNumber(input.temperature())
        basic.showString("¡Vamos a esquiar!")
    } else if (input.temperature() == 20) {
        basic.showNumber(input.temperature())
        basic.showString("¡Hagamos un picnic!")
    } else if (input.temperature() == 30) {
        basic.showNumber(input.temperature())
        basic.showString("¡Vamos A la playa!")
    } else if (input.temperature() == 40) {
        basic.showNumber(input.temperature())
        basic.showString("¡Mejor no salgas!")
    } else {
        basic.showNumber(input.temperature())
    }
})
