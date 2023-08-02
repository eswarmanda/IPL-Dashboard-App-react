import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competingTeam, competingTeamLogo, result, status} = recentMatchDetails
  return (
    <li className="match-card">
      <img
        className="img-logo-card"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="status">{status}</p>
    </li>
  )
}
export default MatchCard
