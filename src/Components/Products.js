
const products = {
    "iPhone 14":1000,
    "iPhone 15":1250,
    "Samsung S23":1100
};

function Products(props) {
    console.log(props.tax)
    return (
       <>
            {Object.entries(products)
                .map(([product, price]) => (
                <p>{product}: ${price} with tax: ${calculateTax(price, props.tax)}</p>
            ))}
       </>
    )
};

function calculateTax(price, tax) {
    return price * (1+tax/100);
} 

export default Products;