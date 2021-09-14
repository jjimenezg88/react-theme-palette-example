import { Route } from 'react-router';
import "./styles/main.scss"

import ClearTemplate from './components/template/template.component';
import HomePage from './pages/home/home.page';
import SchedulerPage from './pages/scheduler/scheduler.page';

const App = () => {

  return (
    <ClearTemplate>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/scheduler" component={SchedulerPage} />
    </ClearTemplate>
  );
}

export default App;
