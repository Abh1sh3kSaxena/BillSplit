import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IndividualPage } from '../pages/individual/individual';
import io from 'socket.io-client';
window["io"] = io;
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserListProvider } from '../providers/user-list/user-list';
import { SQLite } from '@ionic-native/sqlite';
import { CrudProvider } from '../providers/crud/crud';
import { BackandService } from '@backand/angular2-sdk';
import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndividualPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndividualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserListProvider,
    AlertController,
    SQLite,
    Toast,
    CrudProvider,
    BackandService
  ]
})
export class AppModule { }
