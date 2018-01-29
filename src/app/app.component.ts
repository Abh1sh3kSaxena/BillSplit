import { Component, ViewChild } from '@angular/core';
import { Nav, Platform  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IndividualPage} from '../pages/individual/individual';
import { BackandService } from '@backand/angular2-sdk'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , private backand:BackandService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title: "Users", component: IndividualPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backand.init({
        appName: 'bill5plitter',
        signUpToken: 'fc6f1585-e8b9-4636-ad32-e6e1796fd4a5',
        anonymousToken: '8d974ed8-8b1c-4fee-b3d1-569f872c549f',
        runSocket: true,
        mobilePlatform: 'ionic'
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
