import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects.jsx';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Contact from './Contact';
import Resume from './Resume';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/techstack" component={TechStack} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}
