import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  onInputChange,
  words,
  characters,
  wpm,
  testInfo,
  timerStarted,
  timeRemaining,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* Characters Typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* wpm */}
        <ChallengeDetailsCard cardName="Wpm" cardValue={wpm} />

      </div>

      {/* The Real Challenge */}
      <div className="typewriter-container">
        <TypingChallenge 
        timerStarted={timerStarted}
        timeRemaining={timeRemaining}
        selectedParagraph={selectedParagraph}
        testInfo={testInfo}
        onInputChange={onInputChange}
         />
       
      </div>
    </div>
  )
}

export default TypingChallengeContainer