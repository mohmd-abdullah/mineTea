
const teams = [
    {
    id:1,
    name:"Baraa Sidair",
    github:"https://github.com/baraab",
    linkedin:""},
    {
        id:2,
        name:"Farah Alsoqi",
        github:"https://github.com/FarahAlsoqi",
        linkedin:"https://jo.linkedin.com/in/farah-alsoqi0"},
        {
            id:3,
            name:"Ammar KolKo",
            github:"https://github.com/Ammar-coder87",
            linkedin:"https://www.linkedin.com/in/ammar-kolko-39755674/"},
]

const Footer = () => {
 return (
    <footer className="footer">
      <p>© 2023 Movie Re:Coded</p>
      <p>Project done by :  Baraa Sidair, Farah Alsoqi, and Ammar KolKo</p>
      <br></br>
      <div>

        {
            teams.map((team) =>(
              <ul key={team.id} className="footerImage">

                <a href={`${team.linkedin}`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png " alt="LinkedIn Logo" width="20" height="20" style={{margin:"5px"}}/>
                    {team.name}
                </a> 

                <a href={`${team.github}`}>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github Logo" width="25" />
                    {team.name}
                </a>
                
              </ul>
            ))
        }
      </div>
      <br></br>
    </footer>
 );
};

export default Footer;