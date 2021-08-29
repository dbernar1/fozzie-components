const Page = require('@justeat/f-wdio-utils/src/page.object');

module.exports = class Card extends Page {
    constructor() {
        super('atom', 'card-component');
    }

    load () {
        super.load(this.component);
    }

    get component () { return $('[data-test-id="card-component"]'); }

    isComponentDisplayed () {
        return this.component.isDisplayed();
    }
};
