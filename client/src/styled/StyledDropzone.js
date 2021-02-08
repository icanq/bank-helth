import styled from 'styled-components'

const StyledDropzone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: gray;
  outline: none;
  transition: border .24s ease-in-out;
  box-shadow: 1px 1px 0px #999,
              2px 2px 0px #999,
              3px 3px 0px #999,
              4px 4px 0px #999,
              5px 5px 0px #999,
              6px 6px 0px #999;
  transform: translate(-6px, -6px);
  :hover {
    box-shadow: none;
    transform: translate(0, 0)
  }
`;

export default StyledDropzone