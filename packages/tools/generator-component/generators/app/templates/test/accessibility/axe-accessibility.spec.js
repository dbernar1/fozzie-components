const <%= name.filename %> = require('../../test-utils/component-objects/f-<%= name.class %>.component');
const <%= name.class %> = new <%= name.filename %>();

describe('Accessibility tests', () => {
    it('a11y - should test f-<%= name.class %> component WCAG compliance', () => {
        expect(() => <%= name.class %>.load()).toHaveNoA11yViolations('f-<%= name.class %>');
    });
});
