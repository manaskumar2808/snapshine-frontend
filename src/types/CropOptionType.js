export class CropOptionType {
    constructor(id, text, cropFunction = null) {
        this.id = id;
        this.text = text;
        this.cropFunction = cropFunction;
    }
}