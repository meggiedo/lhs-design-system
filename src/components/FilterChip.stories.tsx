import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterChip } from './Chips';

const meta: Meta<typeof FilterChip> = {
  title: 'Search & filter/Filter chip',
  component: FilterChip,
  parameters: { docs: { description: { component: 'Home filter row. Dropdown or Filter button. Active when a filter is applied.' } } },
};
export default meta;
type Story = StoryObj<typeof FilterChip>;

export const Dropdown: Story = {};
export const DropdownActive: Story = { args: { active: true } };
export const FilterButton: Story = { args: { type: 'filterButton' } };
export const FilterButtonActive: Story = { args: { type: 'filterButton', active: true } };
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <FilterChip /><FilterChip active /><FilterChip type="filterButton" /><FilterChip type="filterButton" active />
    </div>
  ),
};
