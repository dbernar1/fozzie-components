const Breadcrumbs = require('../../test-utils/component-objects/f-breadcrumbs.component');
const breadcrumbs = new Breadcrumbs();

describe('Accessibility tests', () => {
    it('a11y - should test f-breadcrumbs component WCAG compliance', () => {
        expect(() => breadcrumbs.load()).toHaveNoA11yViolations('f-breadcrumbs');
    });
});
