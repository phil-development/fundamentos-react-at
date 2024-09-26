import { useState, ChangeEvent } from 'react';

import { Container } from './styles';

import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
    onSearch: (searchTerm: string) => void;
};

export default function Search({ onSearch }: SearchProps) {

    const [searchTerm, setSearchTerm] = useState('');

    const
        handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);

            onSearch(event.target.value); // Chama a função de pesquisa ao digitar
        };

    return (
        <Container>
            <IoSearchOutline />
            <input
                type="text"
                placeholder="Pesquisar hotéis..."
                value={searchTerm}
                onChange={handleChange}
            />
        </Container>
    );
};
