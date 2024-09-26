import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from 'zod';

import { Container, Row, Field, Button } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

type UFResponse = {
    id: number;
    nome: string;
    sigla: string;
};

type CITYResponse = {

    id: number;
    nome: string;

};

const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

const hotelFiltersSchema = z.object({

    name: z.string().min(3, `O nome deve conter pelo menos 3 caracteres`),
    price: z.number().positive(`O valor da diaria deve ser maior que zero!`),
    description: z.string().min(32),
    descriptionServices: z.string().min(32),
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

type HotelFiltersSchema = z.infer<typeof hotelFiltersSchema>;


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

        console.log(data);

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

            <Field>

                <span>Preço da Diária</span>
                <input
                    placeholder="Insira o valor da diária"
                    {...register('price', { valueAsNumber: true })}
                    type="number"
                />
                {errors.price?.message && (<p>{errors.price?.message}</p>)}

            </Field>

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
