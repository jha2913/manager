import axios from 'axios'

export default {

  get: () => axios.get(`${process.env.VUE_APP_API_BASE}/adoptions`),

  put: (id) => axios.put(`${process.env.VUE_APP_API_BASE}/adoptions/${id}/put`),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/adoptions/paging?page=${page}`)
}
