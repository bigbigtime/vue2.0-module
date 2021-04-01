const state = {
    account_type: "phone",
    // 用户名
    username_value: "",
    username_status: false,
    // 密码
    password_value: "",
    password_status: false,
};
const getters = {};
const mutations = {
    SET_STATE(state, payload){
        for(let key in payload) {
            state[key] = payload[key].value;
            // 本地存储
            payload[key].session && sessionStorage.setItem(key, payload[key].value)
            payload[key].local && localStorage.setItem(key, payload[key].value)
        }
    }
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}