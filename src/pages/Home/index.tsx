import { useEffect, useState } from 'react';
import { Container, Content } from './styles';

import Menu from '../../components/Menu';
import Search from '../../components/Search';

import { getHotels } from '../../utils/utils';
import { HotelFiltersSchema } from '../../components/Form/types';

import Card from '../../components/Card';

export default function Home() {

    const [hotels, setHotels] = useState<HotelFiltersSchema[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelFiltersSchema[]>([]);

    useEffect(() => {
        const storedHotels = getHotels();
        setHotels(storedHotels);
        setFilteredHotels(storedHotels); // Inicialmente, exibe todos os hotéis
    }, []);

    const handleSearch = (searchTerm: string) => {
        const filtered = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHotels(filtered);
    };

    return (
        <Container>

            <Menu />

            <Content>

                <section>

                    <Search onSearch={handleSearch} />

                    {filteredHotels.map(hotel => (
                        <Card key={hotel.id} data={hotel} />
                    ))}

                </section>

                <section>

                    <h1>Favoritos</h1>

                </section>


            </Content>

        </Container>
    );
};