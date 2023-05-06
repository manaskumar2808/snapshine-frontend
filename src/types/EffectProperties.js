import { DEFAULT_BLUR, DEFAULT_BRIGHTNESS, DEFAULT_CONTRAST, DEFAULT_OPACITY, DEFAULT_SATURATION, DEFAULT_SHARPNESS, DEFAULT_TEMPERATURE, DEFAULT_TINT } from "@/constants/Default";

export class EffectProperties { 
    constructor(id, brightness = DEFAULT_BRIGHTNESS, contrast = DEFAULT_CONTRAST, saturation = DEFAULT_SATURATION, sharpness = DEFAULT_SHARPNESS, blur = DEFAULT_BLUR, temperature = DEFAULT_TEMPERATURE, tint = DEFAULT_TINT, opacity = DEFAULT_OPACITY) {
        this.id = id;
        this.brightness = brightness ? brightness : DEFAULT_BRIGHTNESS;
        this.contrast = contrast ? contrast : DEFAULT_CONTRAST;
        this.saturation = saturation ? saturation : DEFAULT_SATURATION;
        this.sharpness = sharpness ? sharpness : DEFAULT_SHARPNESS;
        this.blur = blur ? blur : DEFAULT_BLUR;
        this.temperature = temperature ? temperature : DEFAULT_TEMPERATURE;
        this.tint = tint ? tint : DEFAULT_TINT;
        this.opacity = opacity ? opacity : DEFAULT_OPACITY;
    }
}