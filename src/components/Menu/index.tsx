import { Container, Content, Logo } from "./styles";
import { useTheme } from '../../context';

import { RiHotelLine } from "react-icons/ri";

import NavButton from "../NavButton";
import Switch from '@mui/material/Switch';

export default function Menu() {

    const { toggleTheme, theme } = useTheme();

    const handleChange = () => toggleTheme();

    return (
        <Container>

            <Logo>
                <RiHotelLine />
            </Logo>

            <Content>

                <Switch
                    checked={theme.title === 'light' ? false : true}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <NavButton title={'Gerenciar'} toNavigate={'/dashboard'} />

            </Content>

        </Container>
    );
};
