import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Painel, Header, Table, ButtonContainer } from "./styles";

import { getHotels, deleteHotel } from '../../utils/utils';

import { HotelFiltersSchema } from "../../components/Form/types";

import { MdDelete, MdEditDocument } from "react-icons/md";

import NavButton from "../../components/NavButton";

export default function Dashboard() {

    const [hotelsData, setHotelsData] = useState<HotelFiltersSchema[]>([]);
    const [currentId, setCurrentId] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {

        const hotels = getHotels();
        setHotelsData(hotels);

    }, [currentId]);

    return (
        <Container>

            <Painel>

                <Header>

                    <h1>Dashboard</h1>

                    <div>

                        <NavButton title="Inicio" toNavigate="/fundamentos-react-at" />

                        <span>|</span>

                        <NavButton title="Registrar" toNavigate="/fundamentos-react-at/register" />

                    </div>

                </Header>

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotelsData.map((hotel) => (
                            <tr key={hotel.id}>
                                <td>{hotel.name}</td>
                                <td><img src={hotel.imageBase64} /></td>
                                <td>{'⭐'.repeat(hotel.rating)}</td>
                                <td>{hotel.city}</td>
                                <td>{hotel.uf}</td>
                                <td>R$ {hotel.price}</td>
                                <td>{hotel.description}</td>
                                <td>{hotel.descriptionServices}</td>
                                <ButtonContainer>
                                    <button onClick={() => navigate(`/edit/${hotel.id}`)}><MdEditDocument /></button>
                                    <button key={hotel.id} onClick={() => {
                                        setCurrentId(hotel.id);
                                        deleteHotel(hotel.id);
                                    }}><MdDelete /></button>
                                </ButtonContainer>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Painel>

        </Container>
    );
};
