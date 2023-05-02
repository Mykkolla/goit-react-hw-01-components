import PropTypes from 'prop-types';
import { Statisticsul } from '../Stats/stats.styled';
import { StatisticsItem } from '../Stats/stats.styled';
import { StatsTitle } from '../Stats/stats.styled';
import { StatisticsSection } from '../Stats/stats.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <Statisticsul>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsItem>
        ))}
      </Statisticsul>
    </StatisticsSection>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
