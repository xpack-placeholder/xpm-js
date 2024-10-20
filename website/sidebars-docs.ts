import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'getting-started/index',
      label: 'Getting Started'
    },
    {
      type: 'doc',
      id: 'install/index',
      label: 'Install Guide'
    },
    {
      type: 'doc',
      id: 'user/index',
      label: 'User Information'
    },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'FAQ'
    },
    {
      type: 'doc',
      id: 'support/index',
      label: 'Help Centre'
    },
    {
      type: 'doc',
      id: 'releases/index',
      label: 'Releases'
    },
    {
      type: 'doc',
      id: 'about/index',
      label: 'About'
    }, /*
    {
      type: 'doc',
      id: 'developer/index',
      label: 'Developer Information'
    },
    {
      type: 'doc',
      id: 'maintainer/index',
      label: 'Maintainer Information'
    }, */
  ],
};

export default sidebars;
