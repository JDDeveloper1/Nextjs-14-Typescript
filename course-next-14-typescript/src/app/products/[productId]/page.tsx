import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata= ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    description: `Product ${params.productId} description`,
  };
};

function ProductDetail({ params }: Readonly<Props>) {
  return (
    <div>
      <h1>Product {params.productId}</h1>
    </div>
  );
}

export default ProductDetail;
