import { FrameCategories } from "./FrameCategories";

export class FrameType { 
    constructor(id, title, category = FrameCategories.CLASSIC) {
        this.id = id;
        this.title = title;
        this.category = category;
    }
}