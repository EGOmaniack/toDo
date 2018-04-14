import * as React from 'react';

import processes from './processes';
import Head from './components/header';

class Application extends React.Component < any, {} > {

  render() {
    let {flowName, stateName} = this.props.flow;
    let Component = (processes as any)[flowName][stateName];
    return (
      <>
        <Head
          stateName={stateName}
        />
        <Component {...this.props} />
      </>
    );
  }
}
export default Application;