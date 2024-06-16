
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ResultPage = () => {
  const location = useLocation();
  const { questions } = location.state || { questions: [] }; // Provide default value to handle undefined

  if (!questions || questions.length === 0) {
    return <p>No questions to display.</p>;
  }

  const correctAnswers = questions.filter(q => q.correct).length;

  return (
    <Container>
      <Row className="my-3">
        <Col className='text-center mt-5'>
          <h2>Results</h2>
          <p>You answered {correctAnswers} out of {questions.length} questions correctly.</p>
          <Button variant="primary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultPage;
