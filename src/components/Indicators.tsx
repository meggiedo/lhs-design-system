import { CaretLeft } from '@phosphor-icons/react';

export const CarouselDots = ({ active = 1, count = 3 }: { active?: number; count?: number }) => (
  <span className="lhs-carousel-dots" aria-label={`Photo ${active} of ${count}`}>
    {Array.from({ length: count }, (_, i) => <i key={i} className={i + 1 === active ? 'is-active' : ''} />)}
  </span>
);

export const PageDots = ({ active = 1, count = 3 }: { active?: number; count?: number }) => (
  <span className="lhs-page-dots" aria-label={`Page ${active} of ${count}`}>
    {Array.from({ length: count }, (_, i) => <i key={i} className={i + 1 === active ? 'is-active' : ''} />)}
  </span>
);

export const ProgressSteps = ({ step = 1, total = 5 }: { step?: number; total?: number }) => (
  <span className="lhs-progress-steps" aria-label={`Step ${step} of ${total}`}>
    {Array.from({ length: total }, (_, i) => <i key={i} className={i < step ? 'is-done' : ''} />)}
  </span>
);

export const OnboardingTopBar = ({ step = 1, total = 5 }: { step?: number; total?: number }) => (
  <div className="lhs-onboarding-top-bar">
    <button className="lhs-reset" aria-label="Back" style={{ display: 'flex' }}><CaretLeft size={24} /></button>
    <ProgressSteps step={step} total={total} />
  </div>
);
