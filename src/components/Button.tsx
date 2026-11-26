import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text on the button (Figma: Label) */
  label: string;
  /** Primary for the main action, Secondary for a second choice, Tertiary for low emphasis */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Shows the Pressed look. In the browser, it also shows while you hold the button down. */
  pressed?: boolean;
  disabled?: boolean;
}

export const Button = ({ label, variant = 'primary', pressed = false, className = '', ...rest }: ButtonProps) => (
  <button className={`lhs-button lhs-button--${variant} ${pressed ? 'is-pressed' : ''} ${className}`} {...rest}>
    {label}
  </button>
);

export interface TextLinkProps {
  label: string;
  /** Brand for actions like Log in / Upload photo. Neutral for Skip in the top bar. */
  tone?: 'brand' | 'neutral';
  onClick?: () => void;
}

export const TextLink = ({ label, tone = 'brand', onClick }: TextLinkProps) => (
  <button className={`lhs-reset lhs-text-link lhs-text-link--${tone}`} onClick={onClick}>{label}</button>
);
