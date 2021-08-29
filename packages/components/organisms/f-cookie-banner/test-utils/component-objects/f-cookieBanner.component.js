const Page = require('@justeat/f-wdio-utils/src/page.object');

module.exports = class CookieBanner extends Page {
    get component () { return $('[data-test-id="cookieBanner-component"]')}

    isCookieBannerComponentDisplayed () {
        return this.component.isDisplayed();
    }
};
