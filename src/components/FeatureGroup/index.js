import Feature from '../Feature';
import { Container, List, Title } from './styles';

const FeatureGroup = ({ featureList = [], title }) => { 
    return (
        <Container>
            <Title>{title}</Title>
            <div style={{ height: 10 }} />
            <List>
                {featureList.map(({ id, title, IconComponent, WorkComponent }) => <Feature
                    key={id}
                    title={title}
                    IconComponent={IconComponent}
                    WorkComponent={WorkComponent}
                />)}
            </List>
        </Container>
    );
}

export default FeatureGroup;