import axios from 'axios'

export default {

  get: (id) => axios.get(`${process.env.VUE_APP_API_BASE}/lostAndFounds/${id}`),

  patch: (id, final3) => axios.patch(`${process.env.VUE_APP_API_BASE}/lostAndFounds/${id}`, final3),

  list: (page) => axios.get(`${process.env.VUE_APP_API_BASE}/lostAndFounds/paging?page=${page}`)
}
