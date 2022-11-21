import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
  align-items: center;

  width: 700px;
  height: 50px;

  padding: 0 20px;
  margin-top: 32px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  background: #e3eedf;
  border-left: 4px solid #bedeb2;
  border-right: 4px solid #bedeb2;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const CategoryBtn = ({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
);

const CategoryItem = styled(CategoryBtn)`
  padding: 6px 12px;
  border-radius: 12px;
  margin-right: 14px;

  font-size: 14px;

  background: #ffffff;
  ${({ active }) =>
    active
      ? css`
          color: #3e433b;
          font-weight: 600;
          border: 2px solid #acc79e;
        `
      : css`
          color: #6d746b;
          font-weight: 400;
          border: none;
        `}

  cursor: pointer;
`;

export default Category;
