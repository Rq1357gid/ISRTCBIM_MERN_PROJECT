class AuthService {
    static isAuthenticated = false;
  
    static login() {
      this.isAuthenticated = true;
    }
  
    static logout() {
      this.isAuthenticated = false;
    }
  }
  
  export default AuthService;

// class AuthService {
//   static isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

//   static login() {
//     this.isAuthenticated = true;
//     localStorage.setItem('isAuthenticated', 'true');
//   }

//   static logout() {
//     this.isAuthenticated = false;
//     localStorage.setItem('isAuthenticated', 'false');
//   }
// }

// export default AuthService;
