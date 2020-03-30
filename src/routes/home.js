import { Component } from 'preact'
import ShopCard from '../components/shopCard'
import shops from '../assets/shops'
import Fuse from 'fuse.js'
import Industries from '../assets/industries'
const fuse = new Fuse(shops, {
  keys: ['name', 'tags']
})

class Home extends Component {
  constructor() {
    super()
    this.state = { searchTerm: '', industry: '', shops }
  }

  search = e => {
    const searchTerm = e.target.value
    this.setState({
      searchTerm,
      shops: searchTerm !== ''
        ? this.state.industry !== ''
          ? fuse.search(searchTerm)
              .map(x => x.item)
              .filter(shop => shop.industries.includes(this.state.industry))
          : fuse.search(searchTerm).map(x => x.item)
        : shops
    })
  }

  select = e => {
    const industry = e.target.value
    this.setState({
      industry,
      shops: industry !== ''
        ? shops.filter(shop => shop.industries.includes(industry))
        : shops
    })
  }

  render (_, { searchTerm, shops }) {
    return <div class="container px-1">
      <h1 className="text-xl border-b-2 border-accent inline-block mb-4">Herrenberg liefert - Handel und Gastronomie trotz(t) Corona</h1>
      <div className="max-w-3xl">
        <p class="mb-8">
        Der besondere Charme von Herrenberg – den zaubern nicht nur eine wunderschöne Altstadt und die Stiftskirche, sondern auch zahlreiche kleine, kleinste und größere Geschäfte, Restaurants und Cafés. Händler und Gastronomen tragen viel dazu bei, dass Herrenberg eine so lebens- und liebenswerte Stadt ist.
        </p>

        <div class="flex flex-col lg:flex-row">
          <div className="flex-grow mb-4 lg:mb-0 lg:mr-2">
            <label htmlFor="search">Nach Schlagwort suchen</label>
            <input id="search" value={searchTerm} onInput={this.search} className="input" type="text" placeholder="Suchbegriff eingeben" />
          </div>
          <div>
            <label htmlFor="selectIndustrie">Branche</label>
            <select
              className="input"
              name="industry"
              id="selectIndustry"
              onInput={this.select}
            >
              <option value="">Alle</option>
              {Object.values(Industries).map(industry => (
                <option value={industry}>{industry}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
      {!shops.length && (
        <p className="my-8 italic text-red-600">keine Geschäfte für diesen Suchbegriff gefunden.</p>
      )}
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map(shop => (
          <ShopCard
            name={shop.name}
            description={shop.description}
            phone={shop.phone}
            image={shop.image}
            shopLink={shop.shopLink}
            url={shop.url}
          />
        ))}
      </div>
    </div>
  }
}

export default Home
