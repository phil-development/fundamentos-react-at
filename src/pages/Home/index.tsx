import { useEffect, useState } from 'react';
import { Container, Content } from './styles';

import Menu from '../../components/Menu';
import Search from '../../components/Search';

import {
    getHotels,
    getHotelById,
    addHotelToFavorites,
    getFavoriteHotelIds,
} from '../../utils/utils';
import { HotelFiltersSchema } from '../../components/Form/types';

import Card from '../../components/Card';

export default function Home() {

    const [hotels, setHotels] = useState<HotelFiltersSchema[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelFiltersSchema[]>([]);
    const [favoriteHotels, setFavoriteHotels] = useState<HotelFiltersSchema[]>([]);

    useEffect(() => {

        const storedHotels = getHotels();
        setHotels(storedHotels);
        setFilteredHotels(storedHotels);

        const favoriteHotelIds = getFavoriteHotelIds();
        const favorites = favoriteHotelIds
            .map(id => getHotelById(id))
            .filter((hotel): hotel is HotelFiltersSchema => hotel !== undefined); // Filtra hotéis não encontrados
        setFavoriteHotels(favorites);

    }, []);

    const handleSearch = (searchTerm: string) => {
        const filtered = hotels.filter(hotel =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHotels(filtered);
    };

    const handleFavoritesChange = () => {

        const favoriteHotelIds = getFavoriteHotelIds();
        const favorites = favoriteHotelIds
            .map((id) => getHotelById(id))
            .filter((hotel): hotel is HotelFiltersSchema => hotel !== undefined);
        setFavoriteHotels(favorites);

    };

    return (
        <Container>

            <Menu />

            <Content>

                <section>

                    <Search onSearch={handleSearch} />

                    {filteredHotels.map(hotel => (
                        <Card key={hotel.id} data={hotel} onFavoritesChange={handleFavoritesChange} />
                    ))}

                </section>

                <section>

                    <h1>Favoritos</h1>

                    {favoriteHotels.map(hotel => (
                        <Card key={hotel.id} data={hotel} onFavoritesChange={handleFavoritesChange} />
                    ))}

                </section>


            </Content>

        </Container>
    );
};