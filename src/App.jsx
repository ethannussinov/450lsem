import './App.css'
import 'leaflet/dist/leaflet.css';
import StLouisMap from './components/StLouisMap';

function App() {

  return (
    <>
      <div>
        <h1>St. Louis District Map</h1>
        <StLouisMap />
      </div>
    </>
  )
}

export default App
