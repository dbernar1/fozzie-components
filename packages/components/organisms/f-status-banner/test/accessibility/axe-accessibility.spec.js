const StatusBanner = require('../../test-utils/component-objects/f-statusBanner.component');

const statusBanner = new StatusBanner();

describe('Accessibility tests', () => {
    it('a11y - should test f-statusBanner component WCAG compliance', () => {
        expect(() => statusBanner.load()).toHaveNoA11yViolations('f-statusBanner');
    });
});
