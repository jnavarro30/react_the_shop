import { useHistory } from 'react-router-dom';
// styles
import { StyledAbout } from './styled/About.styled';

function About() {
    const history = useHistory()
    return (
        <StyledAbout>
            <h1>About Us</h1>
            <p>
                Organic foods no pesticides protect the environment. organic can get very expensive, grow your own organic gardening!
                non-gmo. Get cuttings, rooted, mothers, designed vases. Right soil compost all natural ways green recycle. Tips.
            </p>
            <button onClick={() => history.push('/')}>Home</button>
        </StyledAbout>
    )
}

export default About
