const Button = require('../../test-utils/component-objects/f-button.component');

let button = new Button();

describe('Accessibility tests', () => {
    it('a11y - should test f-button action component WCAG compliance', () => {
        expect(() => button.load({
            'Button Type': 'primary',
            'Button Size': 'medium',
        })).toHaveNoA11yViolations('f-button - action');
    });

    it('a11y - should test f-button link component WCAG compliance', () => {
        expect(() => button.loadLink({
            'Button Type': 'link',
            'href': 'link',
            'Button Size': 'medium',
        })).toHaveNoA11yViolations('f-button - link');
    });
});
