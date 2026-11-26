import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, TextLink } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons & forms/Button',
  component: Button,
  args: { label: 'Button' },
  parameters: { docs: { description: { component: 'Primary, Secondary and Tertiary, each Default, Pressed and Disabled. Shows Pressed while you hold it down.' } } },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary' } };
export const Disabled: Story = { args: { disabled: true } };
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 12 }}>
      {(['primary', 'secondary', 'tertiary'] as const).flatMap((v) => [
        <Button key={v + 'd'} label="Button" variant={v} />,
        <Button key={v + 'p'} label="Button" variant={v} pressed />,
        <Button key={v + 'x'} label="Button" variant={v} disabled />,
      ])}
    </div>
  ),
};

export const TextLinks: StoryObj<typeof TextLink> = {
  name: 'Text link',
  render: () => <div style={{ display: 'flex', gap: 16 }}><TextLink label="Log in" /><TextLink label="Skip" tone="neutral" /></div>,
};
