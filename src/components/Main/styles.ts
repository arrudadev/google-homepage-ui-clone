import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 56px 8px 0;

  > img {
    height: 92px;
  }

  > input {
    width: 100%;
    max-width: 582px;
    height: 44px;

    margin-top: 18px;
    padding: 7px 10px 6px 20px;

    border-radius: 25px;
    border: 1px solid #dadce0;

    font-size: 18px;

    color: rgba(0, 0, 0, 0.87);
    background: transparent;

    outline: 0;
  }
`;

export const OtherLanguageContent = styled.div`
  display: flex;

  margin-top: 24px;
  padding: 6px 12px;

  font-size: 13px;
`;

export const English = styled.span`
  text-decoration: none;
  color: #1967d2;

  margin-left: 5px;
`;
