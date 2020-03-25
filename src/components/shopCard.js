const ShopCard = ({ name, description, shopLink, phone, url, mail, image }) => (
  <div class="card">
    <div className="h-full flex flex-col justify-between">
      <div>
        {image && (
          <img class="image" src={image} alt={name} />
        )}
        <p className="header">{name}</p>
        {description && (
          <p className="description">{description}</p>
        )}
        {phone && (
          <p className="phone">
            <svg class="inline-block mr-2" stroke="#999" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {phone}
          </p>
        )}
      </div>
      <div class="mt-4 flex flex-row">
        {shopLink && (
          <a className="link-shop" href={shopLink} target="_blank" rel="noopener noreferrer">Zum Online-Shop</a>
        )}
        {url && (
          <a className="link-shop" href={url} target="_blank" rel="noopener noreferrer">Zur Webseite</a>
        )}
      </div>
    </div>
  </div>
)

export default ShopCard
