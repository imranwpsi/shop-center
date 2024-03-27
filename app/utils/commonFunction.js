export function calculateDiscountedPrice(originalPrice, discount) {
    const discountAmount = originalPrice * (discount / 100);
    return parseFloat(originalPrice - discountAmount).toFixed(2);
}

// Function to get unique categories from product list
export function getUniqueCategories(products) {
    const categories = new Set(); // Using Set to ensure uniqueness
    products.forEach(product => {
        categories.add(product.category); // Adding category to Set
    });
    return Array.from(categories); // Converting Set to array
}