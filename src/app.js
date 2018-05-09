import {PLATFORM} from 'aurelia-pal';

export class App {

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      // { route: '',          name: 'home',         moduleId: PLATFORM.moduleName('./home/home'),       nav: true, title: 'Home' },
      { route: ['','home'],  name: 'home',      moduleId: PLATFORM.moduleName('./pages/home/home'),           nav: true, title: 'Home' },
      { route: 'clients',     name: 'clients',   moduleId: PLATFORM.moduleName('./pages/clients/clients'),     nav: true, title: 'Clients' },
      { route: 'broadcasters',     name: 'broadcasters',   moduleId: PLATFORM.moduleName('./pages/broadcasters/broadcasters'),     nav: true, title: 'Broadcasters' }
    ]);

    this.router = router;
  }
}
