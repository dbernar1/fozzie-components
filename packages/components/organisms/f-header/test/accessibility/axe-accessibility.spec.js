import forEach from 'mocha-each';
const Header = require('../../test-utils/component-objects/f-header.component');

const header = new Header();

describe('Accessibility tests', () => {
    forEach(['en-GB', 'en-AU', 'en-NZ', 'en-IE', 'it-IT', 'es-ES', 'da-DK', 'nb-NO'])
        .it('a11y - should test f-header component WCAG compliance for "%s"', tenant => {
            expect(() => header.load({
                'Locale': tenant,
                'Show offers link': 'true',
                'Show delivery enquiry': 'true'
            })).toHaveNoA11yViolations('f-header');
        });
});
