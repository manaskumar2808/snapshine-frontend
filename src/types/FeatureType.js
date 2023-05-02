export class FeatureOptions { 
    constructor(lockZoom, lockDrag) {
        this.lockZoom = lockZoom;
        this.lockDrag = lockDrag;
    }
}

export class FeatureType { 
    constructor(id, title, featureOptions = null) {
        this.id = id;
        this.title = title;
        this.featureOptions = featureOptions
    }
}