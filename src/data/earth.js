import overviewImg from '../img/overview/planet-earth.svg';
import internalImg from '../img/internal/planet-earth-internal.svg';
import geologyImg from '../img/geology/geology-earth.png';

export default {
  id: 3,
  name: 'earth',
  stats: {
    rotationTime: '0.99 DAYS',
    revolutionTime: '365.26 DAYS',
    radius: '6.371 KM',
    averageTemp: '16°C',
  },
  overview: {
    image: overviewImg,
    text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    url: 'https://en.wikipedia.org/wiki/Earth',
  },
  structure: {
    image: internalImg,
    text: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    url: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: 'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
    url: 'https://en.wikipedia.org/wiki/Earth#Surface',
  },
  color: 'purple',
};
