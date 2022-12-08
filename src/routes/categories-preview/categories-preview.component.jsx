import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/category.context';
import {CategoryPreview} from '../../Components/category-preview/categoryPreview.component';
export const Categories_Preview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
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