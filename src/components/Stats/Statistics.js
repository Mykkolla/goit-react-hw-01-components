import PropTypes from 'prop-types';
import { Statisticsul } from "../Stats/stats.styled";
import { Statisticsli } from "../Stats/stats.styled";

const Statistics = ({ stats }) => {
    return (
        <Statisticsul>
          {stats.map(({ id, label, percentage }) => (
            <Statisticsli key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Statisticsli>
          ))}
        </Statisticsul>
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
      }),
    ).isRequired,
  };


// const Statistics = ({ title, stats }) => {
//     return (
//       <section className={styles.statistics}>
//         {title && <h2 className={styles.title}>{title}</h2>}
//         <ul className={styles.statList}>
//           {stats.map(({ id, label, percentage }) => (
//             <li key={id} className={styles.item}>
//               <span className={styles.label}>{label}</span>
//               <span className={styles.percentage}>{percentage}%</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     );
//   };

//   export default Statistics;



