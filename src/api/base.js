import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/cards',
    headers: {
        'X-Api-Key': '732ca519-0c93-4863-af2b-50621b952543'
    }
})

export default async function getCard(number) {
    console.log(number);
    const resp = await api.get(`/xy1-${number}`);
    console.log(resp);
    return resp.data.data;
    
}