import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {

    console.log('funciona');
    const value = {price :100, title: 'texto'};
    const saludar = () => console.log('hoolaaaa')
    return (
      <>
        <NavBar />
        <ItemListContainer greeting={'Bienvenido hola hola'}/>
   
    </>
    );
}

export default App;

