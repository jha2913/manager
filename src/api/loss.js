import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/losss/${id}`),

  patch: (id, final4) => axios.patch(`${process.env.VUE_APP_API_BASE}/losss/${id}`, final4),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/losss/paging?page=${page}`)
}
