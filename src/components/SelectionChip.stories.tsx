import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectionChip } from './Chips';

const meta: Meta<typeof SelectionChip> = {
  title: 'Buttons & forms/Selection chip',
  component: SelectionChip,
  parameters: { docs: { description: { component: 'Pick-one or pick-many choices in onboarding and Profile (noise, area, amenities, year). Selected adds a check. Click to toggle.' } } },
};
export default meta;
type Story = StoryObj<typeof SelectionChip>;

export const Large: Story = {};
export const LargeSelected: Story = { args: { selected: true } };
export const Medium: Story = { args: { size: 'medium' } };
export const MediumSelected: Story = { args: { size: 'medium', selected: true } };
