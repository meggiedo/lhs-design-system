import { ImageSquare, Plus, PencilSimpleLine, Info } from '@phosphor-icons/react';
import { AmenityTag } from './Chips';

export interface ProfilePhotoPickerProps {
  /** Empty shows a dashed placeholder. Uploaded shows the photo with an edit badge. */
  state?: 'empty' | 'uploaded';
  photo?: string;
}

export const ProfilePhotoPicker = ({ state = 'empty', photo }: ProfilePhotoPickerProps) => (
  <div className="lhs-photo-picker">
    <div className="avatar">
      <div className={`circle ${state === 'empty' ? 'is-empty' : ''}`}>
        {state === 'empty' ? <ImageSquare size={24} /> : photo ? <img src={photo} alt="" /> : null}
      </div>
      <span className="badge">{state === 'empty' ? <Plus size={16} /> : <PencilSimpleLine size={16} />}</span>
    </div>
    <div className="text">
      <span className="title">Profile photo</span>
      <span className="helper">Optional · helps classmates find you</span>
      <button className="lhs-reset action">{state === 'empty' ? 'Upload photo' : 'Change photo'}</button>
    </div>
  </div>
);

export interface PreferenceSummaryCardProps {
  title?: string;
  preferences?: string[];
}

export const PreferenceSummaryCard = ({
  title = 'Your study preferences',
  preferences = ['Quiet and focused', 'Library', 'Natural light', 'Outlets', 'Near cafe'],
}: PreferenceSummaryCardProps) => (
  <div className="lhs-pref-card">
    <span className="title">{title}</span>
    <div className="tags">{preferences.map((p) => <AmenityTag key={p} label={p} selection="selected" showIcon={false} />)}</div>
    <div className="footer"><Info size={16} />Edit anytime in Profile</div>
  </div>
);
