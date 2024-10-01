import React from "react";

// Card Component
const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gradient-to-b from-green-400 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

// CardRow Component that uses the Card component
const Hero = () => {
  const cards = [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 1",
      description: "This is a colorful card.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 2",
      description: "This is another colorful card.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 3",
      description: "Colorful cards with Tailwind CSS.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 4",
      description: "Responsive and bright layout.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 5",
      description: "Responsive and bright layout.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 6",
      description: "Responsive and bright layout.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 7",
      description: "Responsive and bright layout.",
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 8",
      description: "Responsive and bright layout.",
    },
  ];

  return (
    <div className="w-90 container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
