import pageNotFoundImg from '../../assets/page-not-found.svg';
import arrowIcon from '../../assets/icons/link-arrow.png';
import { ArrowIcon, Container, NotFoundImg, StyledNavLink, Title } from './Error404_Layout.style';

export const Error404Layout = () => {
  return (
    <Container>
        <Title>Sorry! <span>Page</span> Not Found</Title>

        <NotFoundImg src={ pageNotFoundImg } alt='Error 404 - Page Not Found' />

        <StyledNavLink to='/'>
            Go back to Home Page
            <ArrowIcon src={arrowIcon} />
        </StyledNavLink>
    </Container>
  )
}
