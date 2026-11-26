import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookmarkButton } from './Status';

const meta: Meta<typeof BookmarkButton> = {
  title: 'Spot cards & details/Bookmark button',
  component: BookmarkButton,
  parameters: { docs: { description: { component: 'Save toggle. Small on card photos, Large in the details header. Click it to save.' } } },
  decorators: [(S) => <div style={{ background: 'var(--slate-100)', padding: 16, borderRadius: 8 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof BookmarkButton>;

export const Small: Story = {};
export const SmallSaved: Story = { args: { saved: true } };
export const Large: Story = { args: { size: 'large' } };
export const LargeSaved: Story = { args: { size: 'large', saved: true } };
