// components
import Item from "./Item";
// styles
import { StyledHome } from './styled/Home.styled';

function Home({ products }) {
    const availableProducts = products.map((product, index) => {
        return <Item product={product} key={index} />
      })

    return (
        <StyledHome>
            {availableProducts}
        </StyledHome>
    )
}

export default Home
