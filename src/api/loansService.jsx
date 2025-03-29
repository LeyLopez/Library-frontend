import axios from "axios";

const urlBase = 'http://localhost:8080/api/prestamo';

const loansService = {

    async getLoans() {
        return axios.get(urlBase);
    },

    async getLoanById(id) {
        const loan = await axios.get(`${urlBase}/${id}`);
        return loan.data;
    },

    async createLoan(loan) {
        const loanResponse = await axios.post(`${urlBase}`, loan);
        return loanResponse.data;
    },

    async updateLoan(loan) {
        const loanUpdate = await axios.put(`${urlBase}/${loan.id}`, loan);
        return loanUpdate.data;
    },

    async deleteLoan(id) {
        axios.delete(`${urlBase}/${id}`);
    },

    async getLoansByUserId(id) {
        const loans = await axios.get(`${urlBase}/usuario/${id}`);
        return loans.data;
    },



}

export default loansService;