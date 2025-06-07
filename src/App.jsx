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

  return (
    <div className="container">
      <h1>Choose Your Skip Size</h1>
      <div className="skip-grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedId === skip.id}
            onSelect={() => setSelectedId(skip.id)}
          />
        ))}
      </div>
    </div>
  );
}
