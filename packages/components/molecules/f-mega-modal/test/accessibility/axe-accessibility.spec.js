const MegaModal = require('../../test-utils/component-objects/f-mega-modal.component');

const megaModal = new MegaModal();

describe('Accessibility tests', () => {
    it('a11y - should test f-mega-modal component WCAG compliance', () => {
        expect(() => megaModal.load()).toHaveNoA11yViolations('f-mega-modal');
    });
});
