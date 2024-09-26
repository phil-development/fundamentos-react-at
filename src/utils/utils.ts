import { HotelFiltersSchema } from '../components/Form/types';

const LOCAL_STORAGE_KEY = 'hotelData';

let currentId = 0;

export const nextId = () => {
    currentId++;
    return currentId;
};

export const addHotel = (hotelData: HotelFiltersSchema) => {

    try {

        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.push(hotelData);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedData));

    } catch (error) {

        console.error('Erro ao adicionar hotel:', error);

    };

};

export const getHotels = (): HotelFiltersSchema[] => {

    try {

        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return existingData ? JSON.parse(existingData) : [];

    } catch (error) {

        console.error('Erro ao obter hotéis:', error);
        return [];

    };

};

export const getHotelById = (hotelId: number): HotelFiltersSchema | undefined => {
    try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsedData: HotelFiltersSchema[] = existingData ? JSON.parse(existingData) : [];

        const hotel = parsedData.find(hotel => hotel.id === hotelId);
        return hotel;

    } catch (error) {

        console.error('Erro ao obter hotel por ID:', error);
        return undefined;

    };

};

export const deleteHotel = (hotelId: number) => {
    try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        let parsedData: HotelFiltersSchema[] = existingData ? JSON.parse(existingData) : [];

        const index = parsedData.findIndex(hotel => hotel.id === hotelId);

        if (index !== -1) {

            parsedData.splice(index, 1);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedData));
            console.log(`Hotel com ID ${hotelId} excluído com sucesso.`);

        } else {

            console.error(`Hotel com ID ${hotelId} não encontrado.`);

        };

    } catch (error) {
        console.error('Erro ao excluir hotel:', error);
    }
};

export const editHotel = (hotelId: number, updatedHotelData: HotelFiltersSchema) => {

    try {

        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData[hotelId] = updatedHotelData;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedData));

    } catch (error) {

        console.error('Erro ao editar hotel:', error);

    };

};