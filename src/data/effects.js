import { EffectType } from "@/types/EffectType";
import { EffectPropertiesMap } from "./effect-properties";
import { FeatureMap } from "./features";

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
    INKWELL: 'Inkwell',
    PALE_OCRE: 'Pale Ocre',
    WALDEN: 'Walden',
    TOY: 'Toy',
    RED_WASH: 'Red Wash',
    MOONBEAM: 'Moonbeam',
    MINI_OVEN: 'Mini-Oven',
    DALLAS: 'Dallas',
    CANTALOUPE: 'Cantaloupe',
}

export const EffectMap = {
    Darken: new EffectType('e00', EffectTitle.DARKEN, EffectPropertiesMap.Darken.id, FeatureMap.Scenes.id),
    Flash: new EffectType('e01', EffectTitle.FLASH, EffectPropertiesMap.Flash.id, FeatureMap.Scenes.id),
    Portrait: new EffectType('e02', EffectTitle.PORTRAIT, EffectPropertiesMap.Portrait.id, FeatureMap.Scenes.id),
    Sunset: new EffectType('e03', EffectTitle.SUNSET, EffectPropertiesMap.Sunset.id, FeatureMap.Scenes.id),
    Theatre: new EffectType('e04', EffectTitle.THEATRE, EffectPropertiesMap.Theatre.id, FeatureMap.Scenes.id),
    Food: new EffectType('e05', EffectTitle.FOOD, EffectPropertiesMap.Food.id, FeatureMap.Scenes.id),
    Sand: new EffectType('e06', EffectTitle.SAND, EffectPropertiesMap.Sand.id, FeatureMap.Scenes.id),
    Backit: new EffectType('e07', EffectTitle.BACKIT, EffectPropertiesMap.Backit.id, FeatureMap.Scenes.id),
    Night: new EffectType('e08', EffectTitle.NIGHT, EffectPropertiesMap.Night.id, FeatureMap.Scenes.id),
    Shade: new EffectType('e09', EffectTitle.SHADE, EffectPropertiesMap.Shade.id, FeatureMap.Scenes.id),
    Cloudy: new EffectType('e10', EffectTitle.CLOUDY, EffectPropertiesMap.Cloudy.id, FeatureMap.Scenes.id),
    Landscape: new EffectType('e11', EffectTitle.LANDSCAPE, EffectPropertiesMap.Landscape.id, FeatureMap.Scenes.id),
    Fluorescent: new EffectType('e12', EffectTitle.FLUORESCENT, EffectPropertiesMap.Fluorescent.id, FeatureMap.Scenes.id),
    Inkwell: new EffectType('e13', EffectTitle.INKWELL, EffectPropertiesMap.Inkwell.id, FeatureMap.Classic.id),
    PaleOcre: new EffectType('e14', EffectTitle.PALE_OCRE, EffectPropertiesMap.PaleOcre.id, FeatureMap.Classic.id),
    Walden: new EffectType('e15', EffectTitle.WALDEN, EffectPropertiesMap.Walden.id, FeatureMap.Classic.id),
    Toy: new EffectType('e16', EffectTitle.TOY, EffectPropertiesMap.Toy.id, FeatureMap.Classic.id),
    RedWash: new EffectType('e17', EffectTitle.RED_WASH, EffectPropertiesMap.RedWash.id, FeatureMap.Classic.id),
    Moonbeam: new EffectType('e18', EffectTitle.MOONBEAM, EffectPropertiesMap.Moonbeam.id, FeatureMap.Classic.id),
    MiniOven: new EffectType('e19', EffectTitle.MINI_OVEN, EffectPropertiesMap.MiniOven.id, FeatureMap.Classic.id),
    Dallas: new EffectType('e20', EffectTitle.DALLAS, EffectPropertiesMap.Dallas.id, FeatureMap.Classic.id),
    Cantaloupe: new EffectType('e21', EffectTitle.CANTALOUPE, EffectPropertiesMap.Cantaloupe.id, FeatureMap.Classic.id),
}

export const Effects = Object.values(EffectMap).map(effect => effect);