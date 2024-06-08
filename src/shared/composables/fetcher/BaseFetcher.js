import {
    MAIN_URL, 
    KINOPOISK_API_KEY
} from "@/shared/composables/constants/constants"

export class BaseFetcher {
    constructor(kinopoiskUrl) {
        this.RESOURCES = MAIN_URL;
        this.API_KEY = KINOPOISK_API_KEY;
        this.kinopoiskUrl = kinopoiskUrl;
    }

    async getData(request) {
        const formatedData = this.formatData(request);
        return new Promise((resolve, reject) => {
            fetch(`${this.RESOURCES}/${this.kinopoiskUrl}?${formatedData}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.items.length) {
                    resolve(json.items);
                } else {
                    reject();
                }
            })
            .catch(err => console.log(err))
        });
    }
    
    formatData(requestData) {
        const params = new URLSearchParams(requestData);
        return params.toString();
    }
}

