import axios from 'axios'

export default {

  get: () => axios.get(`${process.env.VUE_APP_API_BASE}/lostAndFounds`),

  put: (id) => axios.put(`${process.env.VUE_APP_API_BASE}/lostAndFounds/${id}/put`),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/lostAndFounds/paging?page=${page}`)
}
