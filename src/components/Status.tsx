import { useState } from 'react';
import { Clock, Star as StarIcon, StarHalf, BookmarkSimple } from '@phosphor-icons/react';

export type OpenState = 'open' | 'closing' | 'closed';
const statusWord: Record<OpenState, string> = { open: 'Open', closing: 'Closing', closed: 'Closed' };

export interface OpenStatusProps {
  status?: OpenState;
  /** Small on cards, Large on details */
  size?: 'small' | 'large';
  showDetail?: boolean;
  /** The time text after the status, e.g. "until 6:00 PM" */
  detail?: string;
}

export const OpenStatus = ({ status = 'open', size = 'small', showDetail = true, detail }: OpenStatusProps) => {
  const defaultDetail = { open: 'until 6:00 PM', closing: 'at 5:00 PM', closed: 'opens 8:00 AM' }[status];
  return (
    <span className={`lhs-open-status lhs-open-status--${size} lhs-open-status--${status}`}>
      <Clock size={size === 'small' ? 16 : 20} />
      <b>{statusWord[status]}</b>
      {showDetail && <span>{detail ?? defaultDetail}</span>}
    </span>
  );
};

export interface StarProps {
  state?: 'full' | 'half' | 'empty';
  size?: number;
}

export const Star = ({ state = 'full', size = 24 }: StarProps) => (
  <span className={`lhs-star ${state === 'empty' ? 'lhs-star--empty' : ''}`}>
    {state === 'full' && <StarIcon size={size} weight="fill" />}
    {state === 'half' && <StarHalf size={size} weight="fill" />}
    {state === 'empty' && <StarIcon size={size} />}
  </span>
);

export interface StarRatingProps {
  /** 0 to 5, rounded to the nearest half star */
  value?: number;
  size?: 'small' | 'large';
}

export const StarRating = ({ value = 4.5, size = 'small' }: StarRatingProps) => {
  const rounded = Math.round(value * 2) / 2;
  return (
    <span className={`lhs-star-rating lhs-star-rating--${size}`} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size === 'small' ? 16 : 32} state={rounded >= i ? 'full' : rounded >= i - 0.5 ? 'half' : 'empty'} />
      ))}
    </span>
  );
};

export interface RatingProps {
  value?: string;
  count?: string;
  showCount?: boolean;
  /** Plain in text rows, Pill on top of photos */
  style?: 'plain' | 'pill';
}

export const Rating = ({ value = '4.2', count = '(128)', showCount = false, style = 'plain' }: RatingProps) => (
  <span className={`lhs-rating ${style === 'pill' ? 'lhs-rating--pill' : ''}`}>
    <Star size={16} />
    {value}
    {showCount && <span className="lhs-rating__count">{count}</span>}
  </span>
);

export interface BookmarkButtonProps {
  /** Small on card photos, Large in the details header */
  size?: 'small' | 'large';
  /** Starting state. Click to save or unsave. */
  saved?: boolean;
}

export const BookmarkButton = ({ size = 'small', saved = false }: BookmarkButtonProps) => {
  const [on, setOn] = useState(saved);
  const [prev, setPrev] = useState(saved);
  if (saved !== prev) { setPrev(saved); setOn(saved); }
  return (
    <button className={`lhs-reset lhs-bookmark lhs-bookmark--${size} ${on ? 'is-saved' : ''}`} aria-pressed={on} aria-label={on ? 'Saved' : 'Save'} onClick={() => setOn(!on)}>
      <BookmarkSimple size={20} weight={on ? 'fill' : 'regular'} />
    </button>
  );
};
