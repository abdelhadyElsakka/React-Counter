import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Shop = () => {

    const [products , setProducts] = useState([])

  useEffect(() => {
    fetchProductData()
  
  }, [])
    
  const fetchProductData = () => { 
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
  }

  
  return (
    <div className='bg-black'>
    <div className='container row mx-auto mt-5 '>
    {
        products.map((item,index)=>{
            return(
                <>
                <Card  style={{ width: '18rem', height:'29rem' }} className='col-3 m-2' key={index}>
                <Link to={`${item.id}`}>
                <Card.Img variant="top" src={item.image} style={{ height:'18rem' }}/>
                </Link>
                <Card.Body>
                    <Card.Title style={{ fontSize:'1rem' }}>{item.title}</Card.Title>
                </Card.Body>
                <Button variant="primary" className='mb-3'>Add to Cart</Button>
                </Card>
                </>
            )
        })
    }
    
    </div>
  </div>
  )
}

export default Shop;