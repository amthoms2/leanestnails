import React from 'react'
import Icon1 from '../../images/nailflower.jpg'
import Icon2 from '../../images/leana.png'
import Icon3 from '../../images/leana.png'
import {NailOfferingsContainer, OfferingsH1, NailOfferingsWrapper, Card, Icon, OfferingsH2, OfferingsP} from './NailOfferingsElements'

const NailOfferings = () => {
  return (
    <>
      <NailOfferingsContainer id='services'>
        <OfferingsH1>Services</OfferingsH1>
          <NailOfferingsWrapper>
            <Card>
              <Icon src={Icon1}/>
                <OfferingsH2>Data</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
            </Card>
            <Card>
              <Icon src={Icon2}/>
                <OfferingsH2>Data</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
            </Card>
            <Card>
              <Icon src={Icon3}/>
                <OfferingsH2>Data</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
            </Card>
          </NailOfferingsWrapper>
      </NailOfferingsContainer>
    </>
  )
}

export default NailOfferings
