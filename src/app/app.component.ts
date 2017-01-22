import _ from "lodash";
import { Component, ViewChild } from '@angular/core';
import { App, Platform, Nav } from "ionic-angular";
import { StatusBar, Splashscreen } from 'ionic-native';
import { Logger, LogLevel } from "log4ts";
import { Crashlytics } from '@cordova-plugin/fabric-crashlytics';

import { HomePage } from "../pages/home/home";
import { CrashlyticsPage } from "../pages/fabric/crashlytics/crashlytics";

const logger = new Logger("MyApp");

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = null;
    pages = [HomePage, CrashlyticsPage];
    menuTitle = "もくじ";

    isDevel = false;

    constructor(private app: App, private platform: Platform) {
        this.init();
    }

    private async init() {
        await this.platform.ready();
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

        this.isDevel = await LogLevel.isDevel();
    }

    crash() {
        Crashlytics.crash("Manually crashed.");
    }

    openPage(page) {
        this.nav.setRoot(page);
    }
}
