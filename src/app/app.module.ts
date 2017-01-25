import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrashlyticsPage } from '../pages/fabric/crashlytics/crashlytics';
import { AnswersPage } from "../pages/fabric/answers/answers";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrashlyticsPage,
    AnswersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrashlyticsPage,
    AnswersPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
