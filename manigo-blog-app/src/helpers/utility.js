export const utility = {};

utility.baseUrl = "http://localhost:3001";

utility.auth = false;

utility.setAuthStatus = function(status) {
  utility.auth = status;
};

utility.getAuthStatus = function() {
  return utility.auth;
};
