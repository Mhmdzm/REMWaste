import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './index.css';
import SkipCard from './components/SkipCard';

export default function App() {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => setSkips(data))
      .catch((err) => console.error('Failed to load skip data', err));
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'back.out(1.7)',
      }
    ).fromTo(
      subtitleRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6'
    );
  }, []);

  const selectedSkip = skips.find((s) => s.id === selectedId);

  return (
    <div className="container">
      <div className="page-heading">
        <h1 ref={headingRef}>Choose Your Skip Size</h1>
        <p className="page-subtitle" ref={subtitleRef}>
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
            <div className="footer-disclaimer">
              Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>

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
