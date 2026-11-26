import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './Inputs';

const meta: Meta<typeof TextField> = {
  title: 'Buttons & forms/Text field',
  component: TextField,
  parameters: { docs: { description: { component: 'Labeled input for sign-up and profile. Valid shows a check (e.g. username available).' } } },
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};
export const Focused: Story = { args: { focused: true } };
export const Filled: Story = { args: { value: '@meggiedo' } };
export const Valid: Story = { args: { value: '@meggiedo', valid: true } };
