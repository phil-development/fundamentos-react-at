import { Container, Logo } from "./styles";

import { RiHotelLine } from "react-icons/ri";

export default function Menu() {
    return (
        <Container>

            <Logo>
                <RiHotelLine />
                <h3>Logo</h3>
            </Logo>

        </Container>
    );
};
