import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <div className="grid-container" style={{ marginBottom: 30 }}>
    <ContentLoader
      height={230}
      width={300}
      speed={3}
      primaryColor="#f3f3f3"
      secondaryColor="rgba(217, 196, 224, 0.32)"
    />
  </div>
);

export default Loader;
