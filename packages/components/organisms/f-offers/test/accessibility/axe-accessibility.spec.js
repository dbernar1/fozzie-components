const Offers = require('../../test-utils/component-objects/f-offers.component');

const offers = new Offers();

describe('Accessibility tests', () => {
    it('a11y - should test f-offers component WCAG compliance', () => {
        expect(() => offers.load()).toHaveNoA11yViolations('f-offers');
    });
});
