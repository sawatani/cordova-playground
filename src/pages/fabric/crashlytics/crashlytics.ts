import { Component } from '@angular/core';
import { Crashlytics } from "@cordova-plugin/fabric-crashlytics";

@Component({
    selector: 'page-fabric-crashlytics',
    templateUrl: 'crashlytics.html'
})
export class CrashlyticsPage {
    static readonly title = "Crashlytics";
    static readonly icon = "outlet";

    readonly title = CrashlyticsPage.title;

    async all() {
        this.log("Sample of 'log'");
        this.logException("Sample 'logException'");
        this.setBool("sample_bool", true);
        this.setDouble("sample_double", 1.23);
        this.setFloat("sample_float", 2.3);
        this.setInt("sample_int", 3);
        this.setUserIdentifier("sample_user_identifier");
        this.setUserName("sample_user_name");
        this.setUserEmail("sample@user.email");
    }

    async log(msg: string): Promise<void> {
        Crashlytics.log(msg);
    }

    async logException(msg: string): Promise<void> {
        Crashlytics.logException(msg);
    }

    async crash(msg: string): Promise<void> {
        Crashlytics.crash(msg);
    }

    async setBool(key: string, value: boolean): Promise<void> {
        Crashlytics.setBool(key, value);
    }

    async setDouble(key: string, value: number): Promise<void> {
        Crashlytics.setDouble(key, value);
    }

    async setFloat(key: string, value: number): Promise<void> {
        Crashlytics.setFloat(key, value);
    }

    async setInt(key: string, value: number): Promise<void> {
        Crashlytics.setInt(key, value);
    }

    async setUserIdentifier(value: string): Promise<void> {
        Crashlytics.setUserIdentifier(value);
    }

    async setUserName(value: string): Promise<void> {
        Crashlytics.setUserName(value);
    }

    async setUserEmail(value: string): Promise<void> {
        Crashlytics.setUserEmail(value);
    }
}
