import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from 'zod';

import { Container, Row, Field, Button } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

import { UFResponse, CITYResponse, HotelFiltersSchema } from './types';

import { addHotel, nextId } from "../../utils/utils";

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

export const hotelFiltersSchema = z.object({

    id: z.number().default(nextId),
    name: z.string().min(3, `O nome deve ter no minimo 3 caracteres`),
    price: z.number().positive(`O valor da diaria deve ser maior que zero!`),
    rating: z.number().min(1).max(5),
    description: z.string().min(32, `A descrição deve ter no minimo 32 caracteres`),
    descriptionServices: z.string().min(32, `A descrição deve ter no minimo 32 caracteres`),
    uf: z.string(),
    city: z.string(),
    hotelImage: z
        .instanceof(FileList)
        .refine((files) => files?.length == 1, "Image is required.")
        .refine(
            (files) => files?.[0]?.size <= 10 * 1024 * 1024,
            `Max file size is 10MB.`
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),

});

// Não tive tempo de deixar o componente reutilizavel, e nem de separa a logica em um arquivo de hook personalizado, foi o que deu de fazer :)
export default function Form() {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<HotelFiltersSchema>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(hotelFiltersSchema),
    });

    const [ufs, setUfs] = useState<UFResponse[]>([]);
    const [cities, setCities] = useState<CITYResponse[]>([]);
    const [currentUf, setCurrentUf] = useState('0');

    const handleFilterHotels = (data: HotelFiltersSchema) => {

        addHotel(data);

    };

    const getUFS = () => {

        axios
            .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then((response) => {
                setUfs(response.data);
            });
    };

    const getCities = () => {

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentUf}/municipios`)
            .then((response) => {
                setCities(response.data);
            });
    };

    const handleCurrentUf = (event: ChangeEvent<HTMLSelectElement>) => {

        const UF = event.target.value;
        setCurrentUf(UF);

    };

    useEffect(() => getUFS(), []);

    useEffect(() => getCities(), [currentUf]);

    return (
        <Container onSubmit={handleSubmit(handleFilterHotels)}>

            <Field>

                <span>Nome do Hotel</span>
                <input
                    placeholder="Insira o nome do hotel"
                    {...register('name')}
                    type="text"
                />
                {errors.name?.message && (<p>{errors.name?.message}</p>)}

            </Field>

            <Row>

                <Field>

                    <span>Classificação</span>
                    <input
                        placeholder="Insira a classificação"
                        {...register('rating', { valueAsNumber: true })}
                    />

                </Field>

                <Field>

                    <span>Preço da Diária</span>
                    <input
                        placeholder="Insira o valor da diária"
                        {...register('price', { valueAsNumber: true })}
                        type="number"
                    />
                    {errors.price?.message && (<p>{errors.price?.message}</p>)}

                </Field>

            </Row>

            <Field>

                <span>Descrição do Hotel</span>
                <textarea
                    placeholder="Insira a descrição do hotel"
                    {...register('description')}
                />
                {errors.description?.message && (<p>{errors.description?.message}</p>)}

            </Field>

            <Field>

                <span>Descrição dos Serviços</span>
                <textarea
                    placeholder="Insira a descrição dos serviços do hotel"
                    {...register('descriptionServices')} />
                {errors.descriptionServices?.message && (<p>{errors.descriptionServices?.message}</p>)}

            </Field>

            <Row>

                <Field>

                    <span>Estado</span>

                    <select {...register('uf')} onChange={handleCurrentUf}>
                        <option value="0">Selecione um estado</option>
                        {ufs.map((uf) => (
                            <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                        ))}
                    </select>
                    {errors.uf?.message && (<p>{errors.uf?.message}</p>)}

                </Field>

                <Field>

                    <span>Cidade</span>
                    <select {...register('city')}>
                        <option value="0">Selecione uma cidade</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.nome}>{city.nome}</option>
                        ))}
                    </select>
                    {errors.city?.message && (<p>{errors.city?.message}</p>)}

                </Field>

            </Row>

            <Field>

                <span>Imagem do Hotel</span>
                <input {...register('hotelImage')} type="file"></input>
                {errors.hotelImage?.message && (<p>{errors.hotelImage?.message}</p>)}

            </Field>

            <Button type="submit">Registrar</Button>

        </Container>
    );
};
