import FeatureGroup from '../../FeatureGroup';
import { ToolMap } from '@/data/tools';
import React from 'react';
import { Container, List } from './styles';

const EffectEditor = () => { 
    const featureGroups = ToolMap.Effects.featureGroupList;

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

export default EffectEditor;