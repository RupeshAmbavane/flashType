import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer = ({
    selectedParagraph,
    onInputChange,
    words,
    characters,
    wpm,
    testInfo,
    timerStarted,
    timeRemaining,
    startAgain
}) => {
   
    return (
        <div className="test-container">
            {/* Show the try again or start screen */}
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer
                        selectedParagraph={selectedParagraph}
                        onInputChange={onInputChange}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        testInfo={testInfo}
                    />
                </div>
            ) : (
                <div className="try-again-cont">
                    <TryAgain
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        startAgain={startAgain}
                        
                    />
                </div>
            )}
        </div>
    );
};

export default TestContainer;