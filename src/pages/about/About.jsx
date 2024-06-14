import { useEffect, useState } from "react";

import Header from "../../components/Header";
import { getContent } from "../../services/contentful/contentfulService";

import "./about.css";

const About = () => {
  const [posts, setPosts] = useState([]);
  const sortedPosts = posts.sort((a, b) => (a.orderId > b.orderId ? 1 : -1));

  useEffect(() => {
    getContent("about").then((response) => {
      console.log(response);
      setPosts(response);
      console.log(posts[0]?.test);
    });
  }, []);

  return (
    <>
      <Header title="Work is Worship" image={sortedPosts[0]?.image?.fields?.file?.url}></Header>

      {sortedPosts.map(({ orderId, title, description, image }) => {
        if (orderId % 2 === 1) {
          return (
            <section key={orderId} className="about__story">
              <div className="container about__story-container">
                <div className="about__section-image">
                  <img src={image?.fields?.file?.url} alt={title} />
                </div>
                <div className="about__section-content">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            </section>
          );
        } else {
          return (
            <section className="about__vision">
              <div className="container about__vision-container">
                <div className="about__section-content">
                  <h1>{title}</h1>
                  <p>{description} </p>
                </div>
                <div className="about__section-image">
                  <img src={image?.fields?.file?.url} alt={title} />
                </div>
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default About;
