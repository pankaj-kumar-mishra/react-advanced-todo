// import { IProduct } from './Product'

interface IThumbnailProps {
  // product: IProduct;
  imageUrl: string
}

export function Thumbnail(props: IThumbnailProps) {
  // const { product } = props;
  const { imageUrl } = props

  return (
    <img
      style={{ width: 100, height: 100, borderRadius: 50 }}
      src={imageUrl}
      alt="product"
    />
  )
}
