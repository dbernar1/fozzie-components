const Registration = require('../../test-utils/component-objects/f-registration.component');

const registration = new Registration();


describe('Accessibility tests', () => {
    it('a11y - should test f-registration component WCAG compliance', () => {
        expect(() => registration.load()).toHaveNoA11yViolations('f-registration');
    });
});
