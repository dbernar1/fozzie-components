const Alert = require('../../test-utils/component-objects/f-alert.component');

const alert = new Alert();

describe('Accessibility tests', () => {
    it('a11y - should test f-alert component WCAG compliance', () => {
        expect(() => alert.load()).toHaveNoA11yViolations('f-alert');
    });
});
