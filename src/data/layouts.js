import { Layout } from "@/types/LayoutType";

export const LayoutMap = {
    Layout1x1: new Layout('l00', '1 x 1', 1),
    Layout3x4: new Layout('l01', '3 x 4', 3 / 4),
    Layout4x3: new Layout('l02', '4 x 3', 4 / 3),
    Layout16x9: new Layout('l03', '16 x 9', 16 / 9),
    Layout9x16: new Layout('l04', '9 x 16', 9 / 16),
    Layout2x3: new Layout('l05', '2 x 3', 2 / 3),
    Layout3x2: new Layout('l06', '3 x 2', 3 / 2),
    Movie: new Layout('l07', 'Movie', 185 / 100),
}

export const Layouts = Object.values(LayoutMap).map(l => l);