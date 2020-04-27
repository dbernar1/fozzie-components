module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue'
    ],

    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    },

    transformIgnorePatterns: [
        'node_modules/(?!(babel-jest|jest-vue-preprocessor|lodash-es)/)'
    ],

    snapshotSerializers: [
        'jest-serializer-vue'
    ],

    testMatch: [
        '**/*.{spec|test}.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],

    testURL: 'http://localhost/'
};