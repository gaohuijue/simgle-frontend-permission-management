import Vue from "vue";
import Vuex, { ActionContext, Store } from "vuex";
import RootState from "@/store/RootState";
import UserAuth from "@/store/UserAuth";
import ApiCaller from "@/api/ApiCaller";
import MutationList from "@/store/MutationList";
import ActionList from "@/store/ActionList";

Vue.use(Vuex);
const initState = new RootState();
initState.userAuth = JSON.parse(
  <string>window.localStorage.getItem("authentication")
);

const store = new Store<RootState>({
  state: initState,
  mutations: {
    [MutationList.SET_USER_AUTH](state: RootState, payload?: any) {
      store.state.userAuth = <UserAuth | null>payload;
    }
  },
  actions: {
    async [ActionList.REQUEST_LOGIN](
      injectee: ActionContext<RootState, RootState>,
      payload?: any
    ) {
      const resp = await ApiCaller.login(<object>payload);
      window.localStorage.setItem(
        "authentication",
        JSON.stringify(resp.data.data)
      );
      injectee.commit(MutationList.SET_USER_AUTH, resp.data.data);
      return resp.data;
    },

    async [ActionList.REQUEST_LOGOUT](
      injectee: ActionContext<RootState, RootState>,
      payload?: any
    ) {
      const resp = await ApiCaller.logout();
      window.localStorage.removeItem("authentication");
      injectee.commit(MutationList.SET_USER_AUTH, null);
      return resp.data;
    }
  },
  modules: {}
});
export default store;
