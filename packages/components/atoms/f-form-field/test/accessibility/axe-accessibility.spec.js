const FormField = require('../../test-utils/component-objects/f-form-field.component');

const formfield = new FormField();

describe('Accessibility tests', () => {
    it('a11y - should test f-formField component WCAG compliance', () => {
        expect(() => formfield.load()).toHaveNoA11yViolations('f-form-field');
    });
});
