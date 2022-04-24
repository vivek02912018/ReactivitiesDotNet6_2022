import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);
 
  //useEffect is called on every re-render
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);//<--- array of dependencies, to prevent the infinite call back
 
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      
        <List>
        {activities.map((activity:any) =>(
            <List.Item key={activity.id}>
              {activity.title}
              </List.Item>
          ))}
        </List>
          
        
     
    </div>
  );
}
 
export default App;
