import Brand from '../Brand';
import { Container, NavItem, NavLink, NavText } from './styles';
import Download from '../Download';

const Navbar = () => {

    return (
        <Container>
            <NavItem>
                <NavLink href={'/'}>
                    <Brand />
                </NavLink>
            </NavItem>
            <div style={{ flex: 1 }} />
            <NavItem>
                <Download />
            </NavItem>
        </Container>
    );
}

export default Navbar;