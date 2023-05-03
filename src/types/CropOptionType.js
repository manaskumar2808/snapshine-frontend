export class CropOptionType {
    constructor(id, text, aspectRatio = 1.0, shape = 'rectangle') {
        this.id = id;
        this.text = text;
        this.aspectRatio = aspectRatio;
        this.shape = shape;
    }
}