import { ImageSquare, PersonSimpleWalk, Clock, CaretRight, Sparkle } from '@phosphor-icons/react';
import { AmenityTag, RestrictedTag } from './Chips';
import { BookmarkButton, OpenStatus, Rating, type OpenState } from './Status';
import { CarouselDots } from './Indicators';

interface SpotBasics {
  /** Building name, shown in orange (e.g. "Union") */
  building?: string;
  /** Spot name (e.g. "Cactus Cafe") */
  name?: string;
  /** Walking time or distance */
  distance?: string;
  rating?: string;
  /** Optional photo URL. Without one, the placeholder icon shows. */
  photo?: string;
}

const Photo = ({ src, iconSize = 24 }: { src?: string; iconSize?: number }) => (
  <div className="lhs-photo">{src ? <img src={src} alt="" /> : <ImageSquare size={iconSize} />}</div>
);
const Title = ({ building, name }: { building: string; name: string }) => (
  <div className="lhs-title"><span className="b">{building}</span><span>{name}</span></div>
);
const Distance = ({ text }: { text: string }) => (
  <span className="lhs-distance"><PersonSimpleWalk size={16} />{text}</span>
);

export interface SpotCardProps extends SpotBasics {
  /** Five card layouts used on Home */
  layout?: 'hero' | 'tile' | 'overlay' | 'liveRow' | 'mini';
  /** Overlay only: the label in the top-left pill */
  eyebrow?: string;
  /** Hero only: amenity tags under the title */
  tags?: string[];
  saved?: boolean;
}

export const SpotCard = ({
  layout = 'hero', building = 'Union', name = 'Cactus Cafe', distance = '0.1 mi', rating = '4.2',
  photo, eyebrow = 'Spot of the day', tags = ['Lounge', 'Low Noise', 'Near Food & Cafe'], saved = false,
}: SpotCardProps) => {
  if (layout === 'hero') return (
    <article className="lhs-spot-card--hero">
      <div style={{ position: 'relative' }}>
        <div className="lhs-photo" style={{ height: 168 }}>{photo ? <img src={photo} alt="" /> : <ImageSquare size={24} />}</div>
        <Rating value={rating} style="pill" />
        <BookmarkButton saved={saved} />
      </div>
      <div className="body">
        <Title building={building} name={name} />
        <div className="lhs-meta"><Distance text={distance} /><OpenStatus /></div>
        <div className="tags">{tags.map((t) => <AmenityTag key={t} label={t} showIcon={false} />)}</div>
      </div>
    </article>
  );
  if (layout === 'tile') return (
    <article className="lhs-spot-card--tile">
      <div style={{ position: 'relative' }}>
        <div className="lhs-photo" style={{ height: 120, borderRadius: 'var(--radius-3)' }}>{photo ? <img src={photo} alt="" /> : <ImageSquare size={24} />}</div>
        <BookmarkButton saved={saved} />
      </div>
      <div className="text">
        <span className="lhs-body-small-heavy" style={{ color: 'var(--color-text-brand)' }}>{building}</span>
        <span className="lhs-body-medium-heavy">{name}</span>
        <Rating value={rating} />
        <Distance text={distance} />
      </div>
    </article>
  );
  if (layout === 'overlay') return (
    <FeaturedSpotCard building={building} name={name} distance={distance} photo={photo} eyebrow={eyebrow} saved={saved} showMeta showDots={false} />
  );
  if (layout === 'liveRow') return (
    <article className="lhs-row-card">
      <div className="lhs-photo" style={{ width: 64, height: 64, borderRadius: 'var(--radius-2)' }}>{photo ? <img src={photo} alt="" /> : <ImageSquare size={24} />}</div>
      <div className="content">
        <Title building={building} name={name} />
        <div className="lhs-meta"><Rating value={rating} /><Distance text={distance} /></div>
        <div className="hours hours--plain"><Clock size={14} />Open until 11 PM</div>
      </div>
      <CaretRight size={20} />
    </article>
  );
  return (
    <article className="lhs-spot-card--mini">
      <div className="lhs-photo" style={{ width: 40, height: 40, borderRadius: 'var(--radius-4)' }}>{photo ? <img src={photo} alt="" /> : <ImageSquare size={16} />}</div>
      <div className="text"><Title building={building} name={name} /><Rating value={rating} /></div>
    </article>
  );
};

export interface FeaturedSpotCardProps extends SpotBasics {
  eyebrow?: string;
  saved?: boolean;
  /** Photo carousel position */
  activeDot?: number;
  showDots?: boolean;
  /** Shows distance + hours under the title (used by the Overlay spot card) */
  showMeta?: boolean;
  hours?: string;
}

export const FeaturedSpotCard = ({
  building = 'Rowling Hall', name = '2nd Floor', distance = '0.1 mi', photo, eyebrow = 'LHD Recommends',
  saved = false, activeDot = 1, showDots = true, showMeta = false, hours = 'Open until 11 PM',
}: FeaturedSpotCardProps) => (
  <article className="lhs-overlay-card">
    <Photo src={photo} />
    <div className="scrim" />
    <span className="eyebrow"><Sparkle size={14} />{eyebrow}</span>
    <BookmarkButton saved={saved} />
    <div className="text" style={showDots ? { bottom: 36 } : undefined}>
      <div className="lhs-title"><span>{building}</span><span>{name}</span></div>
      {showMeta && (
        <div className="lhs-meta"><Distance text={distance} /><span className="lhs-body-medium-strong">{hours}</span></div>
      )}
    </div>
    {showDots && <CarouselDots active={activeDot} />}
  </article>
);

const hoursWord: Record<OpenState, string> = { open: 'Open', closing: 'Closing soon', closed: 'Closed' };

export interface SpotListRowProps extends SpotBasics {
  /** Colors the hours line */
  status?: OpenState;
  hoursDetail?: string;
  /** Adds the Restricted tag next to the hours */
  showRestricted?: boolean;
}

export const SpotListRow = ({
  building = 'Union', name = 'Cactus Cafe', distance = '6 min walk', rating = '4.2', photo,
  status = 'open', hoursDetail, showRestricted = false,
}: SpotListRowProps) => {
  const detail = hoursDetail ?? { open: 'until 2 AM', closing: 'at 10 PM', closed: 'opens 7 AM' }[status];
  return (
    <article className="lhs-row-card">
      <div className="lhs-photo" style={{ width: 64, height: 64, borderRadius: 'var(--radius-2)' }}>{photo ? <img src={photo} alt="" /> : <ImageSquare size={24} />}</div>
      <div className="content">
        <Title building={building} name={name} />
        <div className="lhs-meta"><Rating value={rating} /><Distance text={distance} /></div>
        <div className="hours-line">
          <span className={`hours hours--${status}`}><Clock size={14} /><b>{hoursWord[status]}</b>{detail}</span>
          {showRestricted && <RestrictedTag />}
        </div>
      </div>
      <CaretRight size={20} />
    </article>
  );
};
