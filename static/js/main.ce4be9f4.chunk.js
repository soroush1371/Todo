(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{15:function(e,t,n){e.exports=n(34)},20:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(9),i=n.n(r),c=(n(20),n(1)),l=n(2),u=n(4),d=n(3),s=n(5),m=(n(7),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"ToDo"))}}]),t}(o.Component)),p=n(14),f=n(10),h=n.n(f),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={filter:"all",idForTodo:2,todos:[{id:1,title:"finish react",completed:!1,Editing:!1}]},n.addTodo=function(e){if("Enter"===e.key){var t=n.todoInput.current.value;if(0===t.trim().length)return;n.setState((function(e,n){var o=e.todos,a=e.idForTodo+1;return o.push({id:a,title:t,completed:!1,Editing:!1}),{todos:o,idForTodo:a}})),n.todoInput.current.value=""}},n.deleteTodo=function(e){n.setState((function(t,n){var o=t.todos;return o.splice(e,1),{todos:o}}))},n.Check=function(e,t,o){n.setState((function(n,o){var a=n.todos;return e.completed=!e.completed,a.splice(t,1,e),{todos:a}}))},n.checkAll=function(e){e.persist(),n.setState((function(t,n){var o=t.todos;return o.forEach((function(t){return t.completed=e.target.checked})),{todos:o}}))},n.editTodo=function(e,t,o){n.setState((function(n,o){var a=n.todos;return e.Editing=!0,a.splice(t,1,e),{todos:a}}))},n.todosCompletecount=function(){return n.state.todos.filter((function(e){return e.completed})).length},n.todoInput=a.a.createRef(),n.remaining=function(){return n.state.todos.filter((function(e){return!e.completed})).length},n.D=function(){n.setState((function(e,t){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},n.updateFilter=function(e){n.setState({filter:e})},n.todosFiltered=function(){return"all"===n.state.filter?n.state.todos:"active"===n.state.filter?n.state.todos.filter((function(e){return!e.completed})):"completed"===n.state.filter?n.state.todos.filter((function(e){return e.completed})):n.state.todos},n.anyRemaining=function(){return 0!==n.remaining()},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;this.props.todo;return a.a.createElement("section",null,a.a.createElement("div",{className:"main"},a.a.createElement("div",null),a.a.createElement(h.a,{transitionName:"fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},a.a.createElement("input",Object(p.a)({type:"text",onKeyUp:this.addTodo,placeholder:"what needs to be done",className:"new-todo",ref:this.todoInput},"onKeyUp",this.addTodo)),this.todosFiltered().map((function(t,n){return a.a.createElement("ui",{key:t.id,className:"todo-list"},a.a.createElement("li",null,a.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(o){return e.Check(t,n,o)},checked:t.completed}),!t.Editing&&a.a.createElement("label",{className:t.completed?"completed":"view",onDoubleClick:function(o){return e.editTodo(t,n,o)}},t.title),t.Editing&&a.a.createElement("label",{style:{margin:0,padding:0}},a.a.createElement("input",{type:"text",className:"new-todo",autoFocus:!0,ref:e.todoInput,defaultValue:t.title,onBlur:function(t){return e.addTodo},onKeyUp:function(o){"Enter"===o.key&&e.addTodo(t,n,o)}})),a.a.createElement("button",{className:"destroy",onClick:function(t){return e.deleteTodo(n)}}," ")))})),a.a.createElement("h6",null," ",a.a.createElement("input",{type:"checkbox",onChange:this.checkAll,checked:!this.anyRemaining()}),"Check all")),a.a.createElement("div",{className:"todo-count"},a.a.createElement("p",null,this.remaining()," items remaining")),a.a.createElement("div",{className:"footer"},a.a.createElement("button",{type:"button",onClick:function(){return e.updateFilter("all")}},"All"),a.a.createElement("button",{type:"button",onClick:function(){return e.updateFilter("active")}},"Active"),a.a.createElement("button",{type:"button",onClick:function(){return e.updateFilter("completed")}},"Completed"),a.a.createElement("div",{className:"clear-completed"},a.a.createElement(h.a,{transitionName:"fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},this.todosCompletecount()>0&&a.a.createElement("div",null,a.a.createElement("button",{onClick:this.D},"Clear completed")))))))}}]),t}(o.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"todoapp"},a.a.createElement(m,null),a.a.createElement(E,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.ce4be9f4.chunk.js.map