import _ from "lodash";
import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Logger } from "log4ts";
import { Answers } from "@cordova-plugin/fabric-answers";

const logger = new Logger("AnswersPage");

@Component({
    selector: 'page-fabric-answers',
    templateUrl: 'answers.html'
})
export class AnswersPage {
    static readonly title = "Answers";
    static readonly icon = "outlet";

    readonly title = AnswersPage.title;
    readonly events: EventParam[] = [];

    async all() {
        const promises = _.map(this.events, async (x) => x.go());
        await Promise.all(promises);
        this.toastCtrl.create({
            message: 'All of events are posted',
            duration: 3000,
            position: 'middle'
        }).present();
    }

    constructor(private toastCtrl: ToastController) {
        this.events.push(new EventParam("Login", {
            method: "sample_method",
            success: "true"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("SignUp", {
            method: "sample_method",
            success: "true"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Invite", {
            method: "sample_method"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("LevelStart", {
            levelName: "sample_levelName"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("LevelEnd", {
            levelName: "sample_levelName",
            score: "321",
            success: "true"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Purchase", {
            itemPrice: "123",
            currency: "JPY",
            itemName: "sample_itemName",
            itemType: "sample_itemType",
            itemId: "sample_itemId",
            success: "true"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("AddToCart", {
            itemPrice: "123",
            currency: "JPY",
            itemName: "sample_itemName",
            itemType: "sample_itemType",
            itemId: "sample_itemId"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("StartCheckout", {
            totalPrice: "123",
            currency: "JPY",
            itemCount: "1"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("ContentView", {
            contentName: "sample_contentName",
            contentType: "sample_contentType",
            contentId: "sample_contentId"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Search", {
            query: "sample_query"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Share", {
            method: "sample_method",
            contentName: "sample_contentName",
            contentType: "sample_contentType",
            contentId: "sample_contentId"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Rating", {
            rating: "1",
            contentName: "sample_contentName",
            contentType: "sample_contentType",
            contentId: "sample_itemType"
        }, {
            custom_sample: "sample_value"
        }));

        this.events.push(new EventParam("Custom", {
            name: "sample_name"
        }, {
            attribute_sample: "sample_attribute"
        }));
    }
}

export class EventParam {
    constructor(
        public readonly name: string,
        public params: { [key: string]: string },
        attributeParams: { [key: string]: string } = {}) {

        this.attributes =  _.isEmpty(attributeParams) ? null : _.map(attributeParams, (value, key) => {
            return {
                key: key,
                value: value
            };
        });
    }

    get paramKeys(): string[] {
        return _.keys(this.params);
    }
    readonly attributes: { key: string; value: string }[];

    async go() {
        function filt(src: string): string | number | boolean {
            if (src.match(/^true$/i)) {
                return true;
            } else if (src.match(/^false$/i)) {
                return false;
            } else if (src.match(/^\d*\.?\d+$/)) {
                return Number(src);
            }
            return src;
        }
        const args: any = {};
        _.forEach(this.params, (value, key) => {
            if (value) args[key] = filt(value);
        });
        if (!_.isEmpty(this.attributes)) {
            args.attributes = {};
            this.attributes.forEach((x) => {
                if (x.key && x.value) args.attributes[x.key] = filt(x.value);
            });
        }
        const methodName = `event${this.name}`;
        logger.debug(`Answers.${methodName}(${JSON.stringify(args, null, 4)})`);
        return _.invoke(Answers, methodName, args);
    }
}
