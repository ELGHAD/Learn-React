

function List() {

  const fruits = ["Apple", "Banana", "Mango", "Grapes"]
  const listItems = fruits.map((fruit) => (
    <ul>
      <li>{fruit}</li>
    </ul>
  ));
  return (listItems)
}

export default List