def playHalf(note):
    music.play(music.tone_playable(note, 804), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def playDottedQuarter(note):
    music.play(music.tone_playable(note, 589), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def playQuarter(note):
    music.play(music.tone_playable(note, 375), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def playTriplet(note1, note2, note3):
    music.play(music.tone_playable(note1, 268), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
    music.play(music.tone_playable(note2, 268), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)
    music.play(music.tone_playable(note3, 161), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def playEighth(note):
    music.play(music.tone_playable(note, 161), music.PlaybackMode.UNTIL_DONE)
    music.rest(53)

def restWhole():
    music.rest(1714)

def restHalf():
    music.rest(857)

def restQuarter():
    music.rest(428)

def restEighth():
    music.rest(214)

def playBassIntro():
    # Begins on 1
    playQuarter(82) # E2
    restEighth()
    playEighth(82)
    playQuarter(110) # A2
    restEighth()
    playEighth(110)
    playQuarter(123) # B2
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

    # Queue on 3
    radio.send_number(2)

    playQuarter(123)
    playQuarter(123)

def playBassVerse():
    for i in range(3):
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
    playQuarter(123)
    playQuarter(123)

    # Swap parts (queue bass on 1)
    radio.send_number(4)

def playBassBridge():
    # Parts swapped (queue lead on 1)
    radio.send_number(5)

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
    
    # Queues on 3
    radio.send_number(6)

    playQuarter(123)
    playQuarter(123)

def playBassMelodyLoop():
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
    # restHalf()

def playBassEnding():
    playQuarter(82)
    restEighth()
    playEighth(110)
    playEighth(110)
    restEighth()
    restQuarter()
    for i in range(4):
        playEighth(123)
    playTriplet(123, 123, 123)

def playLeadVerse():
    # Begins on 3
    restEighth()
    for i in range(3):
        playEighth(Note.E)

    # Queue on 1
    radio.send_number(3)

    playQuarter(Note.E)
    restQuarter()
    restEighth()
    for i in range(3):
        playEighth(Note.E)
    playQuarter(Note.B3)
    restQuarter()
    restEighth()
    for i in range(3):
        playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playEighth(Note.FSHARP)
    playEighth(Note.GSHARP)
    playQuarter(Note.FSHARP)
    restEighth()
    for i in range(3):
        playEighth(Note.E)
    playQuarter(Note.E)
    restQuarter()
    restEighth()
    for i in range(3):
        playEighth(Note.E)
    playQuarter(Note.B3)
    restQuarter()
    restEighth()
    for i in range(3):
        playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playQuarter(Note.E)
    playEighth(Note.E)
    playEighth(Note.E)
    playEighth(Note.FSHARP)
    playEighth(Note.GSHARP)
    playQuarter(Note.FSHARP)
    # restHalf()
    
def playLeadBridge():

    playQuarter(Note.E)
    playEighth(Note.GSHARP)
    playEighth(Note.B)
    playQuarter(Note.CSHARP5)
    playEighth(Note.CSHARP5)
    playEighth(Note.B)
    playQuarter(Note.GSHARP)
    playEighth(Note.GSHARP)
    playQuarter(Note.GSHARP)
    playDottedQuarter(Note.FSHARP)
    playQuarter(Note.E)
    playEighth(Note.GSHARP)
    playEighth(Note.B)
    playQuarter(Note.CSHARP5)
    playEighth(Note.CSHARP5)
    playEighth(Note.B)
    playDottedQuarter(Note.GSHARP)
    playEighth(Note.FSHARP)

def playLeadMelody():
    # Begins on 3
    restEighth()
    playEighth(Note.GSHARP)
    playEighth(Note.FSHARP)
    playEighth(Note.E)

    for i in range(2):
        # Queue bass on every other 1
        for j in range(2):
            radio.send_number(7)
        
            playTriplet(Note.E, Note.E, Note.E)
            playTriplet(Note.E, Note.E, Note.E)
            playQuarter(Note.FSHARP)
            playEighth(Note.GSHARP)
            playEighth(Note.FSHARP)
            restEighth()
            playEighth(Note.GSHARP)
            playEighth(Note.FSHARP)
            playEighth(Note.E)
        
        radio.send_number(7)
        
        playTriplet(Note.E, Note.E, Note.E)
        playTriplet(Note.E, Note.E, Note.E)
        playQuarter(Note.GSHARP)
        playEighth(Note.FSHARP)
        playEighth(Note.FSHARP)
        restEighth()
        playEighth(Note.GSHARP)
        playQuarter(Note.FSHARP)
        
        radio.send_number(7)
        
        playDottedQuarter(Note.E)
        playEighth(Note.FSHARP)
        playQuarter(Note.GSHARP)
        restQuarter()
        for j in range(4):
            playEighth(Note.GSHARP)
        playTriplet(Note.GSHARP, Note.FSHARP, Note.E)

    radio.send_number(8)

def playLeadEnding():
    # Plays and queues on 1
    radio.send_number(9)
    playDottedQuarter(Note.E)
    playEighth(Note.FSHARP)
    playQuarter(Note.GSHARP)
    restQuarter()
    playEighth(Note.GSHARP)
    playEighth(Note.GSHARP)
    playEighth(Note.GSHARP)
    playEighth(Note.GSHARP)
    playTriplet(Note.GSHARP, Note.FSHARP, Note.E)

def on_button_pressed_a():
    radio.send_number(1) # to tell other unit to start bass

def on_button_pressed_b():
    playBassIntro()

def on_received_number(receivedNum):
    if receivedNum == 1:
        playBassIntro()
    if receivedNum == 2:
        playLeadVerse()
    if receivedNum == 3:
        playBassVerse()
    if receivedNum == 4:
        playBassBridge()
    if receivedNum == 5:
        playLeadBridge()
    if receivedNum == 6:
        playLeadMelody()
    if receivedNum == 7:
        playBassMelodyLoop()
    if receivedNum == 8:
        playLeadEnding()
    if receivedNum == 9:
        playBassEnding()

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
radio.on_received_number(on_received_number)

def on_forever():
    basic.show_leds("""
        # # # . .
        # . . # .
        # # # . .
        # . . . .
        # . . . .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # . . # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        """)
    pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    pause(1000)
basic.forever(on_forever)