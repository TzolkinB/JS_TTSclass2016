header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");


class TodoList extends React.Component {
  constructor() {
   super();
  this.state = {listItems: [
    {text: "Gym"},
    {text: "Tan"},
    {text: "Laundry"}
  ]}
 }
 render() {
       var comps = this.state.listItems.map(function(item, i ){
            return <TodoItem key={i} item={item} />
       })

       return (
          <span>{comps}</span>
       );
  }
}

class TodoItem extends React.Component {
    render() {
        return (
          <div>{this.props.item.text}</div>
        )
    }
}


ReactDOM.render(
  <TodoList/>,
  document.getElementById('root'));
