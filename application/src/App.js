import './assets/App.css';
import { ExampleStyle } from './assets/shared-styles';
import Appointment from './page-components/appointment/Appointment';
import Info from './page-components/info/Info';
import Landing from './page-components/landing/Landing';
import Questionnaire from './page-components/questionnaire/Questionnaire';
import Results from './page-components/results/Results';

function App() {
  return (
    <div className="App">
      <ExampleStyle>Testi</ExampleStyle>
      <Landing></Landing>
      <Info></Info>
      <Questionnaire></Questionnaire>
      <Results></Results>
      <Appointment></Appointment>
    </div>
  );
}

export default App;
