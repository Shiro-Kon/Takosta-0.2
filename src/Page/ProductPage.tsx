import CategorySection from "../Component/ProductPage/CategorySection";
import { Product, products } from "../Utils/Products";


const ProductPage: React.FC = () => {
  return (

      <div className="container mx-auto md:w-[90%]  overflow-hidden  my-12 md:my-16 xxl:my-28">
        {Object.entries(groupProductsByCategory()).map(([category, items]) => (
          <CategorySection
            key={category}
            category={category}
            products={items}
          />
        ))}
      </div>

  );
};

function groupProductsByCategory(): Record<string, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
}

export default ProductPage;
