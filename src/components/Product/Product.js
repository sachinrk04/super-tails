import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./Product.scss";

const Product = ({ index, product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.title}
        image={product?.image?.src}
      />
      <CardContent>
        <Typography gutterBottom component="div" className="product-title">
          <Link component={Link} to={`/product-details/${index}/${product.id}/${product.title}`}>
            {product.title}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Product;
