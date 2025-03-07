import { useState } from "react";


function Products(props) {

    let [products, setProducts] = useState({
        "iPhone 14":1000,
        "iPhone 15":1250,
        "Samsung S23":1100
    });

    return (
       <>
            {Object.entries(products)
                .map(([product, price]) => (
                <p key={product}>{product}: ${price} with tax: ${calculateTax(price, props.tax)}</p>
            ))}
                <button onClick={() => setProducts({})}>Brisanje</button>   {/*arrow funkcija za brisanje*/}
       </>
    )
};

function calculateTax(price, tax) {
    return price * (1+tax/100);
} 

export default Products;