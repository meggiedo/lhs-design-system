import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating, Star, StarRating } from './Status';

const meta: Meta<typeof Rating> = {
  title: 'Spot cards & details/Rating',
  component: Rating,
  parameters: { docs: { description: { component: 'Cards show a star + decimal rating (e.g. 4.2). Pill sits on photos. The 5-star scale is below.' } } },
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const Plain: Story = {};
export const Pill: Story = { args: { style: 'pill' }, parameters: { backgrounds: { default: 'dark' } }, decorators: [(S) => <div style={{ background: 'var(--slate-200)', padding: 16, borderRadius: 8 }}><S /></div>] };
export const WithCount: Story = { args: { showCount: true } };

export const Stars: StoryObj<typeof Star> = {
  name: 'Star (Full / Half / Empty)',
  render: () => <div style={{ display: 'flex', gap: 8 }}><Star state="full" /><Star state="half" /><Star state="empty" /></div>,
};
export const FiveStarSmall: StoryObj<typeof StarRating> = { name: 'Star rating · Small', render: (a) => <StarRating {...a} />, args: { value: 4.5, size: 'small' } };
export const FiveStarLarge: StoryObj<typeof StarRating> = { name: 'Star rating · Large', render: (a) => <StarRating {...a} />, args: { value: 4.5, size: 'large' } };
