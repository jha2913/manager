import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/losts/${id}`),

  patch: (id, final3) => axios.patch(`${process.env.VUE_APP_API_BASE}/losts/${id}`, final3),

  lost: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/losts/paging?state=분실&page=${page}&size=1`),

  picture: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/losts/pagings?page=${page}&size=1`),

}
