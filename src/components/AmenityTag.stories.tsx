import type { Meta, StoryObj } from '@storybook/react-vite';
import { AmenityTag } from './Chips';

const meta: Meta<typeof AmenityTag> = {
  title: 'Spot cards & details/Amenity tag',
  component: AmenityTag,
  parameters: { docs: { description: { component: 'Spot tags. Small on cards, Medium on details. Selected for chosen preferences.' } } },
};
export default meta;
type Story = StoryObj<typeof AmenityTag>;

export const Small: Story = {};
export const Medium: Story = { args: { size: 'medium' } };
export const Selected: Story = { args: { selection: 'selected', size: 'medium' } };
export const Profile: Story = { args: { selection: 'profile' } };
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <AmenityTag /><AmenityTag size="medium" /><AmenityTag size="medium" selection="selected" /><AmenityTag selection="selected" /><AmenityTag selection="profile" />
    </div>
  ),
};
