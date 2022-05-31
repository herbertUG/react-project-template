import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = (props:any) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route 
      {...rest}
      render={(matchProps:any) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

export default RouteWithLayout;
