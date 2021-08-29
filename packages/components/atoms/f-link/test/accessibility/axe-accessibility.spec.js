const Link = require('../../test-utils/component-objects/f-link.component');
const link = new Link();

describe('Accessibility tests', () => {
    it('a11y - should test f-link component WCAG compliance', () => {
        expect(() => link.load()).toHaveNoA11yViolations('f-link');
    });
});
