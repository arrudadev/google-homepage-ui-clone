import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  background: #f2f2f2;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;

  border-top: 1px solid #e4e4e4;
  color: rgba(0, 0, 0, 0.54);

  padding: 10px 12px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;

  color: #5f6368;

  padding: 10px;

  > span {
    margin: 0 10px;

    cursor: pointer;
  }
`;
