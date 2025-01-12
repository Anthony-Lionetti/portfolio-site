import { Switch, Route } from 'wouter'
import Hero from './components/Hero'
import NotFound from './components/NotFound'
import Bookself from './components/Bookself'
import Posts from './components/Posts'

function Pages() {
  return (
    <Switch>
        <Route path={"/"} component={Hero} />
        <Route path={"/bookshelf"} component={Bookself} />
        <Route path={"/posts"} component={Posts} />
        <Route component={NotFound} />
    </Switch>
  )
}

export default Pages