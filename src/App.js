import React, {Component} from 'react';
class App extends Component {
  constructor()
  {
    super();
    this.state={
      data:'',
    }
  }


handle(event)
{
  this.setState({
    data:event.target.value
  }) 
}
render() {
  return (
    <div>
    <input type="text" onChange={this.handle.bind(this)} />
    <h1>{this.state.data}</h1>
    </div>
  )
}
}
export default App;
