import { useTheme } from 'styled-components';
import { Container, Row, Section, Title } from './styles';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFeature } from '@/store/actions/feature';
import IconComponent from '../IconComponent';
import WorkComponent from '../WorkComponent';

const Feature = ({ id, title, featureOptions }) => { 
    const theme = useTheme();
    const dispatch = useDispatch();

    const feature = useSelector(({ftr}) => ftr.feature);

    const iconSize = 18;
    const iconColor = theme.colors.dark;

    const [openFeature, setOpenFeature] = useState(false);

    useEffect(() => { 
        if (!feature || feature.id !== id)
            setOpenFeature(false);
    }, [feature, id]);

    const clickHandler = () => {
        if (openFeature)
            dispatch(setActiveFeature(null));
        else
            dispatch(setActiveFeature({id, IconComponent, title, WorkComponent, featureOptions}))
        setOpenFeature(state => !state);
    }

    return (
        <Container>
            <Row onClick={clickHandler}>
                <Section>
                    <IconComponent id={id} size={iconSize} color={iconColor} />
                </Section>
                <div style={{ width: 10 }} />
                <Section>
                    <Title>
                        {title}
                    </Title>
                </Section>
                <div style={{ flex: 1 }} />
                <Section>
                    {openFeature ? <FiChevronDown size={iconSize} color={iconColor} /> : 
                     <FiChevronRight size={iconSize} color={iconColor} /> }
                </Section>
            </Row>
            {openFeature && <WorkComponent id={id} />}
        </Container>
    );
}

export default Feature;