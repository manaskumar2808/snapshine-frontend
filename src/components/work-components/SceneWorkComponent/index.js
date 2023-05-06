import EffectList from '@/components/EffectList';
import { Container } from './styles';
import { Effects } from '@/data/effects';
import { Button } from '@/UI';
import { useDispatch, useSelector } from 'react-redux';
import { sceneImage, setSceneEffect } from '@/store/actions/scene';
import { FeatureMap } from '@/data/features';

const SceneWorkComponent = () => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const sceneEffectId = useSelector(({ scn }) => scn.sceneEffectId);
    const effects = Effects.filter(e => e.featureId === FeatureMap.Scenes.id);

    const effectClickHandler = (effectId) => {
        if (!image)
            return;
        dispatch(setSceneEffect(effectId));
    }

    const applyClickHandler = () => {
        if (!image)
            return;
        dispatch(sceneImage(true));
    }

    return (
        <Container>
            <EffectList effects={effects} activeEffectId={sceneEffectId} onEffectClick={effectClickHandler} />
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyClickHandler} size='sm' />
        </Container>
    );
}

export default SceneWorkComponent;