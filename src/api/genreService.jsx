import axios from "axios";

const urlBase = 'https://charming-happiness-production.up.railway.app/api/genero';

const genreService = {
    async getAllGenres() {
        return axios.get(urlBase);
    },

    async getGenreById(id) {
        const genre = await axios.get(`${urlBase}/${id}`);
        return genre.data;
    },

    async createGenre(genre) {
        const genreResponse = await axios.post(`${urlBase}`, genre);
        return genreResponse.data;
    },

    async updateGenre(genre) {
        const genreUpdate = await axios.put(`${urlBase}/${genre.id}`, genre);
        return genreUpdate.data;
    },

    async deleteGenre(id) {
        axios.delete(`${urlBase}/${id}`);
    }
};

export default genreService;