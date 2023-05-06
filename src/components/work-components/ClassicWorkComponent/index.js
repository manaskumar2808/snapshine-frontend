import EffectList from '@/components/EffectList';
import { Container } from './styles';
import { Effects } from '@/data/effects';
import { Button } from '@/UI';
import { useDispatch, useSelector } from 'react-redux';
import { FeatureMap } from '@/data/features';
import { classicImage, setClassicEffect } from '@/store/actions/classic';

const ClassicWorkComponent = () => {
    const dispatch = useDispatch();

    const image = useSelector(({ img }) => img.image);
    const classicEffectId = useSelector(({ cls }) => cls.classicEffectId);
    const effects = Effects.filter(e => e.featureId === FeatureMap.Classic.id);

    const effectClickHandler = (effectId) => {
        if (!image)
            return;
        dispatch(setClassicEffect(effectId));
    }

    const applyClickHandler = () => {
        if (!image)
            return;
        dispatch(classicImage(true));
    }

    return (
        <Container>
            <EffectList effects={effects} activeEffectId={classicEffectId} onEffectClick={effectClickHandler} />
            <div style={{ height: 10 }} />
            <Button text={'Apply'} onClick={applyClickHandler} size='sm' />
        </Container>
    );
}

export default ClassicWorkComponent;