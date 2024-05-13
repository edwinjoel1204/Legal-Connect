import React from 'react';

function HomeCard() {
    return (
        <div align="center">
            <div className="row mt-5 container">
            <div className="col-sm-6 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Weight</h3>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Emotion Control</h3>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Saved Courses</h3>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Chatbot</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomeCard;
