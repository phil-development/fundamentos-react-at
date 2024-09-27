import { HotelFiltersSchema } from "../Form/types";

import { Container, Content, Header, Description, Button } from './styles';

import NavButton from "../NavButton";
import { useEffect, useState } from "react";
import { addHotelToFavorites, isHotelFavorite, removeHotelFromFavorites } from "../../utils/utils";

interface HotelCardProps {
    data: HotelFiltersSchema;
    onFavoritesChange: () => void;
};

export default function Card({ data, onFavoritesChange }: HotelCardProps) {

    const [isFavorite, setIsFavorite] = useState(isHotelFavorite(data.id));

    useEffect(() => {
        setIsFavorite(isHotelFavorite(data.id));
    }, [data.id]);

    const handleToggleFavorite = () => {

        if (isFavorite) {

            removeHotelFromFavorites(data.id);

        } else {

            addHotelToFavorites(data.id);
        };

        setIsFavorite(!isFavorite);
        onFavoritesChange();
    };

    return (
        <Container>
            <img src={data.imageBase64} alt='image-hotel' />

            <Content>

                <NavButton title={`Detalhes`} toNavigate={`/details/${data.id}`} />

                <Header>
                    <h3>{data.name}</h3>
                    <span>{'⭐'.repeat(data.rating)}</span>
                </Header>

                <Description>
                    <h4>R$ {data.price}</h4>

                    <p>{data.city} - {data.uf}</p>

                    <p>{data.description}</p>
                    <p>{data.descriptionServices}</p>

                </Description>

                <Button onClick={() => handleToggleFavorite()}>Favoritos</Button>

            </Content>

        </Container>
    );
};
