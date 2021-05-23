import React from 'react';
import { PhonesServiceConsumer } from '../contexts/phones-service-context';


const withPhonesService = (Wrapped) => {
  return (props) => {
    return (
      <PhonesServiceConsumer>
        {
          (phonesService) => {
            return <Wrapped {...props} phonesService={phonesService} />
          }
        }
      </PhonesServiceConsumer>
    )
  }
}

export default withPhonesService;