import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenStatus } from './Status';

const meta: Meta<typeof OpenStatus> = {
  title: 'Spot cards & details/Open status',
  component: OpenStatus,
  parameters: { docs: { description: { component: 'Open, Closing, Closed. Small on cards, Large on details. Toggle Show detail for the time.' } } },
};
export default meta;
type Story = StoryObj<typeof OpenStatus>;

export const Open: Story = {};
export const Closing: Story = { args: { status: 'closing' } };
export const Closed: Story = { args: { status: 'closed' } };
export const Large: Story = { args: { size: 'large' } };
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['open', 'closing', 'closed'] as const).map((s) => (
        <div key={s} style={{ display: 'flex', gap: 24 }}><OpenStatus status={s} /><OpenStatus status={s} size="large" /></div>
      ))}
    </div>
  ),
};
