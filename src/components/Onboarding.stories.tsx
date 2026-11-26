import type { Meta, StoryObj } from '@storybook/react-vite';
import { OnboardingTopBar, PageDots, ProgressSteps } from './Indicators';
import { PreferenceSummaryCard, ProfilePhotoPicker } from './Profile';

const meta: Meta = { title: 'Onboarding & profile/All', parameters: { docs: { description: { component: 'Pieces of the onboarding flow and Profile.' } } } };
export default meta;

export const TopBar: StoryObj<typeof OnboardingTopBar> = { name: 'Onboarding top bar', render: (a) => <OnboardingTopBar {...a} />, args: { step: 1 }, argTypes: { step: { control: { type: 'range', min: 1, max: 5 } } } };
export const Steps: StoryObj<typeof ProgressSteps> = { name: 'Progress steps', render: (a) => <ProgressSteps {...a} />, args: { step: 2 }, argTypes: { step: { control: { type: 'range', min: 1, max: 5 } } } };
export const Dots: StoryObj<typeof PageDots> = { name: 'Page dots', render: (a) => <PageDots {...a} />, args: { active: 1 }, argTypes: { active: { control: { type: 'range', min: 1, max: 3 } } } };
export const PhotoEmpty: StoryObj<typeof ProfilePhotoPicker> = { name: 'Profile photo picker · Empty', render: (a) => <ProfilePhotoPicker {...a} />, args: { state: 'empty' } };
export const PhotoUploaded: StoryObj<typeof ProfilePhotoPicker> = { name: 'Profile photo picker · Uploaded', render: (a) => <ProfilePhotoPicker {...a} />, args: { state: 'uploaded' } };
export const Preferences: StoryObj<typeof PreferenceSummaryCard> = { name: 'Preference summary card', render: (a) => <PreferenceSummaryCard {...a} /> };
