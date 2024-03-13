import Link from 'next/link'
import React from 'react'

export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
  },
 })
  const data = await res.json()
  return { props: { actors: data.results } }
}

function Actors({ actors }) {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <br></br>
        <br></br>
        <ul class="row row-cols-1 row-cols-md-4 g-4"> 
          {actors.map((actor) => (
            
            <Link href={`/actors/${actor.id}`} key={actor.id} >
                <div class="card" style={{width: "18rem", display:"flex"}}>
                  <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} class="card-img-top" alt="Actor Picture"/>
                  <div class="card-body">
                    <h5>{actor.name}</h5>
                  </div>
                </div>
            </Link>
          ))}
        </ul>
        <br></br>
      </div>
    </div>
  )
}

export default Actors



