import { Container } from './styles';
import FeatureGroup from '../../FeatureGroup';
import { ToolMap } from '@/data/tools';
import React from 'react';

const AdjustmentEditor = () => { 
    const featureGroups = ToolMap.Adjustments.featureGroupList;

    return (
        <Container>
            {featureGroups.map(({ id, title, featureList }) => <React.Fragment key={id}>
                <FeatureGroup
                    id={id}
                    title={title}
                    featureList={featureList}
                />
                <div style={{ height: 20 }} />
            </React.Fragment>
            )}
        </Container>
    );
}

export default AdjustmentEditor;