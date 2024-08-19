import linkArrow from '../../../assets/icons/link-arrow.png'
import { Anchor, ArrowIcon } from './SeeAllProductsBtn.style'

export const SeeAllProductsBtn = () => {

  const handleClick = () => {
    window.scrollTo(0,0);
  }

  return (
    <Anchor
      onClick={handleClick}
      to='/products'
    >
        See All Watches
        <ArrowIcon src={linkArrow}></ArrowIcon>
    </Anchor>
  )
}
