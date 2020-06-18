import React from 'react';

class FavMoviesList extends React.Component {
  render() {
    const profiles = this.props.profiles;
    const users = this.props.users;
    const movies = this.props.movies;
    
  	return (
      <ol>
      	{profiles.map(profile => {
         	const user = users[profile.userID].name;
    		const movie = movies[profile.favoriteMovieID].name;
    		return (
         	<li key={profile.id}>
              {`${user}'s favorite movie is ${movie}.`}
         	</li>
			)
  		})}
      </ol>
    )
  }
}

export default FavMoviesList