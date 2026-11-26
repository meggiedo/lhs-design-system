import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeaturedSpotCard, SpotListRow } from './Cards';
import { ListTab, RestrictedTag } from './Chips';
import { CarouselDots } from './Indicators';
import { useState } from 'react';

const meta: Meta = {
  title: 'Newly added/From Home iteration I',
  parameters: { docs: { description: { component: 'Added Nov 25, 2026 from Home iteration "I · Tab on the list". Review, then move into the main groups.' } } },
};
export default meta;

export const Featured: StoryObj<typeof FeaturedSpotCard> = {
  name: 'Featured spot card',
  render: (a) => <FeaturedSpotCard {...a} />,
  args: { building: 'Rowling Hall', name: '2nd Floor', eyebrow: 'LHD Recommends', activeDot: 1 },
};

export const ListRow: StoryObj<typeof SpotListRow> = {
  name: 'Spot list row',
  render: (a) => <SpotListRow {...a} />,
  args: { status: 'open', showRestricted: false },
};

export const ListRowAll: StoryObj = {
  name: 'Spot list row · All statuses',
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <SpotListRow status="open" /><SpotListRow status="closing" /><SpotListRow status="closed" showRestricted />
    </div>
  ),
};

const Tabs = () => {
  const [tab, setTab] = useState('for-you');
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ListTab label="For you" active={tab === 'for-you'} onClick={() => setTab('for-you')} />
      <ListTab label="Saved to try" active={tab === 'saved'} onClick={() => setTab('saved')} />
    </div>
  );
};
export const Tab: StoryObj<typeof ListTab> = { name: 'List tab', render: (a) => <ListTab {...a} />, args: { label: 'For you', active: true } };
export const TabPair: StoryObj = { name: 'List tab · Pair (click to switch)', render: () => <Tabs /> };
export const Restricted: StoryObj<typeof RestrictedTag> = { name: 'Restricted tag', render: (a) => <RestrictedTag {...a} />, args: { tone: 'brand' } };
export const Dots: StoryObj<typeof CarouselDots> = { name: 'Carousel dots', render: (a) => <CarouselDots {...a} />, args: { active: 1 }, argTypes: { active: { control: { type: 'range', min: 1, max: 3 } } } };
