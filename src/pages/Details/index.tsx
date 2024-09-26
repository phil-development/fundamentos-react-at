import { useNavigate, useParams } from 'react-router-dom';
import { Header, Container, Content, Table } from './styles';
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

            <Content>

                <Table>
                    <thead>
                        <tr>
                            <th>Nome do Hotel</th>
                            <th>Imagem</th>
                            <th>Classificação</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Preço da Diária</th>
                            <th>Descrição</th>
                            <th>Serviços</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={hotel?.id}>
                            <td>{hotel?.name}</td>
                            <td><img src={hotel?.imageBase64} /></td>
                            <td>{'⭐'.repeat(Number(hotel?.rating))}</td>
                            <td>{hotel?.city}</td>
                            <td>{hotel?.uf}</td>
                            <td>R$ {hotel?.price}</td>
                            <td>{hotel?.description}</td>
                            <td>{hotel?.descriptionServices}</td>
                        </tr>
                    </tbody>
                </Table>

            </Content>

        </Container>
    );
};
