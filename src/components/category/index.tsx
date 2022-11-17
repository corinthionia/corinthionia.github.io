import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyLinkProps, CategoryListProps } from 'types/category';

const Category = ({ selectedCategory, categoryList }: CategoryListProps) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 768px;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const CategoryBtn = ({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
);

const CategoryItem = styled(CategoryBtn)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default Category;
