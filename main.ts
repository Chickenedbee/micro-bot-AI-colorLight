let strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1, 10, PlanetX_Display.NeoPixelMode.RGB)
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.black)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Black))
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.white)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.blue)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Blue))
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.green)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Green))
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.yellow)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Yellow))
    }
    if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
    }
})
