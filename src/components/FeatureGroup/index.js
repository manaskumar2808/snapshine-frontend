import Feature from '../Feature';
import { Container, List, Title } from './styles';

const FeatureGroup = ({ id, featureList = [], title }) => { 
    return (
        <Container>
            <Title>{title}</Title>
            <div style={{ height: 10 }} />
            <List>
                {featureList.map(({ id, title, IconComponent, WorkComponent, featureOptions }) => <Feature
                    key={id}
                    id={id}
                    title={title}
                    IconComponent={IconComponent}
                    WorkComponent={WorkComponent}
                    featureOptions={featureOptions}
                />)}
            </List>
        </Container>
    );
}

export default FeatureGroup;