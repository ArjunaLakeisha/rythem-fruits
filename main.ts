input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
