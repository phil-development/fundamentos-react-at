import { useNavigate, useParams } from 'react-router-dom';
import { Header, Container, CardDetails, Content } from './styles';
import { MdArrowBack } from "react-icons/md";

import { getHotelById } from '../../utils/utils';

export default function Details() {

    const { id } = useParams();

    const navigate = useNavigate();

    const hotel = getHotelById(Number(id));

    return (
        <Container>

            <Header>
                <button onClick={() => navigate(-1)}>
                    <MdArrowBack />
                </button>

                <h1>{hotel?.name}</h1>
            </Header>

            <CardDetails>

                <img src={hotel?.imageBase64} alt='image-hotel' />

                <Content>

                    <p>{'⭐'.repeat(Number(hotel?.rating))}</p>

                    <p>R$ {hotel?.price}</p>

                    <p>{hotel?.description}</p>
                    <p>{hotel?.descriptionServices}</p>

                    <p>{hotel?.city} - {hotel?.uf}</p>


                </Content>

            </CardDetails>

        </Container>
    );
};
