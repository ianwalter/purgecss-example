import { h } from 'preact'
import { Link } from 'preact-router/match'

export default () => (
  <nav class="my-5">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <Link className="nav-link" activeClassName="active" href="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" activeClassName="active" href="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)
