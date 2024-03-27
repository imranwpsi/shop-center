import ProductGallery from "@/app/components/ProductGallery";
import { products } from "@/app/data/products";
import { calculateDiscountedPrice } from "@/app/utils/commonFunction";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage({ params: { id } }) {
    const product = products.find(product => product.id == id);

    // Function to render star ratings
    function renderStarRating(rating) {
        const stars = [];
        const maxRating = 5; // Maximum rating
        for (let i = 0; i < maxRating; i++) {
            if (i < rating) {
                stars.push(
                    <Image
                        key={i}
                        src="/assets/svg/star.svg"
                        width="20"
                        height="20"
                        alt="Star"
                    />
                );
            } else {
                stars.push(
                    <Image
                        key={i}
                        src="/assets/svg/empty-star.svg"
                        width="20"
                        height="20"
                        alt="Empty Star"
                    />
                );
            }
        }
        return stars;
    }

    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <ProductGallery product={product} />
                    <div className="w-full lg:w-5/12">
                        <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{product.title}</h1>
                        <span className="text-[#919090] my-3 hover:text-blue-700 capitalize"><Link href={`/category/${product.category}`}>{product.category}</Link></span>
                        <div className="mt-3 flex items-center justify-start gap-1">
                            {renderStarRating(product.rating)}
                        </div>
                        <hr className="my-5 bg-black" />

                        <div>
                            <p className="my-3">
                                <span className="text-rose-600 opacity-60 line-through">${parseFloat(product.price).toFixed(2)}</span>
                                <span className="font-bold text-2xl"> ${calculateDiscountedPrice(product.price, product.discountPercentage)}</span>
                            </p>
                        </div>
                        <div>
                            <p className="leading-7">{product.description}</p>

                            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                Add To Cart - ${calculateDiscountedPrice(product.price, product.discountPercentage)}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
