const TakeawaypayActivation = require('../../test-utils/component-objects/f-takeawaypayActivation.component');
const takeawaypayActivation = new TakeawaypayActivation();

describe('Accessibility tests', () => {
    it('a11y - should test f-takeawaypayActivation component WCAG compliance', () => {
        expect(() => takeawaypayActivation.load()).toHaveNoA11yViolations('f-takeawaypayActivation');
    });
});
