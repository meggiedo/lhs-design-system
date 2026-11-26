import type { Preview } from '@storybook/react-vite';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/600.css';
import '@fontsource/figtree/700.css';
import '../src/tokens/tokens.css';
import '../src/components/components.css';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [(Story) => <div className="lhs-root"><Story /></div>],
  parameters: {
    layout: 'centered',
    controls: { expanded: true, sort: 'requiredFirst' },
    options: {
      storySort: {
        order: ['Start here', 'Foundations', ['Colors', 'Typography', 'Spacing & radius', 'Elevation', 'Icons'], 'Newly added', 'Search & filter', 'Spot cards & details', 'Buttons & forms', 'Navigation', 'Onboarding & profile'],
      },
    },
  },
};
export default preview;
