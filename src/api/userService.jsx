import axios from 'axios';

const urlBase = 'http://localhost:8080/api/usuario';
export const userService = {
  
  async getAllUsers(){
    return axios.get(urlBase);
  },

  async getUserByUsername(username, token){
    const userResponse = await axios.get(`${urlBase}/username/${username}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return userResponse.data;

  },

  async getUserById(id) {
    const user = await axios.get(`${urlBase}/${id}`);
    return user.data;
  },

  async createUser(user) {
    const userResponse = await axios.post(`${urlBase}`, user);
    return userResponse.data;
  },

  async updateUser(user) {
    const userResponse =  axios.put(`${urlBase}/${user.id}`, user);
    return userResponse.data;
  },

  async deleteUser(id) {
    axios.delete(`${urlBase}/${id}`);	
  }

}
