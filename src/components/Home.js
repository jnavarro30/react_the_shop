// components
import React from "react"
import Item from "./Item";
// styles
import { StyledHome } from './styled/Home.styled';

function Home({ products }) {
    return (
        <StyledHome>
            {
                products.map((product, index) => {
                    return <Item  products={products} product={product} key={index} />
                  })
            }
        </StyledHome>
    )
}

export default Home
