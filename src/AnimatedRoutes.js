import React from 'react'
import { Router, Route, Link, cleanPath } from 'react-static'
import { easeSinInOut } from 'd3-ease'
import { NodeGroup } from 'react-move'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

import Routes from 'react-static-routes';


const AnimatedRoutes = getContext({
  router: PropTypes.object,
  staticURL: PropTypes.string,
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      
      let Comp = getComponentForPath(cleanPath(props.location.pathname))
      if (!Comp) {
        Comp = getComponentForPath('404')
      }

      if (staticURL) {
        return null;
      }

      return (
        <NodeGroup
          data={[
            {
              id: props.location.pathname,
              Comp,
              props,
              router,
            },
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: 1,
            translateY: [10],
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            timing: { duration: 200, delay: 200, ease: easeSinInOut },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-10],
            timing: { duration: 200, ease: easeSinInOut },
          })}
        >
          {nodes => (
            <div className='animated-routes-container'>
              {nodes.map(({ key, data, state: { opacity, translateY } }) => {
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object,
                  },
                  () => ({
                    router: data.router,
                  }),
                )(props => <div {...props} />)

                return (
                  <PreservedRouterContext
                    key={key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY}px)`,
                      opacity,
                    }}
                  >
                    <data.Comp {...data.props} />
                  </PreservedRouterContext>
                )
              })}
            </div>
          )}
        </NodeGroup>
      )
    }}
  />
))

export default AnimatedRoutes;
