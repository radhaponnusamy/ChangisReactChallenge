
import { ImageData } from '../types/ImageData';
import config from './config';  


export const fetchImages = async (): Promise<ImageData[]> => {
    const response = await fetch(config.API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.data as ImageData[];
};
