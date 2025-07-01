import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SinglePage() {
    const { productId } = useParams();
    const [product, setProduct] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then(json => setProduct(json))
    }, []);

    return (
        <div>
            {product.title}
        </div>
    );
}

export default SinglePage;