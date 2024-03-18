import Header from './components/header';
import './App.css';
import Card from './components/card';
import data from './data';

function App() {
  // console.log(data);
  const cards = data.map(item=>{
    return(
      <Card key={item.id} item={item} />
    )
  });


  return (
    <div>
      <Header />
      
      {cards}
      

      

    </div>
    );
}

export default App;
