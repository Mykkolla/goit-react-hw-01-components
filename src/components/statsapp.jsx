
import Statistics from './Statistics'
import dataststs from "../data.json";
import SectStatis from "./sectionStats";


export const Stat = () => {
  return (
    <div>
<SectStatis title="Upload stats">
    <Statistics stats = {dataststs} />
</SectStatis>
</div>
  );
};


// export const Stat = () => {
//     return (
//       <div>
//   <Statistics  stats = {dataststs}/>
//   </div>
//     );
//   };
  