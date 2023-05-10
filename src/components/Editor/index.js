import { Tools } from "@/data/tools";
import { Container, List } from './styles';
import FeatureGroup from "@/components/FeatureGroup";
import React from "react";

const Editor = ({ id }) => {
    const tool = Tools.find(tool => tool.id === id);
    if (!tool)
        return null;
    
    const featureGroups = tool.featureGroupList;

    return (
        <Container>
            <List>
                {featureGroups.map(({ id, title, featureList }) => <React.Fragment key={id}>
                    <FeatureGroup
                        id={id}
                        title={title}
                        featureList={featureList}
                    />
                    <div style={{ height: 20 }} />
                </React.Fragment>
                )}
            </List>
        </Container>
    );
}

export default Editor;