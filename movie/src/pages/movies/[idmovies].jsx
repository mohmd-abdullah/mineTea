
function Movie({ idmovies }) {
    console.log(idmovies)
    
    return( 
       
      <div class="card mb-3" style={{maxwidth: "540px"}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${idmovies.poster_path}`} class="img-fluid rounded-start" alt="Actor Picture"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">{idmovies.title}</h1>
            <br></br>
            <p class="card-text"><strong>Release date: </strong>{idmovies.release_date}</p>
            <p class="card-text"><strong>Runtime: </strong>   {idmovies.runtime} minutes</p>
            <p class="card-text"><strong>Language: </strong> English</p>
            <p class="card-text"><strong>Rating: </strong>{idmovies.vote_average}</p>
            <p class="card-text"><strong>Director's name: </strong>{idmovies.vote_average}</p>
            <p class="card-text"><h3>Overview: </h3>{idmovies.overview}</p>

          </div>
        </div>
      </div>
    </div>
    
    )
  }
  export default Movie
  

  
  export async function getStaticPaths() {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
    },
   })
    const data = await res.json()
  
    const paths = data.results.map((idmovies) => ({
      params: { idmovies: idmovies.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    console.log(params.idmovies)
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.idmovies}?language=en-US`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdhZTMzZTUyM2I1N2RhZmY5OTc5NmFhMTBmNzg5YSIsInN1YiI6IjY1NjRiY2Q3MzY3OWExMDk3ODc0ZTM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YpvhgHOtl4TQ6XTUXsQ6J1XfT0FDqiiZHmEQv6angK0'
    },
   })
    const idmovies = await res.json()
  
    return { props: { idmovies } }
  }
  
  
  