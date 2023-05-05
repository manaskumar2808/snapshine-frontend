import { Container, List } from './styles';
import FeatureGroup from '../../FeatureGroup';
import { ToolMap } from '@/data/tools';
import React from 'react';

const AdjustmentEditor = () => { 
    const featureGroups = ToolMap.Adjustments.featureGroupList;

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

export default AdjustmentEditor;