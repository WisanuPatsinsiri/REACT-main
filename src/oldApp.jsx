import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData =[
    {name: ' Wisanu',message: 'Welcome'},
    {name: 'Thor', message: 'Welcome'},
    {name: 'Naruto', message: 'Arigato'},
    {name: 'bomb', message: 'Nuclear'},
    {name: 'nuclear', message: 'energy.'},
    {name: 'hulk', message: 'Green'},
  ];

  return (
<div className='App'>
  <Counter />
  {helloData.map((data,index) =>(
    <Hello key={index} name ={data.name} message={data.message} />
  ))}

  <Contact email="Wisanu@gmail.com" phone="  0925288520"/>
</div>        
  );
}

export default App;