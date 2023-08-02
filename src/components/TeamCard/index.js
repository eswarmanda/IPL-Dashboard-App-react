import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <img className="logo-img" src={teamImageUrl} alt={name} />
      <h2 className="team-name">{name}</h2>
    </Link>
  )
}
export default TeamCard
