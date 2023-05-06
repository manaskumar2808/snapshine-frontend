import { EffectType } from "@/types/EffectType";
import { EffectPropertiesMap } from "./effect-properties";

export const EffectTitle = {
    DARKEN: 'Darken',
    FLASH: 'Flash',
    PORTRAIT: 'Portrait',
    SUNSET: 'Sunset',
    THEATRE: 'Theatre',
    FOOD: 'Food',
    SAND: 'Sand',
    BACKIT: 'Backit',
    NIGHT: 'Night',
    SHADE: 'Shade',
    CLOUDY: 'Cloudy',
    LANDSCAPE: 'Landscape',
    FLUORESCENT: 'Fluoresent',
}

export const EffectMap = {
    Darken: new EffectType('e00', EffectTitle.DARKEN, EffectPropertiesMap.Darken.id),
    Flash: new EffectType('e01', EffectTitle.FLASH, EffectPropertiesMap.Flash.id),
    Portrait: new EffectType('e02', EffectTitle.PORTRAIT, EffectPropertiesMap.Portrait.id),
    Sunset: new EffectType('e03', EffectTitle.SUNSET, EffectPropertiesMap.Sunset.id),
    Theatre: new EffectType('e04', EffectTitle.THEATRE, EffectPropertiesMap.Theatre.id),
    Food: new EffectType('e05', EffectTitle.FOOD, EffectPropertiesMap.Food.id),
    Sand: new EffectType('e06', EffectTitle.SAND, EffectPropertiesMap.Sand.id),
    Backit: new EffectType('e07', EffectTitle.BACKIT, EffectPropertiesMap.Backit.id),
    Night: new EffectType('e08', EffectTitle.NIGHT, EffectPropertiesMap.Night.id),
    Shade: new EffectType('e09', EffectTitle.SHADE, EffectPropertiesMap.Shade.id),
    Cloudy: new EffectType('e10', EffectTitle.CLOUDY, EffectPropertiesMap.Cloudy.id),
    Landscape: new EffectType('e11', EffectTitle.LANDSCAPE, EffectPropertiesMap.Landscape.id),
    Fluorescent: new EffectType('e12', EffectTitle.FLUORESCENT, EffectPropertiesMap.Fluorescent.id),
}

export const Effects = Object.values(EffectMap).map(effect => effect);