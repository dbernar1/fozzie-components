const Searchbox = require('../../test-utils/component-objects/f-searchbox.component');

const searchbox = new Searchbox();

describe('Accessibility tests', () => {
    it('a11y - should test f-searchbox component WCAG compliance', () => {
        expect(() => searchbox.load()).toHaveNoA11yViolations('f-searchbox');
    });
});
