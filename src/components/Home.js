import { list } from '../list'
// components
import Item from "./Item";
// styles
import { StyledHome } from './styled/Home.styled';

function Home({ products, setProducts }) {
    const sortProducts = sortBy => {
        switch(sortBy) {
          case 'alphabetically':
            setProducts([...list].sort((a, b) => a.name - b.name))
            break
          case 'price-ascending':
            setProducts([...list].sort((a, b) => a.price - b.price))
            break
          case 'price-descending':
            setProducts([...list].sort((a, b) => b.price - a.price))
            break
          default: setProducts(list)
        }
      }

    return (
        <>
            <div className="filters">
                <select onChange={e => sortProducts(e.target.value)}>
                <option value=''>--sort items--</option>
                <option value='alphabetically'>alphabetically</option>
                <option value='price-ascending'>price-ascending</option>
                <option value='price-descending'>price-descending</option>
                </select>
            </div>
            <StyledHome>
                {
                    products.map((product, index) => {
                        return <Item  products={products} product={product} key={index} />
                    })
                }
            </StyledHome>
        </>
    )
}

export default Home
