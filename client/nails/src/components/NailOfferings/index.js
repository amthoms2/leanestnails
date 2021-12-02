import React, { useState } from 'react'
import Icon1 from '../../images/nailflower.jpg'
import Icon2 from '../../images/leana.png'
import Icon3 from '../../images/leana.png'
import {NailOfferingsContainer, OfferingsH1, NailOfferingsWrapper, Card, Icon, OfferingsH2, OfferingsP} from './NailOfferingsElements'
import Modal from '../Modal'

const NailOfferings = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <NailOfferingsContainer id='services'>
        <OfferingsH1>Services</OfferingsH1>
          <NailOfferingsWrapper>
            <Card onClick={toggleModal}>
              <Icon src={Icon1}/>
                <OfferingsH2>Manicure</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Card>

            <Card onClick={toggleModal}>
              <Icon src={Icon2}/>
                <OfferingsH2>Pedicure</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </Card>

            <Card onClick={toggleModal}>
              <Icon src={Icon3}/>
                <OfferingsH2>Add On Services</OfferingsH2>
                <OfferingsP>Description of services</OfferingsP>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
            </Card>

          </NailOfferingsWrapper>
      </NailOfferingsContainer>
    </>
  )
}

export default NailOfferings
