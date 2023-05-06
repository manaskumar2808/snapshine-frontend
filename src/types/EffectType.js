export class EffectType {
    constructor(id, title, effectPropertiesId, featureId = null) {
        this.id = id;
        this.title = title;
        this.effectPropertiesId = effectPropertiesId;
        this.featureId = featureId;
    }
}