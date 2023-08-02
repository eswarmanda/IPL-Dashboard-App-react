import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    umpires,
    secondInnings,
    venue,
  } = matchDetails
  return (
    <li className="latest-match-details">
      <div className="left-match-details">
        <p1>{competingTeam}</p1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="logo-card">
        <img
          className="team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="right-match-details">
        <p1>First Innings</p1>
        <p>{firstInnings}</p>
        <p1>Second Innings</p1>
        <p>{secondInnings}</p>
        <p1>Man of the Match</p1>
        <p>{manOfTheMatch}</p>
        <p1>Umpires</p1>
        <p>{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
