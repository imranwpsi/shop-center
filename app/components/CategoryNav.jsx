import Link from "next/link";
import { products } from "../data/products";
import { getUniqueCategories } from "../utils/commonFunction";

export default function CategoryNav({ selectedCategory = '' }) {
    // Getting unique categories
    const uniqueCategories = getUniqueCategories(products);

    return (
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <button className={`hover:border-b border-black block h-6 box-border mt-4 ${selectedCategory == "" && 'border-b text-blue-700 font-bold'}`}>
                <Link href={'/category'}>All</Link>
            </button>
            {
                uniqueCategories.length > 0 ?
                    uniqueCategories.map(category => (
                        <button key={category} className={`hover:border-b border-black block h-6 box-border mt-5 capitalize ${category == selectedCategory && 'border-b text-blue-700 font-bold'}`}>
                            <Link href={`/category/${category}`}>{category}</Link>
                        </button>
                    ))
                :
                <p>Category list is empty</p>
            }
        </div>
    )
}
