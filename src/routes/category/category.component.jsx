import { useParams } from "react-router-dom"
import { Fragment, useContext,useEffect,useState} from "react";
import { CategoriesContext } from "../../contexts/category.context";
import { ProductCard } from "../../Components/productCard/productCard.component";
import './category.styles.scss'


export const CategoryComponent=()=>{
    const {category} = useParams();
    console.log(category);
    const {categoriesMap} = useContext(CategoriesContext);
    const [products ,setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return(
        <Fragment>
        <h2 className="Categorytitle">{category.toUpperCase()}</h2>
        <div className="category-container">
            {products && products.map((product)=> <ProductCard key={product.id} product={product} />)}
        </div>
        </Fragment>
    )
}