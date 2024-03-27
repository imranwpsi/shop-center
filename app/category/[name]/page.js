import CategoryNav from "@/app/components/CategoryNav";
import Product from "@/app/components/Product";
import { products } from "@/app/data/products";

export default function CategoryPage({ params: {name} }) {
    const categoryProducts = products.filter(product => product.category === name);

    return (
        <>
            <CategoryNav selectedCategory={name} />
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                {
                    categoryProducts.length > 0 ?
                        categoryProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                    :
                        <p>Product list is empty</p>
                }
            </div>
        </>
    );
}
