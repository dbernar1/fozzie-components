const HomePromotionCard1 = require('../../test-utils/component-objects/f-content-cards-home-promotion-card1.component');
const HomePromotionCard2 = require('../../test-utils/component-objects/f-content-cards-home-promotion-card2.component');


const card1 = new HomePromotionCard1();
const card2 = new HomePromotionCard2();

describe('Accessibility tests', () => {
    it('a11y - should test f-contentCard component WCAG compliance', () => {
        expect(() => card1.load()).toHaveNoA11yViolations('f-contentCard-homePromotion-1');
    });

    it('a11y - should test f-contentCard component WCAG compliance', () => {
        expect(() => card2.load()).toHaveNoA11yViolations('f-contentCard-homePromotion-2');
    });
});
