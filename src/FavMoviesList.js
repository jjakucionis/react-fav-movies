import React from 'react';

class FavMoviesList extends React.Component {
  render() {
    const profiles = this.props.profiles;
    const users = this.props.users;
    const movies = this.props.movies;
    const favArray = [];
    
    profiles.forEach(profile => {
    	favArray.push([
          users[profile.userID].name,
          movies[profile.favoriteMovieID].name
        ])
    })
    
  	return (
      <ol>
      	{favArray.map(item => (
         	<li key={item[0]}>
      			{`${item[0]}'s favorite movie is ${item[1]}.`}
         	</li>
         ))}
      </ol>
    )
  }
}

export default FavMoviesList