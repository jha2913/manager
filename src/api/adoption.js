import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/adoptions/${id}`),

  patch: (id, final2) => axios.patch(`${process.env.VUE_APP_API_BASE}/adoptions/${id}`, final2),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/adoptions/paging?page=${page}`)
}
