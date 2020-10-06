function Forward () {
    basic.showString("F")
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function TurnLeft () {
    basic.showString("L")
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
maqueen.IR_callbackUser(function (message) {
    if (message == 17) {
        Forward()
    }
    if (message == 25) {
        Backward()
    }
    if (message == 20) {
        TurnLeft()
    }
    if (message == 22) {
        TurnRight()
    }
    if (message == 21) {
        Stop()
    }
})
function TurnRight () {
    basic.showString("R")
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function Stop () {
    basic.showString("X")
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
function Backward () {
    basic.showString("B")
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 120)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
basic.showIcon(IconNames.Heart)
