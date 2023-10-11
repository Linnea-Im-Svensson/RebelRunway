type SectionProps = {
  header: string;
  alt: string;
};

const ShoeSection = ({ header }: SectionProps) => {
  return (
    <>
      <div>{header}</div>;
    </>
  );
};

export default ShoeSection;
