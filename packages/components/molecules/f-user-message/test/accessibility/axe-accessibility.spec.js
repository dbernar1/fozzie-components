const UserMessage = require('../../test-utils/component-objects/f-user-message.component');

const userMessage = new UserMessage();

describe('Accessibility tests', () => {
    it('a11y - should test f-user-message component WCAG compliance', () => {
        expect(() => userMessage.load()).toHaveNoA11yViolations('f-user-message');
    });
});
