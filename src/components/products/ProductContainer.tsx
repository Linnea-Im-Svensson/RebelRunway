type ContainerProps = {
  children: React.ReactNode;
  title: string;
};

function ProductContainer({ children, title }: ContainerProps) {
  return (
    <div className="font-poppins py-20">
      <h1 className="p-3 text-3xl font-bold uppercase">{title}</h1>
      <div className="mx-2 grid grid-cols-1 md:mx-4 md:grid-cols-3 md:gap-14">
        {children}
      </div>
    </div>
  );
}

export default ProductContainer;
