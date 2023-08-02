import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    matchDetails: '',
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    // https://apis.ccbp.in/ipl/${id}
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchDetailsData = await response.json()
    console.log(matchDetailsData)
    const latestMatchDetails = {
      competingTeam: matchDetailsData.latest_match_details.competing_team,
      competingTeamLogo:
        matchDetailsData.latest_match_details.competing_team_logo,
      date: matchDetailsData.latest_match_details.date,
      firstInnings: matchDetailsData.latest_match_details.first_innings,
      manOfTheMatch: matchDetailsData.latest_match_details.man_of_the_match,
      result: matchDetailsData.latest_match_details.result,
      umpires: matchDetailsData.latest_match_details.umpires,
      secondInnings: matchDetailsData.latest_match_details.second_innings,
      id: matchDetailsData.latest_match_details.id,
      teamBannerUrl: matchDetailsData.team_banner_url,
      venue: matchDetailsData.latest_match_details.venue,
    }

    console.log(latestMatchDetails)
    const recentMatchesList = matchDetailsData.recent_matches.map(
      eachMatch => ({
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        result: eachMatch.result,
        status: eachMatch.match_status,
        id: eachMatch.id,
      }),
    )
    this.setState({
      matchDetails: latestMatchDetails,
      recentMatches: recentMatchesList,
      isLoading: false,
    })
  }

  render() {
    const {matchDetails, recentMatches, isLoading} = this.state
    return (
      <div className="team-match-card">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div>
              <img
                className="banner-card"
                src={matchDetails.teamBannerUrl}
                alt="team banner"
              />
            </div>
            <div>
              <LatestMatch matchDetails={matchDetails} />
            </div>
            <div className="recent-match-card">
              {recentMatches.map(eachMatch => (
                <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
