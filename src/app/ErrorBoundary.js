import { React, Component } from 'react';
import { Notifier } from '@airbrake/browser';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/core';
import PT from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new Notifier({
      projectId: 265985,
      projectKey: '041f76d5194890f78a65022f0bc59677',
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
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>¡Ha ocurrido un problema!</AlertTitle>
          <AlertDescription>
            Por favor, recarga la página o vuelve pasado un tiempo.
          </AlertDescription>
        </Alert>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node)]).isRequired,
};

export default ErrorBoundary;
