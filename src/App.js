import './App.css';
import {MenuItem, Select, FormControl, Card, CardContent,} from '@material-ui/core'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className='app__dropdown'>
            <Select variant='outlined' value='abc'>
              <MenuItem value='worldide'>worldide</MenuItem>
              <MenuItem value='worldide'>worldide</MenuItem>
              <MenuItem value='worldide'>worldide</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* header*/}
        {/* title + dropDown */}

        {/* infoBoxes */}
        {/* infoBoxes */}
        {/* infoBoxes */}
        
        {/* table */}
        
        {/* graph */}
        
        {/* map */}
    
    </div>
  );
}

export default App;
