import { useState } from 'react';
import { MagnifyingGlass, X, Check } from '@phosphor-icons/react';

export interface SearchBarProps {
  placeholder?: string;
  /** Text typed in the bar. When there's text, a clear (X) button appears. */
  value?: string;
  /** Shows the Focused look (orange ring). Clicking into the bar does this too. */
  focused?: boolean;
}

export const SearchBar = ({ placeholder = 'Search study spot by name', value = '', focused = false }: SearchBarProps) => {
  const [text, setText] = useState(value);
  const [prev, setPrev] = useState(value);
  if (value !== prev) { setPrev(value); setText(value); }
  return (
    <div className={`lhs-search ${focused ? 'is-focused' : ''}`}>
      <MagnifyingGlass size={20} />
      <input placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)} aria-label="Search" />
      {text && (
        <button className="lhs-reset" aria-label="Clear search" onClick={() => setText('')} style={{ display: 'flex' }}>
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export interface TextFieldProps {
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  value?: string;
  focused?: boolean;
  /** Shows a green check, e.g. when a username is available */
  valid?: boolean;
}

export const TextField = ({ label = 'Username', showLabel = true, placeholder = '@username-example', value = '', focused = false, valid = false }: TextFieldProps) => {
  const [text, setText] = useState(value);
  const [prev, setPrev] = useState(value);
  if (value !== prev) { setPrev(value); setText(value); }
  return (
    <div className="lhs-text-field">
      {showLabel && <label>{label}</label>}
      <div className={`lhs-text-field__input ${focused ? 'is-focused' : ''}`}>
        <input placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)} aria-label={label} />
        {valid && <Check size={20} />}
      </div>
    </div>
  );
};
