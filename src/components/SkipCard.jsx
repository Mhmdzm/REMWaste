import React, { useState } from 'react';
import './SkipCard.css';

export default function SkipCard({ skip, isSelected, onSelect }) {
  const [showModal, setShowModal] = useState(false);

  const { size, hire_period_days, price_before_vat, allowed_on_road } = skip;
  const imagePath = `/images/skip-${size}.jpg`;

  return (
    <>
      <div
        className={`skip-card ${isSelected ? 'selected' : ''}`}
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      >
        <div className="skip-front">
          <div className="image-wrapper">
            <img src={imagePath} alt={`${size} Yard Skip`} />
            <div className="yard-badge">{size} Yards</div>
          </div>
          <h2>{size} Yard Skip</h2>
          <p className="price">£{price_before_vat}</p>
        </div>

        <div className="skip-hover-details">
          {!allowed_on_road && (
            <div className="road-warning">⚠️ Not Allowed On Road</div>
          )}
          <p>{hire_period_days} day hire period</p>

          <button
            className={`btn-select ${isSelected ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </button>

          {/* View Full Image Button */}
          <button
            className="btn-view-image"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            View Full Image
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="image-modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            <img src={imagePath} alt={`${size} Yard Skip Full`} />
          </div>
        </div>
      )}
    </>
  );
}
