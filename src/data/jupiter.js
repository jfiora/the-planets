import overviewImg from '../img/overview/planet-jupiter.svg';
import internalImg from '../img/internal/planet-jupiter-internal.svg';
import geologyImg from '../img/geology/geology-jupiter.png';

export default {
  id: 5,
  name: 'jupiter',
  stats: {
    rotationTime: '9.93 HOURS',
    revolutionTime: '11.86 YEARS',
    radius: '69,911 KM',
    averageTemp: '-108°C',
  },
  overview: {
    image: overviewImg,
    text: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
    url: 'https://en.wikipedia.org/wiki/Jupiter',
  },
  structure: {
    image: internalImg,
    text: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    url: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: 'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
    url: 'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
  },
  color: 'red',
};
