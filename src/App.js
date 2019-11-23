import React, {useState, useEffect} from 'react';
import gql from 'graphql-tag';
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';
import AddAnnotations from './AddAnnotations';
import SeeAnnotations from './SeeAnnotations';


const App = () =>{

  /*const annotations = useQuery(GET_ANNOTATIONS)
  const [addAnnotation] = useMutation(ADD_ANNOTATIONS)
  

  useEffect(() =>{
    addAnnotation({
      variables: {
        title: '',
        content: '',
        category_id: ''
      }
    }).then(resposta => {
      console.log('deu certo')
    }).catch(erro =>
      {
        console.log(erro)
      })
  }, [])

  if(annotations.loading){
    return 'Carregando...'
  }*/


  return (
    <SeeAnnotations/>
  );
}


export default App;
