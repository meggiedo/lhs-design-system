import { primitives, semanticColors, resolve, textStyles, spacing, radius, elevation } from '../tokens/tokens';
import { House, MapPin, BookmarkSimple, User, MagnifyingGlass, SlidersHorizontal, CaretDown, CaretLeft, CaretRight, X, Check, Clock, PersonSimpleWalk, Star, StarHalf, ImageSquare, Sparkle, Lock, Plus, PencilSimpleLine, Info, Question, ArrowRight, CheckCircle, Bell, BookOpen, ChatsCircle, Plug, Coffee, Armchair, UsersThree, SpeakerLow, Tree, Trophy, Lightning, TrendUp, Sun, Moon, CloudRain } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const wrap: React.CSSProperties = { fontFamily: 'var(--font-family)', color: 'var(--color-text-primary)' };
const small: React.CSSProperties = { font: '400 12px/16px var(--font-family)', color: 'var(--color-text-secondary)' };

export const PrimitivePalette = () => (
  <div style={{ ...wrap, display: 'grid', gap: 16 }}>
    {Object.entries(primitives).map(([family, steps]) => (
      <div key={family}>
        <div className="lhs-body-medium-heavy" style={{ marginBottom: 6, textTransform: 'capitalize' }}>{family}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {Object.entries(steps).map(([step, hex]) => (
            <div key={step} style={{ width: 72 }}>
              <div style={{ height: 40, borderRadius: 8, background: hex, border: '1px solid var(--slate-200)' }} />
              <div className="lhs-body-small-strong">{family}/{step}</div>
              <div style={small}>{hex}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const SemanticPalette = () => (
  <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
    {Object.entries(semanticColors).map(([group, rows]) => (
      <div key={group}>
        <div className="lhs-body-medium-heavy" style={{ marginBottom: 6 }}>{group}</div>
        {rows.map(([name, prim]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '3px 0' }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: resolve(prim), border: '1px solid var(--slate-200)', flex: 'none' }} />
            <div>
              <div className="lhs-body-small-strong">{name}</div>
              <div style={small}>{prim} · {resolve(prim)}</div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const TypeScale = () => (
  <div style={{ ...wrap, display: 'grid', gap: 10 }}>
    {textStyles.map((t) => (
      <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'baseline', gap: 16, borderBottom: '1px solid var(--slate-100)', paddingBottom: 8 }}>
        <div>
          <div className="lhs-body-small-strong">{t.name}</div>
          <div style={small}>{t.weight} · {t.size}/{t.line}</div>
        </div>
        <div className={t.className}>Find your spot at the PCL</div>
      </div>
    ))}
  </div>
);

export const SpacingScale = () => (
  <div style={{ ...wrap, display: 'grid', gap: 6 }}>
    {spacing.map(([name, px]) => (
      <div key={name} style={{ display: 'grid', gridTemplateColumns: '110px 50px 1fr', alignItems: 'center', gap: 12 }}>
        <span className="lhs-body-small-strong">{name}</span>
        <span style={small}>{px}px</span>
        <div style={{ width: px * 4, height: 12, background: 'var(--orange-300)', borderRadius: 2 }} />
      </div>
    ))}
  </div>
);

export const RadiusScale = () => (
  <div style={{ ...wrap, display: 'flex', gap: 24 }}>
    {radius.map(([name, px]) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: px, background: 'var(--orange-100)', border: '1.5px solid var(--orange-500)' }} />
        <div className="lhs-body-small-strong" style={{ marginTop: 6 }}>{name}</div>
        <div style={small}>{px}px</div>
      </div>
    ))}
  </div>
);

export const ElevationScale = () => (
  <div style={{ ...wrap, display: 'flex', gap: 32, padding: 16 }}>
    {elevation.map(([name, shadow, use]) => (
      <div key={name} style={{ width: 160, height: 100, borderRadius: 16, background: 'white', boxShadow: shadow, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span className="lhs-body-small-strong">{name}</span>
        <span style={small}>{use}</span>
      </div>
    ))}
  </div>
);

const icons: [string, Icon][] = [
  ['House', House], ['MapPin', MapPin], ['BookmarkSimple', BookmarkSimple], ['User', User], ['MagnifyingGlass', MagnifyingGlass], ['SlidersHorizontal', SlidersHorizontal], ['CaretDown', CaretDown], ['CaretLeft', CaretLeft], ['CaretRight', CaretRight], ['X', X], ['Check', Check], ['Clock', Clock], ['PersonSimpleWalk', PersonSimpleWalk], ['Star', Star], ['StarHalf', StarHalf], ['ImageSquare', ImageSquare], ['Sparkle', Sparkle], ['Lock', Lock], ['Plus', Plus], ['PencilSimpleLine', PencilSimpleLine], ['Info', Info], ['Question', Question], ['ArrowRight', ArrowRight], ['CheckCircle', CheckCircle], ['Bell', Bell], ['BookOpen', BookOpen], ['ChatsCircle', ChatsCircle], ['Plug', Plug], ['Coffee', Coffee], ['Armchair', Armchair], ['UsersThree', UsersThree], ['SpeakerLow', SpeakerLow], ['Tree', Tree], ['Trophy', Trophy], ['Lightning', Lightning], ['TrendUp', TrendUp], ['Sun', Sun], ['Moon', Moon], ['CloudRain', CloudRain],
];

export const IconGrid = () => (
  <div style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 8 }}>
    {icons.map(([n, I]) => {
      return (
        <div key={n} style={{ border: '1px solid var(--slate-200)', borderRadius: 8, padding: 10, textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', color: 'var(--color-icon-primary)' }}>
            <I size={24} /><span style={{ color: 'var(--color-icon-brand)' }}><I size={24} weight="fill" /></span>
          </div>
          <div style={{ ...small, marginTop: 6 }}>{n}</div>
        </div>
      );
    })}
  </div>
);
