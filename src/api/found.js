import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/founds/${id}`),

  patch: (id, final4) => axios.patch(`${process.env.VUE_APP_API_BASE}/founds/${id}`, final4),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/founds/paging?page=${page}`)
}
