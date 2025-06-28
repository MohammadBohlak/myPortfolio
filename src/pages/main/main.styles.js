import styled from "styled-components";

export const Section = styled.section`
  margin-top: 30px;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
`;

export const FilterBtn = styled.button`
  background: ${({ $active, theme }) =>
    $active ? theme.color : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.background : theme.subTitle};
  border: 2px solid ${({ theme }) => theme.line};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: scale 0.3s, background-color 0.3s;
  &:hover {
    scale: 1.05;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  &:hover {
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 1px 0 10px ${({ theme }) => theme.shadowProject};
  &:hover img {
    transform: scale(1.1);
  }
  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.4s;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 15px;
  opacity: 0;
  transform: translateY(100%);
  transition: transform 0.3s;
`;

export const Desc = styled.p`
  font-size: var(--small-text);
  margin-bottom: 0.5rem;
`;

export const IconRow = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: var(--small-text);
  transition: color 0.3s, scale 0.3s;
  &:hover {
    color: #00e5ff;
    scale: 1.1;
  }
`;

export const CardFooter = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: var(--small-text);
  h3 {
    color: ${({ theme }) => theme.color};
  }
  small {
    color: ${({ theme }) => theme.subTitle};
  }
`;
