import './Header.css';
import React,{ useState } from "react";
import { useSelector } from 'react-redux';
import { format,startOfMonth,endOfMonth,startOfWeek,endOfWeek,isSameMonth,isSameDay,parse,addDays } from "date-fns";

const Cells = () => {
    // const nextMonth = () => {
    //     setCurrentDate(addMonths(currentDate, 1));
    //  }
    //  const prevMonth = () => {
    //     setCurrentDate(subMonths(currentDate, 1));
    //  }

    
    const date=useSelector(state=>state.currentDate);
    const [selectedDate, setSelectedDate] = useState(date);
    //const [currentDate, setCurrentDate] = useState(new Date());
    const onDateClick = (day) => {
        setSelectedDate(day);
    }
    //const currentDate=new Date();
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    //console.log(day);
    let formattedDate = "";
    while (day <= endDate) {
       for (let i = 0; i < 7; i++) {
       formattedDate = format(day, dateFormat);
       const cloneDay = day;
       days.push(
          <div 
           className={`column cell ${!isSameMonth(day, monthStart)
           ? "disabled" : isSameDay(day, selectedDate) 
           ? "selected" : "" }`} 
           key={day} 
           onClick={() => onDateClick(parse(cloneDay))}
           > 
           <span className="number">{formattedDate}</span>
           <span className="bg">{formattedDate}</span>
         </div>
         );
       day = addDays(day, 1);
      }
       rows.push(
          <div className="row" key={day}> {days} </div>
        );
       days = [];
     }
    return <div className="body">{rows}</div>;
    }

    export default Cells;