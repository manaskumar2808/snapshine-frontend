import { EffectProperties } from "@/types/EffectProperties";

export const EffectPropertiesMap = {
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
    Inkwell: new EffectProperties('ep13', 90, 110, null, null, null, null, 30, null, 100),
    PaleOcre: new EffectProperties('ep14', 80, 90, 80, null, null, -10, 20),
    Walden: new EffectProperties('ep15', 110, 90, 80, null, null, -20, 20),
    Toy: new EffectProperties('ep16', 110, 90, 120, null, null, 15, 20, null, 10),
    RedWash: new EffectProperties('ep17', 100, 90, 150, null, null, -20, 30),
    Moonbeam: new EffectProperties('ep18', 110, 90, 90, null, null, -10, 10),
    MiniOven: new EffectProperties('ep19'),
    Dallas: new EffectProperties('ep20', 110, 110, 120, null, null, 10),
    Cantaloupe: new EffectProperties('ep21', null, 120, 120, null, null, 10, 20),
}

export const EffectPropertiesList = Object.values(EffectPropertiesMap).map(effectProperties => effectProperties);