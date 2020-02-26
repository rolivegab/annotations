import gql from 'graphql-tag';
//import {useQuery} from '@apollo/react-hooks';
import React, { Component } from 'react'
import { Query } from 'react-apollo'

const GET_ANNOTATIONS = gql`
query{
    annotation
    {
      content
      title
      category {
        name
      }
    }
  }
`

class SeeAnnotations extends Component{
    render(){
        return(
            <div>
                <Query query={GET_ANNOTATIONS}>
                        {({ loading, error, data }: any) => {
                            if (loading) return <div>Fetching</div>
                            if (error) return <div>Error</div>

                            const annotationtoRender = data.annotation

                            
                            return (
                                <div>
                                        {annotationtoRender.map((i: any) => (
                                    <p>
                                        {i.title}
                                        {i.content}
                                        {i.category.name}
                                    </p>
                                        ))}
                                </div>
                            )
                        }}
                    </Query>
            </div>
        )
    }
}

export default SeeAnnotations