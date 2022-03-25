import axios from 'axios';

export default {
    state: {
        findTextField: [],
        query: "vue",
    },
    mutations: {
        setTextField(state, payload) {
            state.findTextField = payload
        },
        setQuery(state, payload) {
            state.query = payload;
        }
    },
    getters: {
        getTextField(state) { 
            return state.findTextField
        },
        getQuery(state) { 
            return state.query
        }
    },
    actions: {
        async fetchList({ commit }, query) {
            try {
                const data = await axios.get(`https://data.jsdelivr.com/v1/package/npm/${query}`);
                commit('setTextField', data.data.versions.map((item) => ({ "name": item })) ) 
            }catch (error) {
                console.log(error);
                alert(error.response.data.message);
            }
        }
    },
}