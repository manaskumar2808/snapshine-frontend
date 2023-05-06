import { useSelector } from 'react-redux';
import { Container, Display, Photo, Title, TitleContainer } from './styles';
import { EffectPropertiesList } from '@/data/effect-properties';

const EffectCard = ({ id, title, effectPropertiesId, onEffectClick, active }) => {
    const image = useSelector(({ img }) => img.image);

    const effectProperties = EffectPropertiesList.find(ep => ep.id === effectPropertiesId);

    return (
        <Container onClick={() => onEffectClick(id)}>
            <Display active={active}>
                <Photo
                    src={image.src}
                    alt={image.alt}
                    properties={effectProperties}
                />
            </Display>
            <div style={{ height: 5 }} />
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
        </Container>
    );
}

export default EffectCard;