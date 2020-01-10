import React,{Component} from 'react';
import Header from './components/Header'
import './App.css';
import Todo from './components/Todo' 
class App extends Component {
 
 
  render(){
  return (
    <div className="todoapp">
     <Header />
      <Todo />
    </div>
  );
 
}

  
  

}

export default App;
