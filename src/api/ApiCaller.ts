import axios from "axios";
import config from "@/config";
import UserAuth from "@/store/UserAuth";
import DataView from "@/api/DataView";

class ApiCaller {
  private constructor() {}
  private static INSTANCE: ApiCaller = new ApiCaller();
  static getInstance = () => ApiCaller.INSTANCE;

  async login(authInfo: object) {
    return axios.post<DataView<UserAuth>>(
      `${config.serverOrigin}/login`,
      authInfo
    );
  }

  async logout() {
    return axios.post<DataView<null>>(`${config.serverOrigin}/logout`);
  }
}

const caller = ApiCaller.getInstance();
export default caller;
