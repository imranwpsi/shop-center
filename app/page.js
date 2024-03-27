import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import { products } from "./data/products";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                        {
                            products.length > 0 ?
                                products.slice(0, 12).map(product => (
                                    <Product product={product} key={product.id} />
                                ))
                            :
                            <p>Product list is empty</p>
                        }
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </>
    );
}
