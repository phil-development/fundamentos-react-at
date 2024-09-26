import { useState, ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
    UFResponse,
    CITYResponse, HotelFiltersSchema
} from './types';
import { addHotel, nextId } from "../../utils/utils";

const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const hotelFiltersSchema = z.object({
    id: z.number().default(nextId),
    name: z.string().min(3, `O nome deve ter no minimo 3 caracteres`),
    price: z.number().positive(`A diaria deve ser maior que zero!`),
    rating: z
        .number()
        .positive(`Escolha entre 1 a 5 estrelas`)
        .min(1, `Escolha entre 1 a 5 estrelas`)
        .max(5, `Escolha entre 1 a 5 estrelas`),
    description: z
        .string()
        .min(32, `A descrição deve ter no minimo 32 caracteres`)
        .max(120, `A descrição deve ter no máximo 120 caracteres`),
    descriptionServices: z
        .string()
        .min(32, `A descrição deve ter no minimo 32 caracteres`)
        .max(120, `A descrição deve ter no máximo 120 caracteres`),
    uf: z.string(),
    city: z.string(),
    imageBase64: z.string().optional(),
    hotelImage: z
        .instanceof(FileList)
        .refine((files) => files?.length == 1, "Escolha uma imagem")
        .refine(
            (files) => files?.[0]?.size <= 10 * 1024 * 1024,
            `Tamanho máximo do arquivo 10MB.`
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Arquivos aceitos: jpg, jpeg, png e webp"
        ),
});

export function useHotelForm() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<HotelFiltersSchema>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(hotelFiltersSchema),
    });

    const navigate = useNavigate();
    const [ufs, setUfs] = useState<UFResponse[]>([]);
    const [cities, setCities] = useState<CITYResponse[]>([]);
    const [currentUf, setCurrentUf] = useState("0");

    const handleFilterHotels = (data: HotelFiltersSchema) => {
        const file = data.hotelImage[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result as string;
            const hotelData = { ...data, imageBase64: base64String };
            addHotel(hotelData);
        };

        reader.readAsDataURL(file);

        navigate("/dashboard");
    };

    const getUFS = () => {
        axios
            .get(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
            )
            .then((response) => {
                setUfs(response.data);
            });
    };

    const
        getCities = () => {
            axios
                .get(
                    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentUf}/municipios`
                )
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

    return {
        handleSubmit,
        register,
        handleFilterHotels,
        errors,
        ufs,
        cities,
        handleCurrentUf,
    };
}
