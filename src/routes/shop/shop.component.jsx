import {Routes,Route} from 'react-router-dom';
import './shop.styles.scss';
import { Categories_Preview } from '../categories-preview/categories-preview.component';
import { CategoryComponent } from '../category/category.component';
import { setCategoriesMap } from '../../store/category/category.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocs } from '../../utils/firebase/firebaseUtils';

export const Shop = () => {
   const dispatch = useDispatch();
   useEffect(()=>{
      const getCategoryMap = async()=>{
          const categoryMap = await getCategoriesAndDocs('categories');
         //  console.log('categoryMap',categoryMapArr);
          dispatch(setCategoriesMap(categoryMap));
      }
      getCategoryMap();
      },[]);

    return (
       <Routes>
            <Route index element={<Categories_Preview/>}/>
            <Route path=':category' element={<CategoryComponent/>}/>
       </Routes>
    )};