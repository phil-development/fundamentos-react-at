import { HotelFiltersSchema } from "../Form/types";

import { Container, Content, Header, Description } from './styles';

import NavButton from "../NavButton";

interface HotelCardProps {
    data: HotelFiltersSchema;
};

export default function Card({ data }: HotelCardProps) {
    return (
        <Container>
            <img src={data.imageBase64} alt='image-hotel' />

            <Content>

                <NavButton title={`Detalhes`} toNavigate={`details/${data.id}`} />

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

            </Content>

        </Container>
    );
};
