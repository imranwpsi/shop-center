import Link from "next/link";
import { calculateDiscountedPrice } from "../utils/commonFunction";

export default function Product({ product }) {
    return (
        <div>
            <Link href={`/products/${product.id}`}>
                <div
                    className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
                    style={{ backgroundImage: `url(${product.thumbnail})` }}
                >
                </div>
            </Link>
            <h2 className="text-sm lg:text-base mt-2">
                <Link className="text-base font-bold" href={`/products/${product.id}`}>
                    {product.title}
                </Link>
                <span className="text-[#919090] hover:text-blue-700">
                    <Link href={`/category/${product.category}`}> <span className="capitalize">({product.category})</span></Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product.description}</p>

            <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">${parseFloat(product.price).toFixed(2)}</span> ${calculateDiscountedPrice(product.price, product.discountPercentage)}
            </p>
        </div>
    )
}
