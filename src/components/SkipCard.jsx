import React from 'react';
import './SkipCard.css';

export default function SkipCard({ skip, isSelected, onSelect }) {
  const { size, hire_period_days, price_before_vat, allowed_on_road } = skip;

  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''}`}>
      <div className="skip-image-placeholder">
        {allowed_on_road ? null : (
          <div className="road-warning">🚫 Not Allowed on Road</div>
        )}
      </div>

      <h2>{size} Yard Skip</h2>
      <p>{hire_period_days} day hire</p>
      <p className="price">£{price_before_vat}</p>

      <button onClick={onSelect}>
        {isSelected ? 'Selected' : 'Select This Skip'}
      </button>
    </div>
  );
}
