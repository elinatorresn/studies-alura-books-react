import Input from '../Input';
import styled from 'styled-components'
import { useState } from 'react';
import { books } from './dataSearch'

const SearchSection = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const BookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
      width: 200px;
    }
    img {
      width: 180px;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover img {
        transform: scale(1.1);
    }
`

function Search() {
  const [researchedBooks, setResearchedBooks] = useState([])

  return(
    <SearchSection>
      <Title>Já sabe por onde começar?</Title>
      <SubTitle>Encontre seu livro em nossa estante</SubTitle>
      <Input
        type="text" placeholder='Informe sua próxima leitura'
        onBlur={event => {
          const typedText = event.target.value
          const searchResult = books.filter(book => book.name.includes(typedText))
          setResearchedBooks(searchResult)
        }}
      />
      <BookContainer>
        { researchedBooks.map(  book => (
          <Resultado>
            <p>{book.name}</p>
            <img src={book.src}/>
          </Resultado>
        ) ) }
      </BookContainer>
    </SearchSection>
    
  )
}

export default Search;