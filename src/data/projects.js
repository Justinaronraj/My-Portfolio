// src/data/projects.js

const projects = [
  {
    id: 1,
    Title: "My Portfolio Website",
    Description: "A personal website built with React and Tailwind CSS to showcase my projects and skills.",
    Github: "https://github.com/yourusername/portfolio",
    Link: "https://yourportfolio.vercel.app",
    TechStack: ["React", "Tailwind", "HTML", "CSS"],
    Features: [
      "Fully responsive layout",
      "Dark/light mode toggle",
      "Project detail pages",
      "Smooth animations",
    ],
    Img: "/images/portfolio.png", // or public URL
  },
  {
    id: 2,
    Title: "Weather App",
    Description: "A weather app using OpenWeatherMap API to show real-time weather by city name.",
    Github: "https://github.com/yourusername/weather-app",
    Link: "https://weatherapp.vercel.app",
    TechStack: ["React", "CSS", "API"],
    Features: ["Live weather data", "Search by city", "Responsive UI"],
    Img: "/images/weather.png",
  },
  // Add more projects here
];

export default projects;
