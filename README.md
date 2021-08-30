## React Monsters

### A React project based on an online class

1)  Use class components:
```class App extends Component```

2) Component stucture and code organization

3) Fetch data via:

``` componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }```

4) Update state with this.setState:

```fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));```

```<SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />```

5) Filter results:

```const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );```

6) Use Fat arrows to "bind" "this":

```onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };```

7) Set image scr dynamically:

```<img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />```
    
