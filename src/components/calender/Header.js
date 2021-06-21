import './Header.css';
import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { format } from "date-fns";

const Header = () => {
   const dispatch=useDispatch();
   const prevMonth=()=>{
      dispatch({type :'PREVIOUS'});
   }
   const nextMonth=()=>{
      dispatch({type :'NEXT'});
   }
   const date=useSelector(state=>state.currentDate);
    //const [currentDate, setCurrentDate] = useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date());
    //const nextMonth = () => {
        //setCurrentDate(addMonths(currentDate, 1));
     //}
     //const prevMonth = () => {
        //setCurrentDate(subMonths(currentDate, 1));
     //}

const dateFormat = "d MMMM yyyy";
return (
   <div className="header row flex-middle">
      <div className="column col-start">
         <div className="icon" onClick={prevMonth}>
            chevron_left
         </div>
      </div>
      <div className="column col-center">
         <span>{format(date, dateFormat)}</span>
      </div>
      <div className="column col-end">
         <div className="icon" onClick={nextMonth}>
            chevron_right
         </div>
      </div>
   </div>
   );
};
export default Header;
