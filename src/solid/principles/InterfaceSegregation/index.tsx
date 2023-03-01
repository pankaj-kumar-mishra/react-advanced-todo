import { Product } from './Product'

const product = {
  id: 'id',
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  price: 100,
  rating: { rate: 3 },
  title: 'Test',
}

const InterfaceSegregation = () => {
  return (
    <div>
      <h1>InterfaceSegregation</h1>
      <Product product={product} />
    </div>
  )
}

export default InterfaceSegregation
