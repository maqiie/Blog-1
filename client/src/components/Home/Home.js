
import React from 'react';
import './Home.css'; // Import your CSS file if needed

function Home() {
  const cardsData = [
    {
      image: 'https://unsplash.it/500/500/',
      title: 'Health',
      description: 'Your well-being is non-negotiable. Join us on a path to vitality, where we decode the secrets of holistic health..',
    },
    {
      image: 'https://unsplash.it/511/511/',
      title: 'Travel',
      description: ' Join us in exploring the uncharted, traversing across continents and immersing in cultures',
    },
    {
      image: 'https://unsplash.it/502/502/',
      title: 'Music',
      description: 'Let the rhythm guide you as we unravel the melodies that shape cultures and emotions..',
    },
    {
      image: 'https://unsplash.it/503/503/',
      title: 'Sports',
      description: ' Get ready to dive into the adrenaline-pumping universe of sports, where victories and defeats transcend..',
    },
    {
      image: 'https://unsplash.it/504/504/',
      title: 'Art',
      description: 'Immerse yourself in a symphony of colors, shapes, and emotions as we journey through the galleries of human creativity..',
    },
    {
      image: 'https://unsplash.it/505/505/',
      title: 'Science',
      description: ' Ignite innovation by uncovering the universe`s mysteries...',
    },
    {
      image: 'https://unsplash.it/506/506/',
      title: 'Education',
      description: 'Empower growth through the transformative power of knowledge...',
    },
    {
      image: 'https://unsplash.it/508/508/',
      title: 'Technology',
      description: 'Ignite your tech-savvy side with our cutting-edge coverage, where we demystify the digital realm..',
    },
    {
        image: 'https://unsplash.it/508/508/',
        title: 'Food',
        description: ' Embark on a delectable journey as we unravel the world`fs flavors..',
      },
      {
        image: 'https://unsplash.it/508/508/',
        title: 'Fashion',
        description: 'Step into a realm where style knows no boundaries, and trends are the canvas of self-expression;.',
      },
      {
        image: 'https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80/',
        title: 'Others',
        description: ': Delve into an eclectic mix of topics, where the unexpected takes center stage.',
      },
    // Add more card data objects as needed
  ];

  return (
    <div className="wrapper">
      <h1>"Empowering Perspectives, Inspiring Lives."</h1>
      <input type="text" className="search-input" placeholder="Search" />

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
                  <span>Start Blog</span>
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
