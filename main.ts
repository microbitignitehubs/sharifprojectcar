radio.onReceivedNumber(function (receivedNumber) {
    if (("receivednumber" as any) == ("command_stop" as any)) {
        basic.showIcon(IconNames.Square)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    command_turn_right = 1
    basic.showIcon(IconNames.Chessboard)
})
let command_stop = 0
let roll = 0
let set_roll_to = 0
let command = 0
let set_command_to = 0
let is_controller = 0
let command_turn_right = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(1)
radio.setTransmitSerialNumber(false)
let is__controller_to = 0
let command_turn_left = 2000
command_turn_right = 3000
basic.forever(function () {
    basic.pause(100)
    if (is_controller) {
        set_command_to = command_turn_right
        radio.sendNumber(command)
    }
})
basic.forever(function () {
    if (is_controller) {
        set_command_to = command_turn_right
        set_roll_to = input.rotation(Rotation.Roll)
    }
    if (roll > 45) {
        basic.showArrow(ArrowNames.East)
        if (roll < -45) {
            basic.showArrow(ArrowNames.West)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    } else {
        radio.sendNumber(command)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (true) {
        command = command_stop
        roll = input.rotation(Rotation.Roll)
        if (roll < 45) {
            basic.showArrow(ArrowNames.East)
            command_stop = command_turn_left
        } else {
        	
        }
    }
})
