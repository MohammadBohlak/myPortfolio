// src/components/project/ProjectFilter.js
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  gap: 15px;
`;

const FilterButton = styled.button`
  padding: 10px 25px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 50px;
  color: var(--text);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--gradient);
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before,
  &.active::before {
    width: 100%;
  }

  &:hover,
  &.active {
    color: var(--highlight);
  }
`;

export const ProjectFilter = ({ filter, setFilter }) => {
  const filters = [
    { id: "all", label: "All" },
    { id: "react", label: "React.js" },
    { id: "html-css-js", label: "HTML & CSS & JS" },
  ];

  return (
    <FilterContainer>
      {filters.map((f) => (
        <FilterButton
          key={f.id}
          className={filter === f.id ? "active" : ""}
          onClick={() => setFilter(f.id)}
        >
          {f.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};
