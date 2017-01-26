import _ from "lodash";
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Logger } from "log4ts";
import { S3File } from "@cordova-plugin/aws-s3";

const logger = new Logger("S3Page");

@Component({
    selector: 'page-aws-s3',
    templateUrl: 's3.html'
})
export class S3Page {
    static readonly title = "AWS S3";
    static readonly icon = "outlet";

    readonly title = S3Page.title;

    constructor(private toastCtrl: ToastController) {
    }
}
