import { React, Component } from 'react';
import { Notifier } from '@airbrake/browser';
import PT from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new Notifier({
      projectId: process.env.REACT_APP_AIRBRAKE_PROJECT_ID,
      projectKey: process.env.REACT_APP_AIRBRAKE_PROJECT_KEY,
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    this.airbrake.notify({
      error,
      params: { info },
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>¡Ha ocurrido un problema!</h1>
          <p>Por favor, recarga la página o vuelve pasado un tiempo.</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node)]).isRequired,
};

export default ErrorBoundary;
