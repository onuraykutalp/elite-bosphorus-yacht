export type Tour = {
  title: string;
  subtitle: string;
  mailTitle?: string;
  duration: string;
  service: string;
  price: string;
  images: string[];
  description: string;

  menu: {
    title: string;
    items: string[];
  };

};


export const tours: Record<string, Tour> = {
  "sunset-cruise-tour": {
    title: "Sunset Cruise Tour",
    subtitle: "Sunset Cruise with Bosphorus View",
    mailTitle: "Sunset Cruise Tour",
    duration: "2 Hours",
    service: "Enjoy a romantic sunset cruise along the Bosphorus with breathtaking views of Istanbul’s skyline.",
    price: "€ 50",
    images: ["/services/sunset.jpg","/services/sunset-2.jpg","/services/sunset-3.jpg"],
    description: "Enjoy a romantic sunset cruise along the Bosphorus with breathtaking views of Istanbul’s skyline.",

    menu: {
      title: "Sunset Cruise Tour Program",
      items: [
        "Bosphorus View",
        "Istanbul’s Skyline",
        "Romantic Sunset",
        "Beautiful Views",
        "Relaxing Cruise",
        "Romantic Experience",
      ],
    },

  },

  "dinner-cruise-tour": {
    title: "Dinner Cruise Tour",
    subtitle: "Dinner with Bosphorus View",
    mailTitle: "Dinner Cruise Tour",
    duration: "3 Hours",
    service: "Experience a luxury dinner cruise with delicious meals and night views of the Bosphorus.",
    price: "Contact For Price",
    images: ["/services/dinner-2.jpg","/services/dinner-3.jpg"],
    description: "Experience a luxury dinner cruise with delicious meals and night views of the Bosphorus.",

    menu: {
      title: "Dinner Cruise Tour Program",
      items: [
        "Bosphorus View",
        "Istanbul’s Skyline",
        "Romantic Sunset",
        "Beautiful Views",
        "Relaxing Cruise",
        "Romantic Experience",
      ],
    },
  },

  "swimming-tour": {
    title: "Swimming Tour",
    subtitle: "Swim in Hidden Bays",
    mailTitle: "Swimming Tour",
    duration: "Half Day",
    service: "Escape the city and enjoy a refreshing swimming tour in peaceful bays along the Bosphorus.",
    price: "Contact For Price",
    images: ["/services/swimming.jpeg"],
    description: "Escape the city and enjoy a refreshing swimming tour in peaceful bays along the Bosphorus.",

    menu: {
      title: "Swimming Tour Program",
      items: [
        "Bosphorus View",
        "Istanbul’s Skyline",
        "Romantic Sunset",
        "Beautiful Views",
        "Relaxing Cruise",
        "Romantic Experience",
      ],
    },
  },

  "special-celebration-tour": {
    title: "Special Celebration",
    subtitle: "Birthday, Proposal & Events",
    mailTitle: "Special Celebration",
    duration: "Private Yacht Experience",
    service: "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",
    price: "Contact For Price",
    images: ["/services/celebration.jpg"],
    description: "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",

    menu: {
      title: "Special Celebration Tour Program",
      items: [
        "Bosphorus View",
        "Istanbul’s Skyline",
        "Romantic Sunset",
        "Beautiful Views",
        "Relaxing Cruise",
        "Romantic Experience",
      ],
    },

  },
};

