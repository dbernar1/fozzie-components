const Tabs = require('../../test-utils/component-objects/f-tabs.component');

const tabs = new Tabs();

describe('Accessibility tests', () => {
    it('a11y - should test f-tabs component WCAG compliance', () => {
        expect(() => tabs.load()).toHaveNoA11yViolations('f-tabs');
    });
});
