const SkeletonLoader = require('../../test-utils/component-objects/f-skeletonLoader.component');

const skeletonLoader = new SkeletonLoader();

describe('Accessibility tests', () => {
    it('a11y - should test f-skeletonLoader component WCAG compliance', () => {
        expect(() => skeletonLoader.load()).toHaveNoA11yViolations('f-skeletonLoader');
    });
});
