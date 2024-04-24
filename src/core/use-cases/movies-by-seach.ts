import { HttpAdapter } from "../../config/adapters/http/http.adapters";


export const moviesBySearch = async (fetcher: HttpAdapter) => {

    const bySearch = await fetcher.get('/?s=');
}