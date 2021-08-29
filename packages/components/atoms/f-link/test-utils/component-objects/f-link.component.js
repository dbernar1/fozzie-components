const Page = require('@justeat/f-wdio-utils/src/page.object');
const { COMPONENT } = require('./f-link-selectors')

module.exports = class Link extends Page {

    get component () { return $(COMPONENT); }

    load () {
        this.open();
        this.waitForComponent(this.component);
    }

    open () {
        super.openComponent('atom', 'v-link-component');
    }

    isComponentDisplayed () {
        return this.component.isDisplayed();
    }
}
