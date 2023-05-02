export class CropOptionType {
    constructor(id, text, IconComponent = null, cropFunction = null) {
        this.id = id;
        this.text = text;
        this.IconComponent = IconComponent;
        this.cropFunction = cropFunction;
    }
}