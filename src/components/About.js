import { useHistory } from 'react-router-dom';
// styles
import { StyledAbout } from './styled/About.styled';
import { StyledButton } from './styled/Button.styled';

function About() {
    const history = useHistory()
    return (
        <StyledAbout>
            <h1>About Us</h1>
            <p>
                Organic foods no pesticides protect the environment. organic can get very expensive, grow your own organic gardening!
                non-gmo. Get cuttings, rooted, mothers, designed vases. Right soil compost all natural ways green recycle. Tips.
            </p>
            <StyledButton onClick={() => history.push('/')}>Home</StyledButton>
        </StyledAbout>
    )
}

export default About
