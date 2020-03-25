import { Link } from 'preact-router/match'
import Logo from './logo'
import ExternalLink from '../externalLink'

const Header = () => (
  <header class="bg-gray-100 px-4 py-2">
    <div class="flex justify-between container mx-auto">
      <nav class="flex items-center flex-grow">
        <Logo />
        <h1 class="ml-2 mr-8">Herrenberg Hilft</h1>
        <Link activeClassName="link-active" href="/">Start</Link>
        <Link activeClassName="link-active" href="/bla">Bla</Link>
        <Link activeClassName="link-active" href="/blub">Blub</Link>
      </nav>
      <ExternalLink text="herrenberg.de" link="https://www.herrenberg.de/stadtleben" />
    </div>
  </header>
)

export default Header
