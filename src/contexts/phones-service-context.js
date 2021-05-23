import React from 'react';


const {
    Provider: PhonesServiceProvider,
    Consumer: PhonesServiceConsumer
} = React.createContext();

export {
    PhonesServiceConsumer,
    PhonesServiceProvider
}