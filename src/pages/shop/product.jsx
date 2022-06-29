import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';

function Product() {


    const productId=useParams().id;
    console.log(productId)

    const [product , setProduct] = useState({})

    useEffect(() => {
        fetchProduct()
    }, [])
    

    const fetchProduct = () => { 
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(res=>res.json())
                .then(json=>setProduct(json))
     }
  return (
    <div className='d-flex mx-auto mt-5 container'>
                <Card.Img variant="top" src={product.image} className='w-25 mt-1'/>
                <Card.Body className='m-5 w-20'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
                
    </div>

  )
}

export default Product