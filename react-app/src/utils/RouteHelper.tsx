import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { withRouter } from 'react-router';
 
/**
 * Helper that facilitate the use of the {@link Route} component
 */
 
/**
 * Returns a composite component where a {@link Route} component wraps the provided component
 *
 * @param {React.Component} WrappedComponent    - React component to be wrapped
 * @param {string} [extension=html]             - extension used to identify a route amongst the tree of resource URLs
 * @returns {CompositeRoute}
 */

interface CompositeRouteProperties {
  cqPath: string
}
export const withRoute = (WrappedComponent, extension) => {
    return class CompositeRoute extends Component<CompositeRouteProperties> {
        render() {
            let routePath = this.props.cqPath;
            if (!routePath) {
                return <WrappedComponent {...this.props}/>;
            }
 
            extension = extension || 'html';
 
            // Context path + route path + extension
            return <Route key={ routePath } path={ '(.*)' + routePath + '.' + extension } render={ (routeProps) => {
                return <WrappedComponent {...this.props} {...routeProps}/>;
            } } />
        }
    }
};
 
/**
 * ScrollToTop component will scroll the window on every navigation.
 * wrapped in in `withRouter` to have access to router's props.
 */
interface ScrollToTopProperties {
  location: string
}

class ScrollToTop extends Component<ScrollToTopProperties> {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
    render() {
      return this.props.children
    }
  }
  export default withRouter(ScrollToTop);