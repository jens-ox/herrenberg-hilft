import { Component } from 'preact'
import ShopCard from '../components/shopCard'
import shops from '../assets/shops'
import Fuse from 'fuse.js'
const fuse = new Fuse(shops, {
  keys: ['name', 'tags']
})

class Home extends Component {
  constructor() {
    super()
    this.state = { searchTerm: '', shops }
  }

  search = e => {
    const searchTerm = e.target.value
    if (searchTerm === '') {
      this.setState({ searchTerm: '', shops })
    } else {
      console.log('search for: ', searchTerm)
      const result = fuse.search(searchTerm)
      console.log('result. ', result)
      this.setState({ searchTerm, shops: result.map(x => x.item) })
    }
  }

  render (_, { searchTerm, shops }) {
    return <div class="container">
      <h1 className="text-xl border-b-2 border-accent inline-block mb-4">Herrenberg liefert - Handel und Gastronomie trotz(t) Corona</h1>
      <div className="max-w-3xl">
        <p class="mb-8">
        Der besondere Charme von Herrenberg – den zaubern nicht nur eine wunderschöne Altstadt und die Stiftskirche, sondern auch zahlreiche kleine, kleinste und größere Geschäfte, Restaurants und Cafés. Händler und Gastronomen tragen viel dazu bei, dass Herrenberg eine so lebens- und liebenswerte Stadt ist.
        </p>

        <input value={searchTerm} onInput={this.search} className="w-full bg-gray-200 rounded px-2 py-1 text-lg" type="text" placeholder="Suchbegriff eingeben" />
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
