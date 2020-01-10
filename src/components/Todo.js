import React, {Component} from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Todo extends Component{
    state={
      filter:'all',
        idForTodo:2,
           todos:[{
                 id:1,
                 title:"finish react",
                 completed:false,
                 Editing:false,
           }]
       }
      
    addTodo=event=>{
        if(event.key==='Enter'){
        const todoInput=this.todoInput.current.value;
        if(todoInput.trim().length===0){
            return;
          }
        this.setState((prevState,props)=>{
            let todos = prevState.todos;
            let idForTodo = prevState.idForTodo +1;
            todos.push({
              id: idForTodo,
              title:todoInput,
              completed:false,
              Editing:false,
            })
            return{
                todos,idForTodo
            };
           
          });
          this.todoInput.current.value='';
        }}

    deleteTodo=index=>{
        this.setState((prevState,props)=>{
          let todos =prevState.todos;
         
          todos.splice(index,1);
          return {todos}
        });
        }
        Check=(todo,index, event)=>{
          this.setState((prevState,props)=>{
            let todos = prevState.todos;
            
            todo.completed = !todo.completed;
            
            todos.splice(index,1,todo);
          
           
            return {todos};
          });
          }
          checkAll=(event)=>{
            event.persist();
            this.setState((prevState,props)=>{
              let todos = prevState.todos;
              
            todos.forEach((todos)=> todos.completed = event.target.checked);
            
             
              return {todos};
            });
            }
          editTodo=(todo, index, event)=>{
            this.setState((prevState,props)=>{
              let todos =prevState.todos;
              todo.Editing = true;
              todos.splice(index, 1,todo);
              return {todos}
            });
            }
            todosCompletecount=()=>{
              return this.state.todos.filter(todo=>todo.completed).length;
    
            }
          
        
        todoInput = React.createRef();
        remaining=()=>{
          return this.state.todos.filter(todo=> !todo.completed).length;
        }
        D=()=>{
          this.setState((prevState,props)  => {
          return {todos: prevState.todos.filter(todo => !todo.completed)};
          });
        }
       updateFilter= filter =>{
          this.setState({ filter });
       }
       todosFiltered= () => {
         if (this.state.filter==='all'){
         return this.state.todos;
          } else if(this.state.filter ==='active'){
           return this.state.todos.filter(todo => !todo.completed);
         }else if (this.state.filter ==='completed'){
         return this.state.todos.filter(todo => todo.completed);
       }
       return this.state.todos;
       }
          anyRemaining=()=>{
            return this.remaining() !== 0;
          }
    render(){
        const {todo}=this.props
     return(
        
    
<section><div className="main"><div></div>
<ReactCSSTransitionGroup
           transitionName="fade"
           transitionEnterTimeout={300}
           transitionLeaveTimeout={300}
           >
<input type="text" 
        onKeyUp={this.addTodo}
        placeholder="what needs to be done" className="new-todo" ref={this.todoInput} onKeyUp={this.addTodo}></input>
     {this.todosFiltered().map((todo,index)=>
        <ui key={todo.id} className="todo-list">
        <li>
         
          <input type="checkbox" className="toggle" onChange={(event)=>this.Check(todo, index, event)} checked={todo.completed} />
        {!todo.Editing &&
         <label className={todo.completed ?'completed':'view'}
         onDoubleClick={(event)=>this.editTodo(todo,index, event)}
         >{todo.title}</label>}
        
         {todo.Editing &&
         <label style={{margin:0,padding:0}}>
          <input type="text" className="new-todo" autoFocus ref={this.todoInput} defaultValue={todo.title} onBlur={(event=>this.addTodo)} 
          onKeyUp={(event)=>{
          if (event.key === 'Enter'){
             this.addTodo(todo, index, event);
          }}
     } /></label>}
     
          <button  className="destroy" onClick={(event)=>this.deleteTodo(index)}> </button>
         
        </li>
       
    
      </ui>
        )}
      
    
      <h6> <input type="checkbox" onChange={this.checkAll} checked={!this.anyRemaining()} />Check all</h6>
      </ReactCSSTransitionGroup>
      <div className="todo-count">
        <p>{this.remaining()} items remaining</p></div>
        <div className="footer"> 
          <button type="button"  onClick={()=>this.updateFilter('all')}>All</button>
          <button type="button"  onClick={()=>this.updateFilter('active')}>Active</button>
          <button type="button" onClick={()=>this.updateFilter('completed')}>Completed</button>
         <div className="clear-completed">
           <ReactCSSTransitionGroup
           transitionName="fade"
           transitionEnterTimeout={300}
           transitionLeaveTimeout={300}
           >
             
         {this.todosCompletecount() > 0 &&
           <div>
            <button onClick={this.D}>Clear completed</button>
          
         
          </div>}</ReactCSSTransitionGroup></div></div></div>
          </section>
      
     )}}

export default Todo;
