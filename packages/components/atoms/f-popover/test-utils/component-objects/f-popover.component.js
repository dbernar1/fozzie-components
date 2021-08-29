const Page = require('@justeat/f-wdio-utils/src/page.object');
const { COMPONENT } = require('./f-popover-selectors');

module.exports = class Popover extends Page {
    constructor() {
        super('atom', 'popover-component');
    }

    get component () { return $(COMPONENT); }

    load () {
        super.load(this.component);
    }

    waitForComponent () {
        super.waitForComponent(this.component);
    }

    isComponentDisplayed () {
        return this.component.isDisplayed();
    }
}
