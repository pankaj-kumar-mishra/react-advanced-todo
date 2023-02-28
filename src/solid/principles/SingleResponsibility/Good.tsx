import { Product } from './Product'
import { useProducts } from './hooks/useProducts'

export function Good() {
  const { products } = useProducts()

  return (
    <div className="flex flex-col h-full">
      <div>
        <span>Minimum Rating </span>
        ⭐️⭐️⭐️
      </div>
      <div className="h-full flex flex-wrap justify-center">
        {products.map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  )
}
