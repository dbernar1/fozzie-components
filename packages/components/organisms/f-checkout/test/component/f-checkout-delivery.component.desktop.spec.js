const Checkout = require('../../test-utils/component-objects/f-checkout.component');


let checkout = new Checkout();

describe('f-checkout "delivery" component tests', () => {
    beforeEach(() => {
        checkout.load({
            'Service Type': 'delivery',
            'Is User Logged In': true,
            'Is ASAP available': true,
        });
    });

    it('should enable a user to submit a postcode with correct characters', () => {
        // Arrange
        const addressInfo = {
            postcode: 'AR51 1AA'
        };

        // Act
        checkout.populateCheckoutForm(addressInfo);
        checkout.goToPayment();

        // Assert
        expect(checkout.isPostcodeTypeErrorDisplayed()).toBe(false);
    });
});
