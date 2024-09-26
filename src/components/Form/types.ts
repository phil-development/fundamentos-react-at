import { z } from 'zod';

import { hotelFiltersSchema } from './index';

export type HotelFiltersSchema = z.infer<typeof hotelFiltersSchema>;

export type UFResponse = {
    id: number;
    nome: string;
    sigla: string;
};

export type CITYResponse = {

    id: number;
    nome: string;

};