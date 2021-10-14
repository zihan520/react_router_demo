import React, { Suspense } from 'react'

const loadComponent = component => props => {
  const Component = React.lazy(() => import(`../${component}`))
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  )
}
export const routers = [
  {
    path: '/tip',
    component: loadComponent('Tip'),
    exact: true,
    Title: '默认页面',
  },
  {
    path: '/loginTip',
    component: loadComponent('LoginTip'),
    exact: true,
    Title: '登录提示',
  },
  {
    path: '/test',
    component: loadComponent('Test'),
    exact: true,
    requireAuth: true,
  },
  {
    path: '/page1',
    component: loadComponent('Page1'),
    exact: true,
  },
]
