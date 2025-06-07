import React, { useEffect, useState } from 'react';
import './index.css';
import SkipCard from './components/SkipCard';

export default function App() {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => console.error('Failed to load skip data', err));
  }, []);

  const selectedSkip = skips.find((s) => s.id === selectedId);

  return (
    <div className="container">
      <div className="page-heading">
        <h1>Choose Your Skip Size</h1>
        <p className="page-subtitle">
            Select the skip size that best suits your needs
        </p>
      </div>

      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedId === skip.id}
            onSelect={() =>
              setSelectedId((prevId) => (prevId === skip.id ? null : skip.id))
            }
          />
        ))}
      </div>

      {/* Sticky Footer */}
      <div className={`footer-bar ${selectedSkip ? 'visible' : ''}`}>
        {selectedSkip && (
          <>
            {/* Disclaimer */}
            <div className="footer-disclaimer">
              Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>

            {/* Centered skip summary + right-aligned buttons */}
            <div className="footer-content-row">
              <div className="footer-skip-summary">
                <strong>{selectedSkip.size} Yard Skip</strong>
                <span className="footer-price">£{selectedSkip.price_before_vat}</span>
                <span>{selectedSkip.hire_period_days} day hire</span>
              </div>

              <div className="footer-actions">
                <button className="btn-grey">Back</button>
                <button className="btn-blue">Continue →</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
