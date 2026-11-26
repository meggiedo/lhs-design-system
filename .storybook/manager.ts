import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Longhorn Studies Design System',
    colorPrimary: '#bf5700',
    colorSecondary: '#bf5700',
    fontBase: '"Figtree", system-ui, sans-serif',
  }),
});
