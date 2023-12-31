import linkArrow from '../../../assets/icons/link-arrow.png'
import { Anchor, ArrowIcon } from './SeeAllProductsBtn.style'

export const SeeAllProductsBtn = () => {
  return (
    <Anchor to='/products'>
        See All Watches
        <ArrowIcon src={linkArrow}></ArrowIcon>
    </Anchor>
  )
}
