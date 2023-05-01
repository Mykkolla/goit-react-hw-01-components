import { SectStatish2 } from "../Stats/stats.styled";
import { StatisticsSection } from "../Stats/stats.styled";

const SectStatis = ({ title, children }) => {
    return (
      <StatisticsSection>
        {title && <SectStatish2>{title}</SectStatish2>}
        {children}
      </StatisticsSection>
    );
  };

  export default SectStatis;
