import * as React from 'react';
import * as ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component <any, any> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error: any, info: any) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, info);
      console.error('error body', error);
      console.error('info body', info);
    }
  
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Упс. Что-то пошло не так)</h1>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;