import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { products } from "../data/products";

export default function CategoryPage() {
    return (
        <>
            <CategoryNav />
            <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                {
                    products.length > 0 ?
                        products.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                        :
                        <p>Product list is empty</p>
                }
            </div>
        </>
    );
}
