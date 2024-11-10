import React from 'react'
import Search from './Search'
import ContentCard from './ContentCard'
import { useLocation } from 'react-router-dom';

const Content = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const movieVal = params.get('movieVal');
    const filterType = params.get('filterType');
    const filterVal = params.get('filterVal');
  return (
    <div>
        <Search  moviename={movieVal} Category={filterType} filtername={filterVal} />
        <ContentCard  movieVal={movieVal} filterType={filterType} filterVal={filterVal} />
    </div>
  )
}

export default Content