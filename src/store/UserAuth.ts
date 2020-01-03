class UserAuth {
  username: string = "";
  name: string = "";
  permissions: string[] = [];

  canAccess(routeKey: string) {
    return this.permissions.indexOf(routeKey) >= 0;
  }
}

export default UserAuth;
