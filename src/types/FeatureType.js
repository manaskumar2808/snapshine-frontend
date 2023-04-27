export class FeatureType { 
    constructor(id, title, IconComponent, WorkComponent = null) {
        this.id = id;
        this.title = title;
        this.IconComponent = IconComponent;
        this.WorkComponent = WorkComponent;
    }
}