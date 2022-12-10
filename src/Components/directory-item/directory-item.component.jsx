import { DirectoryItemContainer, BackgroundImage,Body} from "./directory-item.styles";
import {useNavigate} from 'react-router-dom';
export const DirectoryItem=({category})=>{
    const {title , imageUrl,routes} = category;
    const navigate = useNavigate();

    const redirectToCategory = ()=>{
      navigate(routes);
    }
    return(
        <DirectoryItemContainer onClick={redirectToCategory}>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2 >{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
}