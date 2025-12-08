basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
    if (input.lightLevel() > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    }
    if (input.lightLevel() < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.InBackground)
    } else {
    	
    }
})
