import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "./styles";

import { editHotel } from "../../utils/utils";

import Form from "../../components/Form";

export default function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
    }, [id]);

    return (
        <Container>

            <h1>Editar Hotel</h1>
            <Form />

        </Container>
    );
};
