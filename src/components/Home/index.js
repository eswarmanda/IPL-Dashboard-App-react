import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    console.log(teamData.teams)
    const formattedTeamsData = teamData.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: formattedTeamsData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="main-ui-card">
        <div className="main-title">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="black" height={50} width={50} />
          </div>
        ) : (
          <div className="ul-card">
            {teamsData.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default Home
