import { useState } from "react";


function Products(props) {

    let [products, setProducts] = useState({
        "iPhone 14":1000,
        "iPhone 15":1250,
        "Samsung S23":1100
    });

    let [newProductName, setNewProductName] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");
    /**
     * 1.Input za unos imena proizvoda - newProductName, setNewProductName
     * 2.Input za unos cijene - newProductPrice, setNewProductPrice
     * 3.Button za kreiranje proizvoda 
     *      -> onClick: addProducts 
     *      -> newProductName, newProductPrice 
     *      ->push products
     * 
    */

    function addProduct() {
      if(newProductName === "") {
        return;
    }
      if(newProductPrice === "") {
        return;
    }
    console.log("Sve je u redu!"); 
    let newProduct = {[newProductName]: parseInt(newProductPrice)};

    setProducts( currentProducts  => ({
        ...currentProducts, //spoji trenutne proizvode
        ...newProduct   //spoji novi proizvod
    }) )
    
    }

    return (
       <>
            {Object.entries(products)
                .map(([product, price]) => (
                <p key={product}>{product}: ${price} with tax: ${calculateTax(price, props.tax)}</p>
            ))}
                <button onClick={() => setProducts({})}>Brisanje</button>   {/*arrow funkcija za brisanje*/}
                <div>
                    <input onInput={(e) => setNewProductName(e.target.value)}placeholder="Unesite ime proizvoda"/>
                    <input onInput={(e) => setNewProductPrice(e.target.value)} type="number" placeholder="Unesite cijenu proizvoda"/>
                    <button onClick={addProduct}>Add new product</button>

                </div>
       </>
    )
};

function calculateTax(price, tax) {
    let rez = price * (1+tax/100);
    return parseFloat(rez);
} 

export default Products;