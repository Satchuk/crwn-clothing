import {Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';
import {CategoryPreview} from '../../Components/category-preview/categoryPreview.component';
export const Categories_Preview = () => {
    console.log('categoriesMap',selectCategoriesMap)
    const categoriesMap = useSelector(selectCategoriesMap);
    
 
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                  
                })}
        </Fragment>
    )};