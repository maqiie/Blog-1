
import React from 'react';
import './Home.css'; // Import your CSS file if needed

function Home() {
  const cardsData = [
    {
      image: 'https://unsplash.it/500/500/',
      title: 'Diligord',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/511/511/',
      title: 'Rocogged',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/502/502/',
      title: 'Strizzes',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/503/503/',
      title: 'Clossyo',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/504/504/',
      title: 'Rendann',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/505/505/',
      title: 'Reflupper',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/506/506/',
      title: 'Acirassi',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
      image: 'https://unsplash.it/508/508/',
      title: 'Sohanidd',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    },
    {
        image: 'https://unsplash.it/508/508/',
        title: 'Sohanidd',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      },
      {
        image: 'https://unsplash.it/508/508/',
        title: 'Sohanidd',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      },
      {
        image: 'https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80/',
        title: 'Others',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      },
    // Add more card data objects as needed
  ];

  return (
    <div className="wrapper">
      <h1>Parallax Flipping Cards</h1>
      <div className="cols">
        {cardsData.map((card, index) => (
          <div
            className="col"
            key={index}
            onTouchStart={(e) => e.currentTarget.classList.toggle('hover')}
          >
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${card.image})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
