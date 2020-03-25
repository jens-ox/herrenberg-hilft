import { Link } from 'preact-router/match'
import Logo from './logo'
import ExternalLink from '../externalLink'

const Header = () => (
  <header class="bg-gray-100 px-4 py-2">
    <div class="flex justify-between container mx-auto">
      <nav class="flex flex-col lg:flex-row flex-wrap items-center flex-grow">
        <div className="flex items-center">
          <Logo />
          <h1 class="ml-2 mr-8">Herrenberg Hilft</h1>
        </div>
        <div>
          <Link activeClassName="link-active" href="/">Start</Link>
          <Link activeClassName="link-active" href="/bla">Bla</Link>
          <Link activeClassName="link-active" href="/blub">Blub</Link>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
