import { useState, type ReactNode } from 'react';
import { CaretDown, SlidersHorizontal, Question, Check, Lock } from '@phosphor-icons/react';

export interface FilterChipProps {
  label?: string;
  /** Dropdown shows a label + caret. Filter button is the round sliders icon. */
  type?: 'dropdown' | 'filterButton';
  /** Active when a filter is applied */
  active?: boolean;
  onClick?: () => void;
}

export const FilterChip = ({ label = 'Area Type', type = 'dropdown', active = false, onClick }: FilterChipProps) => (
  <button
    className={`lhs-reset lhs-filter-chip ${type === 'filterButton' ? 'lhs-filter-chip--icon' : ''} ${active ? 'is-active' : ''}`}
    onClick={onClick}
    aria-pressed={active}
    aria-label={type === 'filterButton' ? 'Filters' : undefined}
  >
    {type === 'dropdown' ? (<>{label}<CaretDown size={16} /></>) : <SlidersHorizontal size={20} />}
  </button>
);

export interface SelectionChipProps {
  label?: string;
  size?: 'large' | 'medium';
  showIcon?: boolean;
  icon?: ReactNode;
  /** Starting state. Click the chip to toggle it, like the Figma prototype. */
  selected?: boolean;
}

export const SelectionChip = ({ label = 'Indoor', size = 'large', showIcon = true, icon, selected = false }: SelectionChipProps) => {
  const [on, setOn] = useState(selected);
  const [prev, setPrev] = useState(selected);
  if (selected !== prev) { setPrev(selected); setOn(selected); }
  return (
    <button className={`lhs-reset lhs-selection-chip lhs-selection-chip--${size} ${on ? 'is-selected' : ''}`} aria-pressed={on} onClick={() => setOn(!on)}>
      {size === 'large' && showIcon && (icon ?? <Question size={20} />)}
      {label}
      {on && <Check size={16} />}
    </button>
  );
};

export interface AmenityTagProps {
  label?: string;
  /** Small on cards, Medium on details */
  size?: 'small' | 'medium';
  /** Selected for chosen preferences. Profile is the outlined orange version. */
  selection?: 'notSelected' | 'selected' | 'profile';
  showIcon?: boolean;
  icon?: ReactNode;
}

export const AmenityTag = ({ label = 'Low Noise', size = 'small', selection = 'notSelected', showIcon = true, icon }: AmenityTagProps) => (
  <span className={`lhs-amenity-tag lhs-amenity-tag--${size} ${selection !== 'notSelected' ? `lhs-amenity-tag--${selection}` : ''}`}>
    {showIcon && (icon ?? <Question size={size === 'small' ? 14 : 16} />)}
    {label}
  </span>
);

export interface RestrictedTagProps {
  label?: string;
  /** Brand (orange) by default on rows. Neutral for quieter spots. */
  tone?: 'brand' | 'neutral';
}

export const RestrictedTag = ({ label = 'Restricted', tone = 'brand' }: RestrictedTagProps) => (
  <span className={`lhs-restricted-tag lhs-restricted-tag--${tone}`}>
    <Lock size={12} />
    {label}
  </span>
);

export interface ListTabProps {
  label?: string;
  active?: boolean;
  showIcon?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}

export const ListTab = ({ label = 'For you', active = false, showIcon = false, icon, onClick }: ListTabProps) => (
  <button className={`lhs-reset lhs-list-tab ${active ? 'is-active' : ''}`} aria-pressed={active} onClick={onClick}>
    {showIcon && icon}
    {label}
  </button>
);
