import NavButton from "../../components/NavButton";
import { Container, Painel, Header, Table } from "./styles";

export default function Dashboard() {
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
                    </tr>
                    <tr>
                        <td>Hotel Exemplo</td>
                        <td></td>
                        <td>⭐⭐⭐⭐</td>
                        <td>São Paulo</td>
                        <td>SP</td>
                        <td>R$ 300,00</td>
                        <td>Café da manhã incluso, Wi-Fi gratuito, piscina, academia, serviço de quarto 24h.</td>
                    </tr>
                </Table>

            </Painel>

        </Container>
    );
};
