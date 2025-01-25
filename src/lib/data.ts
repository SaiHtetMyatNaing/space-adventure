// Type definition for destination image
type DestinationImage = {
  src: string;
  alt: string;
};

// Type definition for destination
type Destination = {
  name: string;
  description: string;
  image: DestinationImage;
  tabValue: string;
  averageDistance: string;
  averageTravelTime: string;
};

// Typed destinations data
export const destinations: Destination[] = [
  {
    name: "Mars",
    description:
      "Europa is one of Jupiter's largest moons, known for its smooth icy surface and potential subsurface ocean. Scientists believe this hidden ocean could potentially harbor conditions suitable for life, making it a prime target for exploration.",
    image: {
      src: "/assets/destination/image-mars.png",
      alt: "Mars",
    },
    tabValue: "mars",
    averageDistance: "100km",
    averageTravelTime: "10 days",
  },
  {
    name: "Europa",
    description:
      "Europa is one of Jupiter's largest moons, known for its smooth icy surface and potential subsurface ocean. Scientists believe this hidden ocean could potentially harbor conditions suitable for life, making it a prime target for exploration.",
    image: {
      src: "/assets/destination/image-europa.png",
      alt: "Europa",
    },
    tabValue: "europa",
    averageDistance: "100km",
    averageTravelTime: "10 days",
  },
  {
    name: "Moon",
    description:
      "Earth's Moon is our closest celestial neighbor, formed approximately 4.5 billion years ago. It has been a subject of human fascination, scientific exploration, and the first extraterrestrial body where humans have set foot.",
    image: {
      src: "/assets/destination/image-moon.png",
      alt: "Moon",
    },
    tabValue: "moon",
    averageDistance: "100km",
    averageTravelTime: "10 days",
  },
  {
    name: "Titan",
    description:
      "Titan is Saturn's largest moon and the only moon known to have a dense atmosphere. It features lakes of liquid methane and ethane, making it one of the most unique celestial bodies in our solar system.",
    image: {
      src: "/assets/destination/image-titan.png",
      alt: "Titan",
    },
    tabValue: "titan",
    averageDistance: "100km",
    averageTravelTime: "10 days",
  },
];
