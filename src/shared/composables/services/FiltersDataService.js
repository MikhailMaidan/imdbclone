import { BaseFetcher } from "@/shared/composables/fetcher/BaseFetcher.js";
import { FILTERS_DATA } from "@/shared/composables/constants/constants";


export const FiltersDataService = () => {
    const movieService = new BaseFetcher(FILTERS_DATA);

    const getFiltersData = async () => {
        try {
            const response = await movieService.getData();
    
            return {
                genres: response.genres,
                countries: response.countries,
            }
        } catch (err) {
            console.error('Error', err);
        }
    }
    return {
        getFiltersData,
    }
}