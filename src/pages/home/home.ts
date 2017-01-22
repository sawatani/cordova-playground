import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    static readonly title = "ホーム";
    static readonly icon = "home";

    readonly title = HomePage.title;

    constructor(public navCtrl: NavController) {
    }
}
