const Loyalty = require('../../test-utils/component-objects/f-loyalty.component');

const loyalty = new Loyalty();

describe('Accessibility tests', () => {
    it('a11y - should test f-loyalty component WCAG compliance', () => {
        expect(() => loyalty.load()).toHaveNoA11yViolations('f-loyalty');
    });
});
