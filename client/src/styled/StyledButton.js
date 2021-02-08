import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  margin: 5px auto;
  padding: 5px 12px;
  color: gray;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.primaryLight};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;
  box-shadow: 1px 1px 0px #999,
              2px 2px 0px #999,
              3px 3px 0px #999;
  transform: translate(-3px, -3px);
  :hover {
    box-shadow: none;
    transform: translate(0, 0)
  }
`

export default StyledButton