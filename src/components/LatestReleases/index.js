import { books } from './dataReleases'
import book from  '../../images/livro2.png'
import { Title } from '../Title'
import AdviceCard from '../AdviceCard'
import styled from 'styled-components'

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
  return (
    <LatestReleasesContainer>
      <Title color="#EB9B00" fontSize="36px">Últimos Lançamentos</Title>
      <NewBooksContainer>
        {books.map(  book => (
          <img src={book.src} alt='Livro'/>
        ) ) }
      </NewBooksContainer>
      <AdviceCard 
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada"
        img={book}
      />
    </LatestReleasesContainer>
  )
}

export default LatestReleases