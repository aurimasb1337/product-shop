import logo from './logo.svg';
import './App.css';
import FilterPage from './pages/FilterPage';
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
<Provider store={store}>
<FilterPage/>
</Provider>
  );
}

export default App;
