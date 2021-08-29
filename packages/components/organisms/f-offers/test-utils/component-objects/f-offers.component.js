const Page = require('@justeat/f-wdio-utils/src/page.object');
const { COMPONENT } = require('./f-offers-selectors');

module.exports = class Offers extends Page {
    constructor() {
        super('organism', 'v-offers-component');
    }

    get component () { return $(COMPONENT); }

    load () {
        super.load(this.component);
    }

    isComponentDisplayed () {
        return this.component.isDisplayed();
    }
};
