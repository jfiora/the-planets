import PlanetStatItems from './PlanetStatsItem/PlanetStatItem';
import './PlanetStats.css';

const PlanetStats = ({ stats }) => {
  console.log(stats);
  return (
    <div className="PlanetStat">
      <PlanetStatItems
        statType="rotation time"
        statValue={stats.rotationTime}
      />
      <PlanetStatItems
        statType="revolution time"
        statValue={stats.revolutionTime}
      />
      <PlanetStatItems statType="radius" statValue={stats.radius} />
      <PlanetStatItems statType="average temp." statValue={stats.averageTemp} />
    </div>
  );
};

export default PlanetStats;
