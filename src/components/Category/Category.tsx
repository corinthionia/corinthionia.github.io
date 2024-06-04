interface Props {
  categories: string[];
}

const Category = (props: Props) => {
  const { categories } = props;

  return (
    <div>
      {categories.map((category: string) => (
        <div key={category}>{category}</div>
      ))}
    </div>
  );
};

export default Category;
