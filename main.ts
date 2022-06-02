input.onButtonPressed(Button.A, function () {
    p.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    p.change(LedSpriteProperty.X, 1)
})
let a1: game.LedSprite = null
let p: game.LedSprite = null
p = game.createSprite(2, 4)
for (let index = 0; index < 20; index++) {
    a1 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        a1.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    a1.delete()
}
basic.forever(function () {
    music.playMelody("D G A B C5 B C5 C5 ", 120)
    serial.writeNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    ))
})
