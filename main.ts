basic.showIcon(IconNames.Yes)
servos.P2.stop()
basic.forever(function () {
    servos.P2.run(Math.map(modules.potentiometer2.position(), 0, 100, -100, 100))
})
