function Forward () {
    basic.showString("F")
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function TurnLeft () {
    basic.showString("L")
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorStop(maqueen.Motors.All)
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
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function Stop () {
    basic.showString("X")
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
function Backward () {
    basic.showString("B")
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 120)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
let distance = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(100)
    if (distance <= 30) {
        Stop()
    }
})
