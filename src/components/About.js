import { Link } from 'react-router-dom';
// styles
import { StyledAbout } from './styled/About.styled';

function About() {
    return (
        <StyledAbout>
            The About Page1
            <Link to='/'>
                Home
            </Link>
            <p>
            Organic foods no pesticides protect the environment. organic can get very expensive, grow your own organic gardening!
            non-gmo. Get cuttings, rooted, mothers, designed vases. Right soil compost all natural ways green recycle. Tips.
            </p>
        </StyledAbout>
    )
}

export default About
