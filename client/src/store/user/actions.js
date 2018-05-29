export default {
  login: (credentials) => ({
    type: 'LOGIN_REQUEST',
    credentials
  }),
  logout: () => ({
    type: 'LOGOUT_REQUEST',
  }),
  register: (credentials) => ({
    type: 'REGISTER_REQUEST',
    credentials
  }),
  getUser: () => ({
    type: 'USER_REQUEST'
  })
}