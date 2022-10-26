import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import endPoints from '@services/api';

export default function edit() {
  const router = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;

    async function getProduct(){
        const response = await axios.get(endPoints.products.getProduct(id));
        setProduct(response.data);
        console.log(product);
    }

    getProduct().catch((error) => {
        console.log("product not found");
    });
    
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
