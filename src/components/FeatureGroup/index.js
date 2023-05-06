import Feature from '../Feature';
import { Container, List, Title } from './styles';

const FeatureGroup = ({ id, title, featureList = [] }) => { 
    return (
        <Container>
            <Title>{title}</Title>
            <div style={{ height: 10 }} />
            <List>
                {featureList.map(({ id, title, featureOptionsId }) => <Feature
                    key={id}
                    id={id}
                    title={title}
                    featureOptionsId={featureOptionsId}
                />)}
            </List>
        </Container>
    );
}

export default FeatureGroup;