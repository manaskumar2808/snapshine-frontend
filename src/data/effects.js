import { EffectType } from "@/types/EffectType";
import { EffectPropertiesMap } from "./effect-properties";
import { FeatureMap } from "./features";

export const EffectTitle = {
    // Scene
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

    // Classic
    INKWELL: 'Inkwell',
    PALE_OCRE: 'Pale Ocre',
    WALDEN: 'Walden',
    TOY: 'Toy',
    RED_WASH: 'Red Wash',
    MOONBEAM: 'Moonbeam',
    MINI_OVEN: 'Mini-Oven',
    DALLAS: 'Dallas',
    CANTALOUPE: 'Cantaloupe',

    // Retro
    SEPIA: 'Sepia',
    PURPLE: 'Purple',
    COOL_BLUE: 'Cool Blue',
    BRILLIANT_ROSE: 'Brilliant Rose',
    WARM: 'Warm',
    WARM_GREEN: 'Warm Green',
    SO_EMO: 'So Emo',

    // Grayscale
    CLASSIC_1: 'Classic 1',
    CLASSIC_2: 'Classic 2',
    CLASSIC_3: 'Classic 3',
    CLASSIC_4: 'Classic 4',
    DARK_1: 'Dark 1',
    DARK_2: 'Dark 2',
    DARK_3: 'Dark 3',
    FADE_1: 'Fade 1',
    FADE_2: 'Fade 2',
    FADE_3: 'Fade 3',
    CONTRASTED: 'Contrasted',
    NEW_GREY: 'New Grey',
    OLD_SCHOOL: 'Old School',
    NATURAL: 'Natural',
    BRIGHT_GREY: 'Bright Grey',
}

export const EffectMap = {
    // Scene
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
    
    // Classic
    Inkwell: new EffectType('e13', EffectTitle.INKWELL, EffectPropertiesMap.Inkwell.id, FeatureMap.Classic.id),
    PaleOcre: new EffectType('e14', EffectTitle.PALE_OCRE, EffectPropertiesMap.PaleOcre.id, FeatureMap.Classic.id),
    Walden: new EffectType('e15', EffectTitle.WALDEN, EffectPropertiesMap.Walden.id, FeatureMap.Classic.id),
    Toy: new EffectType('e16', EffectTitle.TOY, EffectPropertiesMap.Toy.id, FeatureMap.Classic.id),
    RedWash: new EffectType('e17', EffectTitle.RED_WASH, EffectPropertiesMap.RedWash.id, FeatureMap.Classic.id),
    Moonbeam: new EffectType('e18', EffectTitle.MOONBEAM, EffectPropertiesMap.Moonbeam.id, FeatureMap.Classic.id),
    MiniOven: new EffectType('e19', EffectTitle.MINI_OVEN, EffectPropertiesMap.MiniOven.id, FeatureMap.Classic.id),
    Dallas: new EffectType('e20', EffectTitle.DALLAS, EffectPropertiesMap.Dallas.id, FeatureMap.Classic.id),
    Cantaloupe: new EffectType('e21', EffectTitle.CANTALOUPE, EffectPropertiesMap.Cantaloupe.id, FeatureMap.Classic.id),

    // Retro
    Sepia: new EffectType('ep22', EffectTitle.SEPIA, EffectPropertiesMap.Sepia.id, FeatureMap.Retro.id),
    Purple: new EffectType('ep23', EffectTitle.PURPLE, EffectPropertiesMap.Purple.id, FeatureMap.Retro.id),
    CoolBlue: new EffectType('ep24', EffectTitle.COOL_BLUE, EffectPropertiesMap.CoolBlue.id, FeatureMap.Retro.id),
    BrilliantRose: new EffectType('ep25', EffectTitle.BRILLIANT_ROSE, EffectPropertiesMap.BrilliantRose.id, FeatureMap.Retro.id),
    Warm: new EffectType('ep26', EffectTitle.WARM, EffectPropertiesMap.Warm.id, FeatureMap.Retro.id),
    WarmGreen: new EffectType('ep27', EffectTitle.WARM_GREEN, EffectPropertiesMap.WarmGreen.id, FeatureMap.Retro.id),
    SoEmo: new EffectType('ep28', EffectTitle.SO_EMO, EffectPropertiesMap.SoEmo.id, FeatureMap.Retro.id),

    // Grayscale
    Classic1: new EffectType('ep29', EffectTitle.CLASSIC_1, EffectPropertiesMap.Classic1.id, FeatureMap.Grayscale.id),
    Classic2: new EffectType('ep30', EffectTitle.CLASSIC_2, EffectPropertiesMap.Classic2.id, FeatureMap.Grayscale.id),
    Classic3: new EffectType('ep31', EffectTitle.CLASSIC_3, EffectPropertiesMap.Classic3.id, FeatureMap.Grayscale.id),
    Classic4: new EffectType('ep32', EffectTitle.CLASSIC_4, EffectPropertiesMap.Classic4.id, FeatureMap.Grayscale.id),
    Dark1: new EffectType('ep33', EffectTitle.DARK_1, EffectPropertiesMap.Dark1.id, FeatureMap.Grayscale.id),
    Dark2: new EffectType('ep34', EffectTitle.DARK_2, EffectPropertiesMap.Dark2.id, FeatureMap.Grayscale.id),
    Dark2: new EffectType('ep35', EffectTitle.DARK_3, EffectPropertiesMap.Dark3.id, FeatureMap.Grayscale.id),
    Fade1: new EffectType('ep36', EffectTitle.FADE_1, EffectPropertiesMap.Fade1.id, FeatureMap.Grayscale.id),
    Fade2: new EffectType('ep37', EffectTitle.FADE_2, EffectPropertiesMap.Fade2.id, FeatureMap.Grayscale.id),
    Fade3: new EffectType('ep38', EffectTitle.FADE_3, EffectPropertiesMap.Fade3.id, FeatureMap.Grayscale.id),
    Contrasted: new EffectType('ep39', EffectTitle.CONTRASTED, EffectPropertiesMap.Contrasted.id, FeatureMap.Grayscale.id),
    NewGrey: new EffectType('ep40', EffectTitle.NEW_GREY, EffectPropertiesMap.NewGrey.id, FeatureMap.Grayscale.id),
    OldSchool: new EffectType('ep41', EffectTitle.OLD_SCHOOL, EffectPropertiesMap.OldSchool.id, FeatureMap.Grayscale.id),
    Natural: new EffectType('ep42', EffectTitle.NATURAL, EffectPropertiesMap.Natural.id, FeatureMap.Grayscale.id),
    BrightGrey: new EffectType('ep43', EffectTitle.BRIGHT_GREY, EffectPropertiesMap.BrightGrey.id, FeatureMap.Grayscale.id),
}

export const Effects = Object.values(EffectMap).map(effect => effect);