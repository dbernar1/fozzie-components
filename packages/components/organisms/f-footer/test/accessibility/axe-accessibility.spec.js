import forEach from 'mocha-each';

const Footer = require('../../test-utils/component-objects/f-footer.component');

let footer = new Footer();

describe('Accessibility tests', () => {
    forEach(['en-GB', 'en-AU', 'en-IE', 'en-NZ', 'da-DK', 'es-ES', 'it-IT', 'nb-NO'])
        .it('a11y - should test f-footer component WCAG compliance for country code "%s" with default options selected', tenant => {
            expect(() => footer.load({
                'Locale': tenant,
                'Show country selector': 'false',
                'Show courier links': 'false'
            })).toHaveNoA11yViolations('f-footer');
        });

    forEach(['en-GB', 'en-AU', 'en-IE', 'en-NZ'])
        .it('a11y - should test f-footer component WCAG compliance for country code "%s" with extra options selected', tenant => {
            expect(() => footer.load({
                'Locale': tenant,
                'Show country selector': 'true',
                'Show courier links': 'false'
            })).toHaveNoA11yViolations('f-footer');
        });
});
