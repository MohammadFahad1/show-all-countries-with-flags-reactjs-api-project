import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div>
      <Countries></Countries>
    </div>
  );
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Load All Counties of the World!!!</h1>
      <h2>Total <span style={{ color: "red" }}>{countries.length}</span> Coutries Available!</h2>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  )
}
 */

export default App;
