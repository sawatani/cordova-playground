import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { S3Client } from '@cordova-plugin/aws-s3';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrashlyticsPage } from '../pages/fabric/crashlytics/crashlytics';
import { AnswersPage } from "../pages/fabric/answers/answers";
import { S3Page } from "../pages/aws/s3/s3";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrashlyticsPage,
    AnswersPage,
    S3Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrashlyticsPage,
    AnswersPage,
    S3Page
  ],
  providers: [
    S3Client,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
