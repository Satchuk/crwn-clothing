import '../directory/directory.styles.scss';
import { DirectoryItem } from '../directory-item/directory-item.component';
export const Directory = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}

        </div>
    )

}