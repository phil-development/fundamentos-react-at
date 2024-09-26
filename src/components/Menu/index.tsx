import { Container, Content, Logo } from "./styles";

import { RiHotelLine } from "react-icons/ri";

import Search from './Components/Search/';
import NavButton from "../NavButton";

export default function Menu() {

    return (
        <Container>

            <Logo>
                <RiHotelLine />
            </Logo>

            <Content>

                <Search />

                <NavButton title={'Gerenciar'} toNavigate={'/dashboard'} />

            </Content>

        </Container>
    );
};
