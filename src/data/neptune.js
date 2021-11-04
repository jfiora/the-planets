import overviewImg from '../img/overview/planet-neptune.svg';
import internalImg from '../img/internal/planet-neptune-internal.svg';
import geologyImg from '../img/geology/geology-neptune.png';

export default {
  id: 8,
  name: 'neptune',
  stats: {
    rotationTime: '16.08 HOURS',
    revolutionTime: '164.79 YEARS',
    radius: '24,622 KM',
    averageTemp: '-201°C',
  },
  overview: {
    image: overviewImg,
    text: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
    url: 'https://en.wikipedia.org/wiki/Neptune',
  },
  structure: {
    image: internalImg,
    text: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    url: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    url: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
  },
  color: 'blue',
};
