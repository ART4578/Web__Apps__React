import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(() => {
    let URL = `https://dummyjson.com/products`;
    if(searchParams.get("key")){
        URL =`https://dummyjson.com/products/search?q=${searchParams.get("key")}`;
    }
    
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
      console.log(searchParams.get("key"));
  }, [searchParams]);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const clickButton = () => {
    setSearchParams({key:inputValue})
    setInputValue("");
  };

  return (
    <div style={{ height: "400px" }}>
      <div>Products</div>
      <input type="text" value={inputValue} onChange={onChangeInput} />
      <button onClick={clickButton} disabled={inputValue.length < 2}>Search</button>
      <div>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div>{product.title}</div>
          </Link>
        ))}
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Products;