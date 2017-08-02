var table_data = [
  {
    first_name: "Rose",
    last_name: "Tyler",
    home: "Earth"
  },
  {
    first_name: "Zoe",
    last_name: "Heriot",
    home: "Space Station W3"
  },
  {
    first_name: "Jo",
    last_name: "Grant",
    home: "Earth"
  },
  {
    first_name: "Leela",
    last_name: null,
    home: "Unspecified"
  },
  {
    first_name: "Romana",
    last_name: null,
    home: "Gallifrey"
  },
  {
    first_name: "Clara",
    last_name: "Oswald",
    home: "Earth"
  },
  {
    first_name: "Adric",
    last_name: null,
    home: "Alzarius"
  },
  {
    first_name: "Susan",
    last_name: "Foreman",
    home: "Gallifrey"
  }
];

console.log(typeof table_data);

function createTable(array) {
  var theTable = document.getElementById('injectedTable');
    console.log(theTable);
  for (var i = 0; i < array.length; i++) {
    var user = array[i];
    var keys = [ 'first_name', 'last_name', 'home' ];
    var row = document.createElement('tr');
    
    for (var j = 0; j < keys.length; j++) {
      var cell = document.createElement('td');
      cell.innerHTML = user[keys[j]];
      if (user[keys[j]] == null) {
        cell.innerHTML = ('left out');
      }
      row.appendChild(cell);
    }
  theTable.appendChild(row);
  }
}
createTable(table_data);