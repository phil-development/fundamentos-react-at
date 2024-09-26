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
    }
};

export const getHotels = (): HotelFiltersSchema[] => {
    try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return existingData ? JSON.parse(existingData) : [];
    } catch (error) {
        console.error('Erro ao obter hotéis:', error);
        return [];
    }
};

export const deleteHotel = (index: number) => {
    try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData.splice(index, 1);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedData));
    } catch (error) {
        console.error('Erro ao excluir hotel:', error);
    }
};

export const editHotel = (index: number, updatedHotelData: HotelFiltersSchema) => {
    try {
        const existingData = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        parsedData[index] = updatedHotelData;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsedData));
    } catch (error) {
        console.error('Erro ao editar hotel:', error);
    }
};