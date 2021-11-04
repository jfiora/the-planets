import overviewImg from '../img/overview/planet-mercury.svg';
import internalImg from '../img/internal/planet-mercury-internal.svg';
import geologyImg from '../img/geology/geology-mercury.png';

export default {
  id: 1,
  name: 'mercury',
  stats: {
    rotationTime: '58.6 DAYS',
    revolutionTime: '87.97 DAYS',
    radius: '2.439.7 KM',
    averageTemp: '430°C',
  },
  overview: {
    image: overviewImg,
    text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    url: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
  },
  structure: {
    image: internalImg,
    text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    url: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
  },
  surface: {
    image: geologyImg,
    text: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    url: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
  },
  color: 'light-blue',
};
