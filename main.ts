input.onButtonPressed(Button.A, function () {
    p.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    p.change(LedSpriteProperty.X, 1)
})
let a1: game.LedSprite = null
let p: game.LedSprite = null
let marks = 0
p = game.createSprite(2, 4)
for (let index = 0; index < 25; index++) {
    a1 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        a1.change(LedSpriteProperty.Y, 1)
        marks += 1
        if (a1.isTouching(p)) {
            p.delete()
            basic.showString("game over")
            basic.showString("" + (marks))
        }
        basic.pause(250)
    }
    a1.delete()
}
p.delete()
basic.showString("win")
basic.forever(function () {
    music.playMelody("D G A B C5 B C5 C5 ", 120)
    serial.writeNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    ))
})
