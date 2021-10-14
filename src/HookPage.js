import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { routers } from './router'
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => {
      console.log(route)
      return (
        <route.component {...props} route={route.routes} title={route.title} />
      )
    }}
  />
)
class HookName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { history } = this.props
    // 登录的cookie值
    const userAuth = sessionStorage.getItem('User-Token')
    return (
      <div>
        <Switch>
          {routers.map((route, index) => {
            return (
              <Route
                key={index}
                history={history}
                path={route.path}
                exact={route.exact}
                render={props => {
                  // 判断是否登录
                  if (!userAuth && route.requireAuth) {
                   return <Redirect to={'/loginTip'} />
                  } else {
                     return (
                       <route.component
                         {...props}
                         route={route.routes}
                         title={route.title}
                       />
                     )
                    
                  }
                }}
              />
            )

            // return (
            //   <RouteWithSubRoutes key={index} {...route} history={history} />
            // )
          })}
          {/* 默认页面 */}
          {history.location.pathname === '/' ? (
            <Redirect from='/' to='/tip' />
          ) : (
            <Route path={'*'}>
              <h3 style={{ textAlign: 'center' }}>页面不存在!</h3>
            </Route>
          )}
        </Switch>
      </div>
    )
  }
}
export default withRouter(HookName)
