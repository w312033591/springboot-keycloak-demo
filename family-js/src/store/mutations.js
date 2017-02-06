import * as types from './mutation-types'

export default {
  [types.CHECK_USER_IS_LOGIN] (state, keycloakAuth) {
    console.log("888888888");
    state.auth.loggedIn = true;
    state.auth.authz = keycloakAuth;
    state.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/" + keycloakAuth.realm + "/protocol/openid-connect/logout?redirect_uri=http://localhost:8089/index.html"
  }
};
