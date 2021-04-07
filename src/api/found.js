import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/losts/${id}`),

  patch: (id, final3) => axios.patch(`${process.env.VUE_APP_API_BASE}/losts/${id}`, final3),

  found: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/losts/paging?state=보호&page=${page}&size=1`),

}
