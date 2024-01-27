import React from 'react';

import Carousel from './Carousel';

const App = () => {
  const Slides = [
    {
      image: 'https://img.freepik.com/free-vector/watercolor-background-australian-national-day_23-2151041806.jpg?size=626&ext=jpg',
      alt: '...',
      label: 'First slide label',
      content: 'Some representative placeholder content for the first slide.',
    },
    // Add more slide objects as needed
  ];

  return (
    <div>

      <Carousel Slides={Slides} />
    
    </div>
  );
};
export default App;
