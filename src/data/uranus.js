import overviewImg from '../img/overview/planet-uranus.svg';
import internalImg from '../img/internal/planet-uranus-internal.svg';
import geologyImg from '../img/geology/geology-uranus.png';

export default {
  id: 7,
  name: 'uranus',
  stats: {
    rotationTime: '17.2 HOURS',
    revolutionTime: '84 YEARS',
    radius: '25,362 KM',
    averageTemp: '-195°C',
  },
  overview: {
    image: overviewImg,
    text: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    url: 'https://en.wikipedia.org/wiki/Uranus',
  },
  structure: {
    image: internalImg,
    text: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    url: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    url: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
  },
  color: 'cyan',
};
