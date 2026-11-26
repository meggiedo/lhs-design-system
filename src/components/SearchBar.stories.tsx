import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from './Inputs';

const meta: Meta<typeof SearchBar> = {
  title: 'Search & filter/Search bar',
  component: SearchBar,
  parameters: { docs: { description: { component: 'Home search. States: Default, Focused, Filled (with a clear button). Try typing in it.' } } },
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
export const Focused: Story = { args: { focused: true } };
export const Filled: Story = { args: { value: 'Cactus Cafe' } };
