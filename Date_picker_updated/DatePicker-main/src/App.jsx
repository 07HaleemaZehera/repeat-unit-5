import './App.css';
import { Dates } from './components/Date';

function App() {



return (<div className='App' style={{"background":"pink","height":"500px"}}>
 <h1 style={{"background-color":"gray" ,"color":"Black"}}>My Calender</h1>
  <Dates/>
</div>)
}

export default App;