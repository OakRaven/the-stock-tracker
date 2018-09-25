import Home from './components/Home'
import Portfolio from './components/Portfolio/Portfolio.vue'
import Stocks from './components/Stocks/Stocks'

export const routes = [{
  path: '/',
  component: Home
},
{
  path: '/portfolio',
  component: Portfolio
},
{
  path: '/stocks',
  component: Stocks
}
]
