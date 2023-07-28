import { Navigation } from './components/Navigation'
import { Front } from './components/Front'
import { Cardwheel } from './components/Cardwheel'
import { Footer } from './components/Footer'
import * as React from 'react'


export function Portfolio() {
    return (
        <> 
        <Navigation /> 
        <Front />
        <Cardwheel />
        <Footer />
        </>
    )
  }