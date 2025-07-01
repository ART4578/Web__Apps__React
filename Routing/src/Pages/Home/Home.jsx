import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        let id = setTimeout(() => {
            navigate("/products", {state: {id: 10} });
        }, 5000);

        return () => clearTimeout(id);
    }, []);

    return (
        <div style={{ height: "400px" }}>
           <div>Home</div>
           <Link to="/products" state={{id:5}}>go to products</Link>
           <Link to="/products">go to products</Link>
        </div>
    );
}

export default Home;