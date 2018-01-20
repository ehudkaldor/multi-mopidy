import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      // { route: '',          name: 'home',         moduleId: PLATFORM.moduleName('./home/home'),       nav: true, title: 'Home' },
      { route: ['','sizer'],   name: 'sizer',      moduleId: PLATFORM.moduleName('./sizer/sizer'),           nav: true, title: 'Sizer' },
      { route: 'elements',     name: 'elements',   moduleId: PLATFORM.moduleName('./elements/elements'),     nav: true, title: 'Elements' }
    ]);

    this.router = router;
  }
}
