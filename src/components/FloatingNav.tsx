import { useState } from 'react';
import { House, MapPin, BookmarkSimple, User } from '@phosphor-icons/react';

export type Tab = 'home' | 'map' | 'saved' | 'profile';
const tabs: { id: Tab; label: string; Icon: typeof House }[] = [
  { id: 'home', label: 'Home', Icon: House },
  { id: 'map', label: 'Map', Icon: MapPin },
  { id: 'saved', label: 'Saved', Icon: BookmarkSimple },
  { id: 'profile', label: 'Profile', Icon: User },
];

export interface FloatingNavProps {
  /** Which tab is selected first. Click a tab to switch. */
  active?: Tab;
  /** Labeled shows text under each icon. Icon only is the compact version. */
  style?: 'labeled' | 'iconOnly';
}

export const FloatingNav = ({ active = 'home', style = 'labeled' }: FloatingNavProps) => {
  const [current, setCurrent] = useState<Tab>(active);
  const [prev, setPrev] = useState(active);
  if (active !== prev) { setPrev(active); setCurrent(active); }
  return (
    <nav className="lhs-floating-nav">
      {tabs.map(({ id, label, Icon }) => {
        const on = id === current;
        return (
          <button key={id} className={`lhs-reset lhs-nav-item ${style === 'iconOnly' ? 'lhs-nav-item--icon' : ''} ${on ? 'is-active' : ''}`} aria-label={label} aria-current={on ? 'page' : undefined} onClick={() => setCurrent(id)}>
            <Icon size={24} weight={on ? 'fill' : 'regular'} />
            {style === 'labeled' && <span>{label}</span>}
          </button>
        );
      })}
    </nav>
  );
};
