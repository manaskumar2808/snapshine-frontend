import { useTheme } from 'styled-components';
import { Container, Row, Section, Title } from './styles';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Feature = ({ IconComponent, title, WorkComponent }) => { 
    const theme = useTheme();
    const iconSize = 18;
    const iconColor = theme.colors.dark;

    const [openFeature, setOpenFeature] = useState(false);
    const [ActionComponent, setActionComponent] = useState(FiChevronRight);

    const clickHandler = () => { 
        setOpenFeature(state => !state);
    }

    return (
        <Container>
            <Row onClick={clickHandler}>
                <Section>
                    <IconComponent size={iconSize} color={iconColor} />
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
            {openFeature && WorkComponent && <WorkComponent />}
        </Container>
    );
}

export default Feature;