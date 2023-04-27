import Brand from '../Brand';
import { Container, NavItem, NavLink, NavText } from './styles';

const Navbar = () => {
    return (
        <Container>
            <NavItem>
                <NavLink href={'/'}>
                    <Brand />
                </NavLink>
            </NavItem>
        </Container>
    );
}

export default Navbar;