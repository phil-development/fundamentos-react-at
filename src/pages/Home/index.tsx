import { Container, Content, Card, Description } from './styles';

import Menu from '../../components/Menu';

import { getHotels } from '../../utils/utils';
import NavButton from '../../components/NavButton';

export default function Home() {

    const hotels = getHotels();

    return (
        <Container>

            <Menu />

            <Content>

                {hotels.map(hotel => (
                    <Card key={hotel.id}>
                        <img src={hotel.imageBase64} alt='image-hotel' />

                        <Description>

                            <div>
                                <h3>{hotel.name}</h3>
                                <span>{'⭐'.repeat(hotel.rating)}</span>
                            </div>

                            <h4>{hotel.price}</h4>

                            <p>{hotel.description}</p>
                            <p>{hotel.descriptionServices}</p>

                            <p>{hotel.city} - {hotel.uf}</p>

                            <NavButton title={`Detalhes`} toNavigate={`details/${hotel.id}`} />

                        </Description>

                    </Card>
                ))}

            </Content>

        </Container>
    );
};