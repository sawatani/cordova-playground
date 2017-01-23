import { Component } from '@angular/core';
import { Answers } from "@cordova-plugin/fabric-answers";

@Component({
    selector: 'page-fabric-answers',
    templateUrl: 'answers.html'
})
export class AnswersPage {
    static readonly title = "Answers";
    static readonly icon = "outlet";

    readonly title = AnswersPage.title;

    async all() {
        this.eventLogin({ method: "Sample of 'log'" });
    }

    async eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventLogin(params);
    }

    async eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventSignUp(params);
    }

    async eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventInvite(params);
    }

    async eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventLevelStart(params);
    }

    async eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventLevelEnd(params);
    }

    async eventPurchase(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventPurchase(params);
    }

    async eventAddToCart(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventAddToCart(params);
    }

    async eventStartCheckout(params: {
        totalPrice?: number,
        currency?: string,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventStartCheckout(params);
    }

    async eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventContentView(params);
    }

    async eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventShare(params);
    }

    async eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        itemType?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventRating(params);
    }

    async eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): Promise<void> {
        return Answers.eventCustom(params);
    }
}
