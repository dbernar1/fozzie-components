const MediaElement = require('../../test-utils/component-objects/f-mediaElement.component');

const mediaElement = new MediaElement();

describe('Accessibility tests', () => {
    it('a11y - should test f-mediaElement component WCAG compliance', () => {
        expect(() => mediaElement.load()).toHaveNoA11yViolations('f-mediaElement');
    });
});
