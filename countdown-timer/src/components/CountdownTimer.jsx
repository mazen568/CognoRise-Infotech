import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';
import Modal from './Modal';

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(new Date('2024-12-31T23:59:59').toISOString().slice(0, -1));
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showModal, setShowModal] = useState(false);
  const [timeUp, setTimeUp] = useState(false); 

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const timeDiff = target - now;

      if (timeDiff <= 0) {
        if (!timeUp) {
          setTimeUp(true); 
          setShowModal(true);
        }
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate, timeUp]);

  const handleDateChange = (event) => {
    setTargetDate(event.target.value);
    setShowModal(false); 
    setTimeUp(false); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="countdown-timer">
      <input 
        type="datetime-local" 
        onChange={handleDateChange} 
        value={targetDate}
      />
      <div className="timer">
        <div className="time-unit">
          <span>{remainingTime.days}</span>
          <label>Days</label>
        </div>
        <div className="time-unit">
          <span>{remainingTime.hours}</span>
          <label>Hours</label>
        </div>
        <div className="time-unit">
          <span>{remainingTime.minutes}</span>
          <label>Minutes</label>
        </div>
        <div className="time-unit">
          <span>{remainingTime.seconds}</span>
          <label>Seconds</label>
        </div>
      </div>
      {showModal && (
        <Modal 
          message="Time is up!" 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default CountdownTimer;
