import React from 'react'

import { Container, Item, Title } from './style'

interface IListProps {
  title: string,
  elements: React.ReactNode[],
}

const List: React.FC<IListProps> = ( { title, elements } ) => {
  return (
    <Container>
      <Item>
        <Title>{ title }</Title>
      </Item>

      { elements.map( ( element, index ) => (
        <Item key={ index }>{ element }</Item>
      ) ) }
    </Container>
  )
}

export default List
