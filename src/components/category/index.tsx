interface Props {
  categories: string[];
}

function Category({ categories }: Props) {
  return (
    <div>
      {categories.map((category: string) => (
        <div key={category}>{category}</div>
      ))}
    </div>
  );
}

export default Category;
