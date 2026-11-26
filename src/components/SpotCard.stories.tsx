import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpotCard } from './Cards';

const meta: Meta<typeof SpotCard> = {
  title: 'Spot cards & details/Spot card',
  component: SpotCard,
  parameters: { docs: { description: { component: 'Five card layouts for Home. Same content props (Building, Name, Distance); Overlay adds an Eyebrow. Click the bookmark to save.' } } },
};
export default meta;
type Story = StoryObj<typeof SpotCard>;

export const Hero: Story = { args: { layout: 'hero' } };
export const Tile: Story = { args: { layout: 'tile' } };
export const Overlay: Story = { args: { layout: 'overlay' } };
export const LiveRow: Story = { name: 'Live row', args: { layout: 'liveRow' } };
export const Mini: Story = { args: { layout: 'mini' } };
