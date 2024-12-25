import PropTypes from 'prop-types';

function List(props){
    const itemlist = props.items;
    // const fruits = ["apple", "orange"]
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    //fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabethical
    //fruits.sort((a,b) => a.calories-b.calories) //Numerical

    const lowcal = itemlist.filter(fruit => fruit.calories < 100 )

    const listItems = lowcal.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}
                                          </li>);

    return(<ul>{listItems}</ul>);
}
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number
  }))
}
List.defaultProps = {
  category: "Category",
  items: []
}

export default List