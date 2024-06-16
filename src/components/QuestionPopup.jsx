import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const QuestionPopup = ({ show, handleClose, questions, currentQuestionIndex, goToQuestion }) => {
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Questions Overview</Modal.Title>
      </Modal.Header>
      <div className=" text-black d-flex justify-content-around flex-wrap  ">
        {questions.map((question, index) => (
          <div className='d-flex bg-secondary text-white btn m-1' key={index} onClick={() => goToQuestion(index)} style={{ cursor: 'pointer' }}>
            <span className='d-flex'>{index + 1}</span>
            <span className={`${question.answered} ? 'bg-success' : 'bg-secondary'`}></span>
            <span className=' mx-1'>{index === currentQuestionIndex && 'Current'}</span>
          </div>
        ))}
      </div>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionPopup;
