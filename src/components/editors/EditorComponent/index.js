import { ToolMap } from "@/data/tools";
import AdjustmentEditor from "../AdjustmentEditor";
import EffectEditor from "../EffectEditor";

const EditorComponent = ({ id, ...props }) => {
    switch (id) {
        case ToolMap.Adjustments.id:
            return <AdjustmentEditor {...props} />
        case ToolMap.Effects.id:
            return <EffectEditor {...props} />
        default:
            break;
    }
    return null;
}

export default EditorComponent;