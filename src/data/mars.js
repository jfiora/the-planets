import overviewImg from '../img/overview/planet-mars.svg';
import internalImg from '../img/internal/planet-mars-internal.svg';
import geologyImg from '../img/geology/geology-mars.png';

export default {
  id: 4,
  name: 'mars',
  stats: {
    rotationTime: '1.03 DAYS',
    revolutionTime: '1.88 YEARS',
    radius: '3.389.5 KM',
    averageTemp: '-28°C',
  },
  overview: {
    image: overviewImg,
    text: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    url: 'https://en.wikipedia.org/wiki/Mars',
  },
  structure: {
    image: internalImg,
    text: 'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
    url: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: 'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
    url: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
  },
  color: 'light-red',
};
