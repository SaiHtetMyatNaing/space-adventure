import kaplay from "kaplay";


export default function initKaplay(canvas : HTMLCanvasElement) {
     return kaplay({
        width : 1920,
        height : 1080,
        letterbox : true,
        global: false,
        debug : true ,
        debugKey : 'd',
        canvas: canvas,
        pixelDensity : devicePixelRatio,
     })
}



