# Stock Management

# Live Server Link: https://stcok-management-a-1-three.vercel.app/

## Installation

**Copy this and paste on cmd:**

    https://github.com/AhmadShopnil/productmanagement-express

**Installiation dependencies:**

    npm install

## Run In Development

To start the application in development mode:

npm run start:dev

## Sample data structure for create Product -

Endpoint: /api/products
{
"name": "iPhone 13 pro max",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}

## Sample data structure for update product -

EndPoint: /api/products/:productId

{
"price": 1500
}
