import NavButton from "../../components/NavButton";
import { Container, Painel, Header, Table } from "./styles";

import { getHotels } from '../../utils/utils';

export default function Dashboard() {

    const hotels = getHotels();

    return (
        <Container>

            <Painel>

                <Header>

                    <h1>Dashboard</h1>

                    <NavButton title="Registrar" toNavigate="/register" />

                </Header>

                <Table>
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
                    {hotels.map((hotel) => (
                        <tr>
                            <td>{hotel.name}</td>
                            <td><img /></td>
                            <td>{'⭐'.repeat(hotel.rating)}</td>
                            <td>{hotel.city}</td>
                            <td>{hotel.uf}</td>
                            <td>R$ {hotel.price}</td>
                            <td>{hotel.description}</td>
                            <td>{hotel.descriptionServices}</td>
                        </tr>
                    ))}
                </Table>

            </Painel>

        </Container>
    );
};
