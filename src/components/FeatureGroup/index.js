import Feature from '../Feature';
import { Container, List, Title } from './styles';

const FeatureGroup = ({ id, featureList = [], title }) => { 
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