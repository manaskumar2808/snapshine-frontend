import EffectList from '@/components/EffectList';
import { Container } from './styles';
import { Effects } from '@/data/effects';
import { Button } from '@/UI';
import { useDispatch, useSelector } from 'react-redux';
import { FeatureMap } from '@/data/features';
import { effectImage, setEffect } from '@/store/actions/effect';

const EffectWorkComponent = ({ featureId }) => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const effectId = useSelector(({ eft }) => eft.effectId);
    const effects = Effects.filter(e => e.featureId === featureId);

    const effectClickHandler = (effectId) => {
        if (!image)
            return;
        dispatch(setEffect(effectId));
    }

    const applyClickHandler = () => {
        if (!image)
            return;
        dispatch(effectImage(true));
    }

    return (
        <Container>
            <EffectList effects={effects} activeEffectId={effectId} onEffectClick={effectClickHandler} />
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyClickHandler} size='sm' />
        </Container>
    );
}

export default EffectWorkComponent;