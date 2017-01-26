import _ from "lodash";
import { Component, ViewChild } from '@angular/core';
import { App, Platform, Nav } from "ionic-angular";
import { StatusBar, Splashscreen } from 'ionic-native';
import { Logger, LogLevel } from "log4ts";
import { Crashlytics } from '@cordova-plugin/fabric-crashlytics';

import { HomePage } from "../pages/home/home";
import { CrashlyticsPage } from "../pages/fabric/crashlytics/crashlytics";
import { AnswersPage } from "../pages/fabric/answers/answers";
import { S3Page } from "../pages/aws/s3/s3";

const logger = new Logger("MyApp");

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = null;
    pages = [HomePage, CrashlyticsPage, AnswersPage, S3Page];
    menuTitle = "もくじ";

    isDevel = false;

    constructor(private app: App, private platform: Platform) {
        this.init();
    }

    private async init() {
        await this.platform.ready();

        this.isDevel = await LogLevel.isDevel();
        Logger.concreateWriter = {
            log(msg: string) {
                Crashlytics.log(msg);
            }
        }
        logger.info(() => `Platform is ready.`);
        this.rootPage = HomePage;

        Splashscreen.hide();
        if (this.platform.is("android")) {
            _.forEach(_.flatten([0, _.map(_.range(10), (i) => 100)]), (n) => {
                setTimeout(() => {
                    StatusBar.backgroundColorByName("black");
                }, n);
            });
        } else {
            StatusBar.styleDefault();
        }
    }

    crash() {
        Crashlytics.crash("Manually crashed.");
    }

    openPage(page) {
        this.nav.setRoot(page);
    }
}
