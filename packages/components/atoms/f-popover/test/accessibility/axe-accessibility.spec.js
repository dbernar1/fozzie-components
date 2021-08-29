const Popover = require('../../test-utils/component-objects/f-popover.component');

const popover = new Popover();

describe('Accessibility tests', () => {
    it('a11y - should test f-popover component WCAG compliance', () => {
        expect(() => popover.load()).toHaveNoA11yViolations('f-popover');
    });
});
