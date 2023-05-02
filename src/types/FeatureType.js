export class FeatureOptions { 
    constructor(lockZoom, lockDrag) {
        this.lockZoom = lockZoom;
        this.lockDrag = lockDrag;
    }
}

export class FeatureType { 
    constructor(id, title, IconComponent, WorkComponent = null, featureOptions = null) {
        this.id = id;
        this.title = title;
        this.IconComponent = IconComponent;
        this.WorkComponent = WorkComponent;
        this.featureOptions = featureOptions
    }
}