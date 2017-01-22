import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-crashlytics',
    templateUrl: 'crashlytics.html'
})
export class CrashlyticsPage {
    static readonly title = "Crashlytics";
    static readonly icon = "cube";

    readonly title = CrashlyticsPage.title;

    constructor(public navCtrl: NavController) {
    }
}
