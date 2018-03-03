const path = require('path');
const _ = require('lodash');
const combineContexts = require('./src/utilities/combine-contexts');

module.exports = {
  maximumWorkers: process.env.TRAVIS && 1,
  template: {
    file: path.join(__dirname, 'template.ejs')
  },
  output: 'build',
  title: 'Bannertime Documentation',
  keywords: ['yeoman-generator', 'html5', 'banner', 'ad', 'gulp', 'scaffold', 'framework'],
  layout: () => require('./src/components/Site/Site.jsx').default,
  paths: {
    '/': {
      title: 'Home',
      layout: () => require('./src/components/Page/Page.jsx').default,
      content: () => require.context('./loaders/page-loader!./src/content', false, /^\.\/.*\.md$/),
      index: () => require('./src/components/Splash/Splash.jsx').default
    },
    guides: {
      title: 'Guides',
      url: ({ sectionName, fileName }) => `/${sectionName}/${fileName}/`,
      layout: () => require('./src/components/Page/Page.jsx').default,
      content: () =>
        require.context('./loaders/page-loader!./src/content/guides', false, /^\.\/.*\.md$/)
    },
    documentation: {
      title: 'Documentation',
      url: ({ sectionName, fileName }) => `/${sectionName}/${fileName}/`,
      layout: () => require('./src/components/Page/Page.jsx').default,
      content: () =>
        require.context('./loaders/page-loader!./src/content/documentation', false, /^\.\/.*\.md$/)
    }
  }
};
