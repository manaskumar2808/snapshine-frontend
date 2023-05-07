import { EffectProperties } from "@/types/EffectProperties";

export const EffectPropertiesMap = {
    // Scene
    Darken: new EffectProperties('ep00', 80),
    Flash: new EffectProperties('ep01', 150, null, 50),
    Portrait: new EffectProperties('ep02'),
    Sunset: new EffectProperties('ep03', 90, 120, 120, null, null, -15, 30, 90),
    Theatre: new EffectProperties('ep04', 110, 110, 80, null, null, null, 20),
    Food: new EffectProperties('ep05', 120, 110, 120, null, null, -5),
    Sand: new EffectProperties('ep06', 110, 125, 90, null, null, -10, 10),
    Backit: new EffectProperties('ep07', 110, 120, 110, null, 1),
    Night: new EffectProperties('ep08', 80, 120, null, null, null, -15, 15),
    Shade: new EffectProperties('ep09', 110, 90, 110, null, null, -5, 10),
    Cloudy: new EffectProperties('ep10', 105, 95, 105, null, null, 5),
    Landscape: new EffectProperties('ep11', 110, 110, 120, null, null, -10, 10),
    Fluorescent: new EffectProperties('ep12', 110, 85, 135, null, null, 200),
    
    // Classic
    Inkwell: new EffectProperties('ep13', 90, 110, null, null, null, null, 30, null, 100),
    PaleOcre: new EffectProperties('ep14', 80, 90, 80, null, null, -10, 20),
    Walden: new EffectProperties('ep15', 110, 90, 80, null, null, -20, 20),
    Toy: new EffectProperties('ep16', 110, 90, 120, null, null, 15, 20, null, 10),
    RedWash: new EffectProperties('ep17', 100, 90, 150, null, null, -20, 30),
    Moonbeam: new EffectProperties('ep18', 110, 90, 90, null, null, -10, 10),
    MiniOven: new EffectProperties('ep19'),
    Dallas: new EffectProperties('ep20', 110, 110, 120, null, null, 10),
    Cantaloupe: new EffectProperties('ep21', null, 120, 120, null, null, 10, 20),
    
    // Retro
    Sepia: new EffectProperties('ep22', 90, 120, 80, null, null, -10, 100),
    Purple: new EffectProperties('ep23', null, 110, 180, null, null, 290, 20),
    CoolBlue: new EffectProperties('ep24', 80, 120, 150, null, null, -30, 20),
    BrilliantRose: new EffectProperties('ep25', 120, 110, 120, null, null, -20, 30),
    Warm: new EffectProperties('ep26', 110, 90, 110, null, null, -10, 30),
    WarmGreen: new EffectProperties('ep27', 110, 110, 120, null, null, -15, 10, null, null, null, 5, '#FFC300'),
    SoEmo: new EffectProperties('ep28'),

    // Grayscale
    Classic1: new EffectProperties('ep29', 80, 80, null, null, null, null, null, null, 100),
    Classic2: new EffectProperties('ep30', 110, 70, null, null, null, null, null, null, 100),
    Classic3: new EffectProperties('ep31', 90, 120, null, null, null, null, null, null, 100),
    Classic4: new EffectProperties('ep32', 120, 90, null, null, null, null, null, null, 100),
    Dark1: new EffectProperties('ep33', 70, 120, null, null, null, null, 30, null, 100),
    Dark2: new EffectProperties('ep34', 70, 130, 20, null, null, -10, 30, null, 100),
    Dark3: new EffectProperties('ep35', 70, 150, 0, null, null, -20, 50, null, 100),
    Fade1: new EffectProperties('ep35', 85, 75, null, null, null, null, null, null, 100),
    Fade2: new EffectProperties('ep36', 80, 70, null, null, null, null, 10, null, 100),
    Fade3: new EffectProperties('ep37', 90, 80, 75, null, null, null, null, null, 100),
    Contrasted: new EffectProperties('ep38', null, 200, null, null, null, null, null, null, 100),
    NewGrey: new EffectProperties('ep39', null, null, null, null, null, null, null, null, 100),
    OldSchool: new EffectProperties('ep40', 90, 75, null, null, null, null, null, null, 100),
    Natural: new EffectProperties('ep41', 90, 85, null, null, null, null, null, null, 100),
    BrightGrey: new EffectProperties('ep42', 130, 150, null, null, null, 10, null, null, 100),
} 

export const EffectPropertiesList = Object.values(EffectPropertiesMap).map(effectProperties => effectProperties);