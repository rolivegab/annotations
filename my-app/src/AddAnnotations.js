import gql from 'graphql-tag';
import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
//import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';

const GET_CATEGORYS = gql`
      query{
        category
        {
          id
          name
        }
      }
`

const ADD_ANNOTATIONS = gql`
      mutation postMutation($title: String!, $content: String!, $category_id: uuid!){
        insert_annotation(objects: {
          title: $title
          content: $content
          category_id: $category_id
        })
        {
          affected_rows
        }
      }
`


class AddAnnotations extends Component {
    state = {
        title: '',
        content: '',
        category: '',
    }

    render() {
        const { title, content, category } = this.state

        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="Digite o título da anotação"
                    />
                    <input
                        className="mb2"
                        value={content}
                        onChange={e => this.setState({ content: e.target.value })}
                        type="text"
                        placeholder="Digite a anotação"
                    />
                    <Query query={GET_CATEGORYS}>
                        {({ loading, error, data }) => {
                            if (loading) return <div>Fetching</div>
                            if (error) return <div>Error</div>

                            const categorytoRender = data.category

                            return (
                                <div>
                                    <select className="mb2" value={this.state.category} onChange={e => this.setState({ category: e.target.value })}>
                                        {categorytoRender.map(i => (

                                            <option value={i.id}>{i.name}</option>

                                        ))}
                                    </select>
                                </div>
                            )
                        }}
                    </Query>



                </div>
                <Mutation mutation={ADD_ANNOTATIONS} variables={{ title, content, category_id: category }}>
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export default AddAnnotations