import './Header.css';
import React  from "react";
//import { startOfWeek, format, addDays } from "date-fns";

const DaysOfWeek = () => {
    //const [currentDate, setCurrentDate] = useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const a=['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const days = [];
//let startDate = startOfWeek(currentDate);
      for (let i = 0; i < 7; i++) {
      days.push(
         <div className="column col-center" key={i}>
         {a[i]}
         
         </div>
      );
   }
   return <div className="days row">{days}</div>;
    };
    export default DaysOfWeek;