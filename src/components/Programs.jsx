import { useState, useEffect } from 'react';
import { getContent } from "../services/contentful/contentfulService";

import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import { SiOpenaigym } from 'react-icons/si';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const Programs = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    getContent("services").then((response) => {
      setServices(response);
    })
  }, [])

  const sortedServices = services.sort((a, b) => (a.serviceNumber > b.serviceNumber ? 1 : -1));

  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title={sortedServices[0]?.serviceMainTitle} />

        <div className="programs__wrapper">
          {
            sortedServices.slice(1, 4).map(({ serviceNumber, serviceTitle, serviceDescription }) => {
              return (
                <Card className="programs__program" key={serviceNumber}>
                  <span><SiOpenaigym /></span>
                  <h4>{serviceTitle}</h4>
                  <small className='card__desc'>{serviceDescription}</small>
                  <Link to="/services" className='btn sm'>Learn More <AiFillCaretRight /></Link>
                </Card>
              )
            })
          }
        </div>
        <div className="programs__button_div">
          <Link to="/services" className='btn lg'>All Services <BsArrowRightSquareFill /></Link>
        </div>
      </div>
    </section>
  )
}

export default Programs