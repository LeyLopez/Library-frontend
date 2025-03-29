import axios from 'axios';
import React from 'react'

const urlBase = 'http://localhost:8080/api/reserva';

const reservationService  = {
    
    async getAllReservations(){
        return axios.get(urlBase);
    },

    async getReservationById(id){
        const reservation = await axios.get(`${urlBase}/${id}`);
        return reservation.data;
    },

    async createReservation(reservation){
        const reservationResponse = await axios.post(`${urlBase}`, reservation);
        return reservationResponse.data;
    },

    async updateReservation(reservation){
        const reservationUpdate = await axios.put(`${urlBase}/${reservation.id}`, reservation);
        return reservationUpdate.data;
    },

    async deleteReservation(id){
        axios.delete(`${urlBase}/${id}`);
    },

    async getReservationsByUserId(id){
        const reservations = await axios.get(`${urlBase}/usuario/${id}`);
        return reservations.data;
    },
    
}

export default reservationService;
