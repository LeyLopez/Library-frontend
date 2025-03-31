import axios from 'axios';
import React from 'react'

const urlBase = 'http://localhost:8080/api/libro';
export const bookService = {
  
    async getAllBooks(){
        return axios.get(urlBase);
    },

    async getBookById(id){
        const book = await axios.get(`${urlBase}/${id}`);
        return book.data;
    },

    async createBook(book){
        const bookResponse = await axios.post(`${urlBase}`, book);
        return bookResponse.data;
    },

    async updateBook(book){
        const bookUpdate = await axios.put(`${urlBase}/${book.id}`, book);
        return bookUpdate.data;
    },

    async deleteBook(id){
        axios.delete(`${urlBase}/${id}`);
    }

}
