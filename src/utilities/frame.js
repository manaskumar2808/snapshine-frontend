import { FrameTitle } from "@/data/frames";

export const getUpdatedCTX = (ctx, frameColor, frameSize, frameTitle, x, y, w, h) => {
    if (!ctx)
        return;
    
    ctx.strokeStyle = frameColor;
    ctx.lineWidth = frameSize;

    switch (frameTitle) {
        case FrameTitle.SOLID:
            ctx.setLineDash([]);
            ctx.stroke();
            break;
        case FrameTitle.DASHED:
            ctx.setLineDash([5, 3]);
            ctx.stroke();
            break;
        case FrameTitle.DOTTED:
            ctx.setLineDash([1, 2]);
            ctx.stroke();
            break;
        case FrameTitle.DOUBLE:
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x, y + h);
            ctx.lineTo(x + w, y + h);
            ctx.stroke();
            break;
        case FrameTitle.RIDGE:
            ctx.setLineDash([1, 3]);
            ctx.stroke();
            break;
        case FrameTitle.INSET:
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x + w, y + h);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + w, y + h);
            ctx.lineTo(x, y + h);
            ctx.lineTo(x, y);
            ctx.stroke();
            break;
        case FrameTitle.OUTSET:
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x + w, y + h);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + w, y + h);
            ctx.lineTo(x, y + h);
            ctx.lineTo(x, y);
            ctx.stroke();
            break;
        case FrameTitle.GROOVE:
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + w, y);
            ctx.lineTo(x + w, y + h);
            ctx.stroke();
            ctx.strokeStyle = '#d3d3d3';
            ctx.beginPath();
            ctx.moveTo(x + w, y + h);
            ctx.lineTo(x, y + h);
            ctx.lineTo(x, y);
            ctx.stroke();
            break;
        default:
            break;
    }

    return ctx;
}