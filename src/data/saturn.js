import overviewImg from '../img/overview/planet-saturn.svg';
import internalImg from '../img/internal/planet-saturn-internal.svg';
import geologyImg from '../img/geology/geology-saturn.png';

export default {
  id: 6,
  name: 'saturn',
  stats: {
    rotationTime: '10.8 HOURS',
    revolutionTime: '29.46 YEARS',
    radius: '58,232 KM',
    averageTemp: '-138°C',
  },
  overview: {
    image: overviewImg,
    text: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
    url: 'https://en.wikipedia.org/wiki/Saturn',
  },
  structure: {
    image: internalImg,
    text: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    url: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    url: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
  },
  color: 'orange',
};
