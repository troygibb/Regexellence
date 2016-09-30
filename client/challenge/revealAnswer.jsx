import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { toggleAnswer } from '../actions/index.jsx';

class RevealAnswer extends React.Component {
  constructor(props) {
      super(props);
      this.revealTutorialAnswer = this.revealTutorialAnswer.bind(this);
  }
  revealTutorialAnswer() {
      this.props.toggleAnswer(this.props.challengeId, this.props.challengeType)
  }
  render() {
    if (this.props.challengeType === 'challenge') {
      const { answers, testPassed } = this.props.challengeInfo; 
      if (testPassed) {
        return (
            <div>
              Previous Answers: 
              {answers.map((answer) => {
                return <span key={uuid.v4()}>{answer.answer} </span>
              })}
            </div>
        )
      } 
    } else if (this.props.challengeType === 'tutorial') {
        if (this.props.revealAnswer) {
            const { explanation, answer } = this.props.answers;
            return (
                <div className="reveal">
                    <span>{answer}</span>
                    <span>{explanation}</span>
                </div>
            )
        } else {
            return <button className="reveal-btn" onClick={this.revealTutorialAnswer}>Reveal Answer</button>
        }
    }
    return false; 
  }
}

export default connect(null, { toggleAnswer })(RevealAnswer)

// RevealAnswer.propTypes = {

// }
