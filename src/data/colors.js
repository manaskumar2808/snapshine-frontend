import { ColorType } from '@/types/ColorType';
import { APP_THEME } from '../constants/Theme';

export const ColorMap = { 
    Red: new ColorType('c00', APP_THEME.colors.red),
    Blue: new ColorType('c01', APP_THEME.colors.blue),
    Green: new ColorType('c02', APP_THEME.colors.green),
    Yellow: new ColorType('c03', APP_THEME.colors.yellow),
    Pink: new ColorType('c04', APP_THEME.colors.pink),
    Violet: new ColorType('c05', APP_THEME.colors.violet),
    Purple: new ColorType('c06', APP_THEME.colors.purple),
    Cyan: new ColorType('c07', APP_THEME.colors.cyan),
    White: new ColorType('c08', APP_THEME.colors.white),
    Black: new ColorType('c09', APP_THEME.colors.black),
}

export const Colors = Object.values(ColorMap).map(color => color);