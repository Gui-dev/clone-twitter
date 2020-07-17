import styled from 'styled-components'

interface IButtonProps {
  outline?: boolean
}

export default styled.button<IButtonProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${( { outline } ) => outline ? 'var(--twitter)' : 'var(--white)'};
  padding: 1.6rem;
  background-color: ${( { outline } ) => outline ? 'transparent' : 'var(--twitter)'};
  border: ${( { outline } ) => outline ? '1px solid var(--twitter)' : 'none'};
  border-radius: 2.5rem;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: ${( { outline } ) => outline
      ? 'var(--twitter-dark-hover)'
      : 'var(--twitter-light-hover)'
    };
  }
`
