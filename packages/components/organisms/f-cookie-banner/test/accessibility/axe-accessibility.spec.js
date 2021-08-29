const LegacyCookieBanner = require('../../test-utils/component-objects/f-cookieBanner-legacy.component');
const legacyCookieBanner = new LegacyCookieBanner();

const CookieConsentBanner = require('../../test-utils/component-objects/f-cookieConsentBanner.component');
const cookieConsentBanner = new CookieConsentBanner();

describe('Legacy Accessibility tests', () => {
    it('a11y - should test legacy f-cookie-banner component WCAG compliance', () => {
        expect(() => legacyCookieBanner.load({
            'Locale': 'en-AU'
        })).toHaveNoA11yViolations('f-cookie-banner');
    });

    it('a11y - should test new f-cookie-banner component WCAG compliance', () => {
        expect(() => cookieConsentBanner.load({
            'Locale': 'en-GB'
        })).toHaveNoA11yViolations('f-cookie-banner');
    });
});
