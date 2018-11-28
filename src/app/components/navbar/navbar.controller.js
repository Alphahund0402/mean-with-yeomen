export class NavbarController {

  constructor($auth){
    'ngInject';

    this.$auth = $auth;
    this.isAutthenticated = $auth.isAuthenticated;
  }

  logout(){
    this.$auth.logout();
  }
}
