import React from 'react';
import './SkipCard.css';

export default function SkipCard({ skip, isSelected, onSelect }) {
  const { size, hire_period_days, price_before_vat, allowed_on_road } = skip;

  return (
    <div
      className={`skip-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    >
      <div className="skip-image-placeholder">
        {!allowed_on_road && (
          <div className="road-warning">🚫 Not Allowed on Road</div>
        )}
      </div>

      <h2>{size} Yard Skip</h2>
      <p>{hire_period_days} day hire</p>
      <p className="price">£{price_before_vat}</p>

      <button
        className="fake-button"
        onClick={(e) => e.stopPropagation()}
      >
        {isSelected ? 'Selected' : 'Select This Skip'}
      </button>
    </div>
  );
}
