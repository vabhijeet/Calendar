import Header from './calender/Header';
import DaysOfWeek from './calender/DaysOfWeek';
import Cells from './calender/Cell';
import './calender/Header.css'

const Index=()=>{
    return <div className="calendar">
         <Header></Header>
         <DaysOfWeek></DaysOfWeek>
         <Cells></Cells>
    </div>  
}
export default Index;