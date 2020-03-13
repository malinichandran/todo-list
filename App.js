import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  arr=[]
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()
    this.state={
      list:[]
    }
    
    this.submitHandler=this.submitHandler.bind(this)
  }
  submitHandler=(event)=>{
    event.preventDefault();
    const data= this.inputRef.current.value;
    if(data!==""){
    this.arr.push(data);
    this.setState({
      list:this.arr
    })}
    
  }
  render(){
  return (
    <div onSubmit={this.submitHandler}>
      <form>
      <input placeholder="Add the task" type="text"ref={this.inputRef} ></input>
      <button type="submit">Add</button>
      <ul>
              {this.state.list.map((item,index) => (
                                        <li key={index}> {item}</li>))}
                                        </ul>
      </form>
    </div>
  );
}
}

export default App;
