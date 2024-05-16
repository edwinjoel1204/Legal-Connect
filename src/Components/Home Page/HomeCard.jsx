import React from 'react';
import WeightImage from "../../assets/Homepage Components/Weight.jpg"
import EmotionImage from "../../assets/Homepage Components/EmotionControl.jpg"
import Courses from "../../assets/Homepage Components/Courses.jpeg"
import ChatBot from "../../assets/Homepage Components/ChatBot.jpg"
function HomePage({ title, description, imageUrl }) {
    return (
      <div className="col-md-6 col-lg-3 mb-4">
        <a href="#" className="text-decoration-none">
          <div className="card border-0 rounded-3 shadow" style={{ width: '300px', height: '350px' }}>
            <img src={imageUrl} className="card-img-top rounded-3" style={{ objectFit: 'cover', width: '100%', height: '200px' }} alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }

function HomeCard() {
  return (
    <div className="container py-5">
      <div className="row">
        <HomePage
          title="Weight of the Patient"
          description="Monitor and track the weight with ease."
          imageUrl={WeightImage}
        />
        <HomePage
          title="Emotion Control"
          description="Tools and techniques to help manage emotions effectively."
          imageUrl={EmotionImage}
        />
        <HomePage
          title="Saved Courses"
          description="Access your saved courses and continue learning."
          imageUrl={Courses}
        />
        <HomePage
          title="Chatbot"
          description="Get assistance and answers to your questions instantly."
          imageUrl={ChatBot}
        />
      </div>
    </div>
  );
}

export default HomeCard;
