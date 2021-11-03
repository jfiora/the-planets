import overviewImg from '../img/overview/planet-venus.svg';
import internalImg from '../img/internal/planet-venus-internal.svg';
import geologyImg from '../img/geology/geology-venus.png';

export default {
  id: 2,
  name: 'venus',
  stats: {
    rotationTime: '243 DAYS',
    revolutionTime: '224.7 DAYS',
    radius: '6.051.8 KM',
    averageTemp: '471°C',
  },
  overview: {
    image: overviewImg,
    text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    url: 'https://en.wikipedia.org/wiki/Venus',
  },
  structure: {
    image: internalImg,
    text: 'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
    url: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
    url: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
  },
  color: 'yellow',
};
