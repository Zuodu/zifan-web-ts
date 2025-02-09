import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2px 10px -5px black;

  h4 {
    margin-top: ${props => props.theme.space[1]}px;
    margin-bottom: ${props => props.theme.space[3]}px;
  }
  small {
  color: ${props => props.theme.colors.text.light};
  }
`;

export const Content = styled.div`
  color: ${props => props.theme.colors.text.main};
  padding: 1rem 0;
`;

export const Stats = styled.div`
	font-size: ${props => props.theme.fontSizes[0]}px;
  display: flex;
  align-items: center;
	padding-bottom: 1rem;
  div {
    display: flex;

    img {
      margin: 0;
    }

    span {
      color: ${props => props.theme.colors.text.main};
    }
  }
`;
