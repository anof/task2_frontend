import React from 'react';
import './upper.css';
import Upper from './upper';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'


const query = gql`
{
  allArtist {
    name
  }
}
`;



class Artists extends React.Component {
    render() {
      
      return (

        <div>
        <Query query={query}>
          {
            
            (result)=>{
              if ( result.loading ) {
                return <div>loading...</div>
              }
              else
              {
              return <Upper result={result.data.allArtist} />
              }
            }
          }
          </Query>
        </div>
        

      );
    }
  }


export default Artists