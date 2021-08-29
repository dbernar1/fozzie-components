const ErrorMessage = require('../../test-utils/component-objects/f-error-message.component');

const errorMessage = new ErrorMessage();

describe('Accessibility tests', () => {
    it('a11y - should test f-error-message component WCAG compliance', () => {
        expect(() => errorMessage.load()).toHaveNoA11yViolations('f-error-message');
    });
});
