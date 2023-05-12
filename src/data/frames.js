import { FrameCategories } from '@/types/FrameCategories';
import { FrameType } from '../types/FrameType';

export const FrameTitle = {
    SOLID: 'Solid',
    DOTTED: 'Dotted',
    DASHED: 'Dashed',
    DOUBLE: 'Double',
    GROOVE: 'Groove',
    RIDGE: 'Ridge',
    INSET: 'Inset',
    OUTSET: 'Outset',
};

export const FrameMap = {
    Solid: new FrameType('fr00', FrameTitle.SOLID, FrameCategories.CLASSIC),
    Dotted: new FrameType('fr01', FrameTitle.DOTTED, FrameCategories.CLASSIC),
    Dashed: new FrameType('fr02', FrameTitle.DASHED, FrameCategories.CLASSIC),
    Double: new FrameType('fr03', FrameTitle.DOUBLE, FrameCategories.CLASSIC),
    // Groove: new FrameType('fr04', FrameTitle.GROOVE, FrameCategories.CLASSIC),
    // Ridge: new FrameType('fr05', FrameTitle.RIDGE, FrameCategories.CLASSIC),
    // Inset: new FrameType('fr06', FrameTitle.INSET, FrameCategories.CLASSIC),
    // Outset: new FrameType('fr07', FrameTitle.OUTSET, FrameCategories.CLASSIC),
};

export const Frames = Object.values(FrameMap).map(frame => frame);