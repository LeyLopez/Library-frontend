import axios from 'axios';

const urlBase = 'http://localhost:8080/api/autor';

const authorService = {
    async getAllAuthors() {
        return axios.get(urlBase);
    },

    async getAuthorById(id) {
        const author = await axios.get(`${urlBase}/${id}`);
        return author.data;
    },

    async createAuthor(author) {
        const authorResponse = await axios.post(`${urlBase}`, author);
        return authorResponse.data;
    }


}

export default authorService;
