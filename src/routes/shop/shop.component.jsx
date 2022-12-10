import {Routes,Route} from 'react-router-dom';
import './shop.styles.scss';
import { Categories_Preview } from '../categories-preview/categories-preview.component';
import { CategoryComponent } from '../category/category.component';

export const Shop = () => {
    return (
       <Routes>
            <Route index element={<Categories_Preview/>}/>
            <Route path=':category' element={<CategoryComponent/>}/>
       </Routes>
    )};