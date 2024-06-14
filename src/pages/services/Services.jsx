import { useEffect, useState } from "react";
import { getContent } from "../../services/contentful/contentfulService";

import Header from "../../components/Header";
import Card from "../../UI/Card";
import HeaderImage from "../../images/projects_header_image.jpg";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import Image from "../../images/gallery7.jpg";

import './services.css';


const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    getContent("services").then((response) => {
      setServices(response);
    })
  }, [])

  const sortedServices = services.sort((a, b) => (a.serviceNumber > b.serviceNumber ? 1 : -1));

  return (
    <>
      <Header title="Our Services" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, assumenda harum accusantium omnis amet asperiores aspernatur iusto.
      </Header>
      <section className="services">
        <div className="container services__container">
          {
            sortedServices.slice(1, sortedServices.length).map(({ serviceNumber, serviceTitle, serviceDescription }) => {
              return (<Card className="services__card" key={serviceNumber}>
                <div className="services__card-body">
                  <button className="services__card-btn"><HiArrowCircleLeft /></button>
                  <img src={Image} alt="" />
                  <button className="services__card-btn"><HiArrowCircleRight /></button>
                </div>
                <div className="services__card-header">
                  <h1>{serviceTitle}</h1>
                </div>
                <div className="services__card-footer">
                  <p>{serviceDescription}</p>
                  <button className="btn lg">Get In Touch</button>
                </div>
              </Card>)
            })
          }
        </div>
      </section>
    </>
  );
};
export default Services