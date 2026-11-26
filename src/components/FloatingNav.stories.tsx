import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatingNav } from './FloatingNav';

const meta: Meta<typeof FloatingNav> = {
  title: 'Navigation/Floating nav',
  component: FloatingNav,
  parameters: { docs: { description: { component: 'Bottom navigation that floats above the page. Labeled or icon only. Click a tab to switch.' } } },
  decorators: [(S) => <div style={{ padding: 24 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof FloatingNav>;

export const Labeled: Story = {};
export const IconOnly: Story = { name: 'Icon only', args: { style: 'iconOnly' } };
