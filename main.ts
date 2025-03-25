function playHalf(note: number) {
    music.play(music.tonePlayable(note, 804), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playDottedQuarter(note: number) {
    music.play(music.tonePlayable(note, 589), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playQuarter(note: number) {
    music.play(music.tonePlayable(note, 375), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playTriplet(note1: number, note2: number, note3: number) {
    music.play(music.tonePlayable(note1, 268), music.PlaybackMode.UntilDone)
    music.rest(53)
    music.play(music.tonePlayable(note2, 268), music.PlaybackMode.UntilDone)
    music.rest(53)
    music.play(music.tonePlayable(note3, 161), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function playEighth(note: number) {
    music.play(music.tonePlayable(note, 161), music.PlaybackMode.UntilDone)
    music.rest(53)
}

function restWhole() {
    music.rest(1714)
}

function restHalf() {
    music.rest(857)
}

function restQuarter() {
    music.rest(428)
}

function restEighth() {
    music.rest(214)
}

function playBassIntro() {
    //  Begins on 1
    playQuarter(82)
    //  E2
    restEighth()
    playEighth(82)
    playQuarter(110)
    //  A2
    restEighth()
    playEighth(110)
    playQuarter(123)
    //  B2
    restEighth()
    playQuarter(123)
    playQuarter(123)
    playEighth(123)
    playQuarter(82)
    restEighth()
    playEighth(82)
    playQuarter(110)
    restEighth()
    playEighth(110)
    playQuarter(123)
    playQuarter(123)
    //  Queue on 3
    radio.sendNumber(2)
    playQuarter(123)
    playQuarter(123)
}

function playBassVerse() {
    for (let i = 0; i < 3; i++) {
        playQuarter(82)
        restEighth()
        playEighth(82)
        playQuarter(110)
        restEighth()
        playEighth(110)
        playQuarter(123)
        restEighth()
        playQuarter(123)
        playQuarter(123)
        playEighth(123)
    }
    playQuarter(82)
    restEighth()
    playEighth(82)
    playQuarter(110)
    restEighth()
    playEighth(110)
    playQuarter(123)
    playQuarter(123)
    playQuarter(123)
    playQuarter(123)
    //  Swap parts (queue bass on 1)
    radio.sendNumber(4)
}

function playBassBridge() {
    //  Parts swapped (queue lead on 1)
    radio.sendNumber(5)
    playQuarter(82)
    restEighth()
    playEighth(82)
    playQuarter(110)
    restEighth()
    playEighth(110)
    playQuarter(123)
    restEighth()
    playQuarter(123)
    playQuarter(123)
    playEighth(123)
    playQuarter(82)
    restEighth()
    playEighth(82)
    playQuarter(110)
    restEighth()
    playEighth(110)
    playQuarter(123)
    playQuarter(123)
    //  Queues on 3
    radio.sendNumber(6)
    playQuarter(123)
    playQuarter(123)
}

function playBassMelodyLoop() {
    playQuarter(82)
    restEighth()
    playEighth(110)
    playEighth(110)
    restEighth()
    restQuarter()
    playEighth(123)
    playEighth(123)
    playEighth(131)
    playEighth(123)
}

//  restHalf()
function playBassEnding() {
    playQuarter(82)
    restEighth()
    playEighth(110)
    playEighth(110)
    restEighth()
    restQuarter()
    for (let i = 0; i < 4; i++) {
        playEighth(123)
    }
    playTriplet(123, 123, 123)
}

function playLeadVerse() {
    let i: number;
    //  Begins on 3
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    //  Queue on 1
    radio.sendNumber(3)
    playQuarter(Note.E)
    restQuarter()
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    playQuarter(Note.B3)
    restQuarter()
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playEighth(Note.FSharp)
    playEighth(Note.GSharp)
    playQuarter(Note.FSharp)
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    playQuarter(Note.E)
    restQuarter()
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    playQuarter(Note.B3)
    restQuarter()
    restEighth()
    for (i = 0; i < 3; i++) {
        playEighth(Note.E)
    }
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playEighth(Note.FSharp)
    playEighth(Note.GSharp)
    playQuarter(Note.FSharp)
}

//  restHalf()
function playLeadBridge() {
    playQuarter(Note.E)
    playEighth(Note.GSharp)
    playEighth(Note.B)
    playQuarter(Note.CSharp5)
    playEighth(Note.CSharp5)
    playEighth(Note.B)
    playQuarter(Note.GSharp)
    playEighth(Note.GSharp)
    playQuarter(Note.GSharp)
    playDottedQuarter(Note.FSharp)
    playQuarter(Note.E)
    playEighth(Note.GSharp)
    playEighth(Note.B)
    playQuarter(Note.CSharp5)
    playEighth(Note.CSharp5)
    playEighth(Note.B)
    playDottedQuarter(Note.GSharp)
    playEighth(Note.FSharp)
}

function playLeadMelody() {
    let j: number;
    //  Begins on 3
    restEighth()
    playEighth(Note.GSharp)
    playEighth(Note.FSharp)
    playEighth(Note.E)
    for (let i = 0; i < 2; i++) {
        //  Queue bass on every other 1
        for (j = 0; j < 2; j++) {
            radio.sendNumber(7)
            playTriplet(Note.E, Note.E, Note.E)
            playTriplet(Note.E, Note.E, Note.E)
            playQuarter(Note.FSharp)
            playEighth(Note.GSharp)
            playEighth(Note.FSharp)
            restEighth()
            playEighth(Note.GSharp)
            playEighth(Note.FSharp)
            playEighth(Note.E)
        }
        radio.sendNumber(7)
        playTriplet(Note.E, Note.E, Note.E)
        playTriplet(Note.E, Note.E, Note.E)
        playQuarter(Note.GSharp)
        playEighth(Note.FSharp)
        playEighth(Note.FSharp)
        restEighth()
        playEighth(Note.GSharp)
        playQuarter(Note.FSharp)
        radio.sendNumber(7)
        playDottedQuarter(Note.E)
        playEighth(Note.FSharp)
        playQuarter(Note.GSharp)
        restQuarter()
        for (j = 0; j < 4; j++) {
            playEighth(Note.GSharp)
        }
        playTriplet(Note.GSharp, Note.FSharp, Note.E)
    }
    radio.sendNumber(8)
}

function playLeadEnding() {
    //  Plays and queues on 1
    radio.sendNumber(9)
    playDottedQuarter(Note.E)
    playEighth(Note.FSharp)
    playQuarter(Note.GSharp)
    restQuarter()
    playEighth(Note.GSharp)
    playEighth(Note.GSharp)
    playEighth(Note.GSharp)
    playEighth(Note.GSharp)
    playTriplet(Note.GSharp, Note.FSharp, Note.E)
}

//  to tell other unit to start bass
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    playBassIntro()
})
radio.onReceivedNumber(function on_received_number(receivedNum: number) {
    if (receivedNum == 1) {
        playBassIntro()
    }
    
    if (receivedNum == 2) {
        playLeadVerse()
    }
    
    if (receivedNum == 3) {
        playBassVerse()
    }
    
    if (receivedNum == 4) {
        playBassBridge()
    }
    
    if (receivedNum == 5) {
        playLeadBridge()
    }
    
    if (receivedNum == 6) {
        playLeadMelody()
    }
    
    if (receivedNum == 7) {
        playBassMelodyLoop()
    }
    
    if (receivedNum == 8) {
        playLeadEnding()
    }
    
    if (receivedNum == 9) {
        playBassEnding()
    }
    
})
basic.forever(function on_forever() {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    pause(1000)
})
