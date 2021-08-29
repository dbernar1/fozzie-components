const Card = require('../../test-utils/component-objects/f-card.component');

const card = new Card();

describe('Accessibility tests', () => {
    it('a11y - should test f-card component WCAG compliance', () => {
        expect(() => card.load()).toHaveNoA11yViolations('f-card');
    });
});
