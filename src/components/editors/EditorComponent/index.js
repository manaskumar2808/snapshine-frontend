import { ToolMap } from "@/data/tools";
import AdjustmentEditor from "../AdjustmentEditor";

const EditorComponent = ({ id, ...props }) => {
    switch (id) {
        case ToolMap.Adjustments.id:
            return <AdjustmentEditor {...props} />
        default:
            break;
    }
    return null;
}

export default EditorComponent;