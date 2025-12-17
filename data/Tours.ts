export type Tour = {
    title: string;
    subtitle: string;
    mailTitle?: string;
    duration: string;
    drinks: string;
    service: string;
    price: string;
    images: string[]; 
    description: string;
  
    menu: {
      title: string;
      items: string[];
    };
  
    program: {
      title: string;
      items: string[];
    };
  };
  
  
  export const tours: Record<string, Tour> = {
    "sunset-cruise-tour": {
      title: "Sunset Cruise Tour",
      subtitle: "Unlimited Soft Drinks",
      mailTitle:"Sunset Cruise Tour",
      duration: "2 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Enjoy a romantic sunset cruise along the Bosphorus with breathtaking views of Istanbul’s skyline.",
      price: "€ 100",
      images: ["/services/sunset.jpg"],
      description: "Enjoy a romantic sunset cruise along the Bosphorus with breathtaking views of Istanbul’s skyline.",
  
      menu: {
        title: "Sunset Cruise Tour Menu & Drinks",
        items: [
          "Unlimited Soft Drinks",
          "Optional Alcoholic Drinks",
          "Bosphorus View",
          "Istanbul’s Skyline",
          "Romantic Sunset",
          "Beautiful Views",
          "Relaxing Cruise",
          "Romantic Experience",
        ],
      },
  
      program: {
        title: "Sunset Cruise Tour Program",
        items: [
          "Sunset Cruise",
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
      mailTitle:"Dinner Cruise Tour",
      duration: "3 Hours",
      drinks: "Unlimited Soft Drinks",
      service: "Experience a luxury dinner cruise with delicious meals and night views of the Bosphorus.",
      price: "€ 120",
      images: ["/services/dinner.jpg"],
      description: "Experience a luxury dinner cruise with delicious meals and night views of the Bosphorus.",
  
      menu: {
        title: "Dinner Menu",
        items: [
          "Unlimited Soft Drinks",
          "Optional Alcoholic Drinks",
          "Bosphorus View",
          "Istanbul’s Skyline",
          "Romantic Sunset",
          "Beautiful Views",
          "Relaxing Cruise",
          "Romantic Experience",
        ],
      },
  
      program: {
        title: "Dinner Cruise Tour Program",
        items: [
          "Dinner Cruise",
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
      mailTitle:"Swimming Tour",
      duration: "Half Day",
      drinks: "Unlimited Soft Drinks",
      service: "Escape the city and enjoy a refreshing swimming tour in peaceful bays along the Bosphorus.",
      price: "€ 150",
      images: ["/services/swimming.jpeg"],
      description: "Escape the city and enjoy a refreshing swimming tour in peaceful bays along the Bosphorus.",
  
      menu: {
        title: "Dinner Menu",
        items: [
          "Unlimited Soft Drinks",
          "Optional Alcoholic Drinks",
          "Bosphorus View",
          "Istanbul’s Skyline",
          "Romantic Sunset",
          "Beautiful Views",
          "Relaxing Cruise",
          "Romantic Experience",
        ],
      },
  
      program: {
        title: "Swimming Tour Program",
        items: [
          "Swimming Tour",
          "Bosphorus View",
          "Istanbul’s Skyline",
          "Romantic Sunset",
          "Beautiful Views",
          "Relaxing Cruise",
          "Romantic Experience",
        ],
      },
    },
  
    "vip-menu-dinner-with-alcohol": {
      title: "Special Celebration",
      subtitle: "Birthday, Proposal & Events",
      mailTitle:"Special Celebration",
      duration: "Private Yacht Experience",
      drinks: "Unlimited Soft Drinks",
      service: "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",
      price: "€ 250",
      images: ["/services/celebration.jpg"],
      description: "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",
  
      menu: {
        title: "Special Celebration Menu",
        items: [
          "Cold Starters (Traditional Turkish Appetizers)",
          "Fresh Seasonal Salad",
          "Main Dish with 7 options",
          " – Meat Casserole with mushroom and mashed potatoes",
          " – Grilled Salmon Fish served with sea beans",
          " – Grilled Fish with fresh greens",
          " – Chicken Steak with rice and french fries",
          " – Meat Patty with mashed potatoes and cheese",
          " – Vegetarian Plate (sauteed vegetables)",
          " – Creamy Pasta",
          "Mixed Nuts",
          "Dessert",
          "Fruit Plate",
          "DRINKS : Unlimited soft drinks such as coke, fanta, sprite, juice, tea, coffee",
          "Unlimited local alcoholic drinks (includes wine, raki, beer, vodka, gin)",
          "Import drinks are not included and available with an extra charge on the boat. (such as whiskey, tequila, champagne, cognac etc.)"
        ],
      },
  
      program: {
        title: "Special Celebration Program",
        items: [
          "Special Celebration",
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
  
  