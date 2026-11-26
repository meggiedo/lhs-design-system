// Token lists used by the Foundations pages in Storybook.
// Values mirror src/tokens/tokens.css (which mirrors Figma).

export const primitives: Record<string, Record<string, string>> = {
  base: { white: '#ffffff' },
  orange: { 50: '#fff4eb', 100: '#fce4d0', 200: '#f7c49c', 300: '#ee9e5f', 400: '#de7a2c', 500: '#bf5700', 600: '#a34a00', 700: '#8a3f00', 800: '#6e3200', 900: '#4f2400' },
  slate: { 50: '#f8fafc', 100: '#f1f3f6', 200: '#e2e6eb', 300: '#bac1cc', 400: '#94a3b8', 500: '#64748b', 600: '#4f5b66', 700: '#3e4a54', 800: '#333f48', 900: '#1a2024' },
  limestone: { 100: '#f5f4f0', 200: '#eae8e1', 300: '#d6d2c4' },
  green: { 100: '#e8f3e4', 500: '#579d42', 700: '#3b7a2a' },
  amber: { 100: '#fef0dc', 500: '#f8971f', 700: '#945400' },
  red: { 100: '#fce9ec', 500: '#d10000', 700: '#a80000' },
};

// [semantic name, primitive it points to]
export const semanticColors: Record<string, [string, string][]> = {
  Text: [['text/primary', 'slate/800'], ['text/secondary', 'slate/500'], ['text/disabled', 'slate/400'], ['text/brand', 'orange/500'], ['text/brand-strong', 'orange/700'], ['text/on-brand', 'base/white'], ['text/on-inverse', 'base/white']],
  Icon: [['icon/primary', 'slate/800'], ['icon/secondary', 'slate/500'], ['icon/brand', 'orange/500']],
  Background: [['bg/page', 'base/white'], ['bg/surface', 'base/white'], ['bg/subtle', 'slate/50'], ['bg/brand', 'orange/500'], ['bg/brand-subtle', 'orange/50'], ['bg/warm', 'limestone/100'], ['bg/inverse', 'slate/900']],
  Border: [['border/default', 'slate/300'], ['border/subtle', 'slate/200'], ['border/strong', 'slate/400'], ['border/brand', 'orange/500'], ['focus/ring', 'orange/500']],
  Action: [['action/primary', 'orange/500'], ['action/primary-pressed', 'orange/600'], ['action/disabled', 'slate/100']],
  'Filter & saved': [['filter/active-bg', 'orange/100'], ['filter/active-border', 'orange/500'], ['filter/active-text', 'orange/700'], ['saved/bg', 'limestone/200'], ['saved/icon', 'orange/500']],
  Status: [['status/open-text', 'green/700'], ['status/open-icon', 'green/500'], ['status/open-bg', 'green/100'], ['status/closing-text', 'amber/700'], ['status/closing-icon', 'amber/700'], ['status/closing-bg', 'amber/100'], ['status/closed-text', 'red/500'], ['status/closed-icon', 'red/500'], ['status/closed-bg', 'red/100']],
  'Rating & crowd': [['rating/star', 'amber/500'], ['rating/empty', 'slate/300'], ['crowd/quiet', 'green/500'], ['crowd/moderate', 'amber/500'], ['crowd/busy', 'red/500'], ['crowd/track', 'slate/200']],
};

export const resolve = (primitive: string) => {
  const [family, step] = primitive.split('/');
  return primitives[family][step];
};

export const textStyles = [
  { name: 'heading.large', className: 'lhs-heading-large', weight: 'Bold', size: 28, line: 36 },
  { name: 'heading.medium', className: 'lhs-heading-medium', weight: 'Bold', size: 23, line: 28 },
  { name: 'heading.small', className: 'lhs-heading-small', weight: 'Bold', size: 19, line: 24 },
  { name: 'body.large', className: 'lhs-body-large', weight: 'Regular', size: 16, line: 22 },
  { name: 'body.large.strong', className: 'lhs-body-large-strong', weight: 'SemiBold', size: 16, line: 22 },
  { name: 'body.large.heavy', className: 'lhs-body-large-heavy', weight: 'Bold', size: 16, line: 22 },
  { name: 'body.medium', className: 'lhs-body-medium', weight: 'Regular', size: 13, line: 18 },
  { name: 'body.medium.strong', className: 'lhs-body-medium-strong', weight: 'SemiBold', size: 13, line: 18 },
  { name: 'body.medium.heavy', className: 'lhs-body-medium-heavy', weight: 'Bold', size: 13, line: 18 },
  { name: 'body.small', className: 'lhs-body-small', weight: 'Regular', size: 12, line: 16 },
  { name: 'body.small.strong', className: 'lhs-body-small-strong', weight: 'SemiBold', size: 12, line: 16 },
  { name: 'body.small.heavy', className: 'lhs-body-small-heavy', weight: 'Bold', size: 12, line: 16 },
];

export const spacing = [
  ['spacing-1', 2], ['spacing-2', 4], ['spacing-3', 8], ['spacing-4', 12],
  ['spacing-5', 16], ['spacing-6', 20], ['spacing-7', 24], ['spacing-8', 32],
] as const;

export const radius = [['radius2', 8], ['radius3', 16], ['radius4', 32]] as const;

export const elevation = [
  ['elevation/card', 'var(--elevation-card)', 'Spot cards'],
  ['elevation/floating', 'var(--elevation-floating)', 'Floating nav'],
] as const;
