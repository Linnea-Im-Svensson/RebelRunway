type ProductHeaderProps = {
  title: string;
};

const ProductHeader = ({ title }: ProductHeaderProps) => {
  return (
    <div className="my-4">
      <h1 className="mb-2 border-b-4 border-primary pb-4 text-center text-3xl">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
    </div>
  );
};

export default ProductHeader;
