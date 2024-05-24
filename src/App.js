import List from "./List";

const fruits = [
  { id: 1, name: "apple", calories: 95 },
  { id: 2, name: "bannana", calories: 105 },
  { id: 3, name: "orange", calories: 45 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 }
]

const vegetables = [
  { id: 1, name: "potatoes", calories: 110 },
  { id: 2, name: "carrots", calories: 25 },
  { id: 3, name: "celery", calories: 15 },
  { id: 4, name: "corn", calories: 63 },
  { id: 5, name: "broccoli", calories: 50 }
]

const App = () => {
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null }
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null }
    </>
  );
}

export default App;
