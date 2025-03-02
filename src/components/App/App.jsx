import React, { useState, useEffect } from "react";
import "./App.css";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraphs";
import Nav from "../Nav/Nav.jsx";
import Landing from "../Landing/Landing.jsx";
import ChallengeSection from "../ChallengeSection/ChallengeSection.jsx";
import Footer from "../Footer/Footer.jsx";

const totalTime = 60; 

const DefaultState = {
  selectedParagraph: "Hello World",
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

const App = () => {
  const [state, setState] = useState(DefaultState);
  const [intervalId, setIntervalId] = useState(null);

  // Function to fetch a new paragraph from SAMPLE_PARAGRAPHS
  const fetchNewParagraphFallback = () => {
    const randomParagraph =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const testInfoArray = randomParagraph.split("").map((letter) => ({
      testLetter: letter,
      status: "notAttempted",
    }));

    setState((prevState) => ({
      ...prevState,
      selectedParagraph: randomParagraph,
      testInfo: testInfoArray,
    }));
  };

  const startTimer = () => {
    if (!state.timerStarted) {
      setState((prevState) => ({ ...prevState, timerStarted: true }));

      const timer = setInterval(() => {
        setState((prevState) => {
          if (prevState.timeRemaining > 0) {
            const timeSpent = totalTime - prevState.timeRemaining;
            const wpm = timeSpent > 0 ? (prevState.words / timeSpent) * totalTime : 0;

            return {
              ...prevState,
              timeRemaining: prevState.timeRemaining - 1,
              wpm: Math.round(wpm),
            };
          } else {
            clearInterval(timer);
            return { ...prevState, timerStarted: false };
          }
        });
      }, 1000);

      setIntervalId(timer);
    }
  };

  const startAgain = () => {
    clearInterval(intervalId);
    fetchNewParagraphFallback(); // Get a new paragraph on restart
    setState((prevState) => ({
      ...DefaultState,
      selectedParagraph: prevState.selectedParagraph,
      testInfo: prevState.testInfo.map((letter) => ({ ...letter, status: "notAttempted" })),
    }));
  };

  const handleUserInput = (inputValue) => {
    if (!state.timerStarted) startTimer();

    const characters = inputValue.length;
    const words = inputValue.trim().split(/\s+/).length;
    const index = characters - 1;

    setState((prevState) => {
      let testInfo = [...prevState.testInfo];

      if (index < 0) {
        testInfo[0].status = "notAttempted";
        return { ...prevState, testInfo, characters, words };
      }

      if (index >= prevState.selectedParagraph.length) {
        return { ...prevState, characters, words };
      }

      if (index < testInfo.length - 1 && index >= 0) {
        testInfo[index + 1].status = "notAttempted";
      }

      testInfo[index].status = inputValue[index] === testInfo[index].testLetter ? "correct" : "incorrect";

      return { ...prevState, testInfo, characters, words };
    });
  };

  useEffect(() => {
    fetchNewParagraphFallback(); // Fetch a paragraph when the component loads
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="app">
      <Nav />
      <Landing />
      <ChallengeSection
        selectedParagraph={state.selectedParagraph} 
        words={state.words}
        characters={state.characters}
        wpm={state.wpm}
        timeRemaining={state.timeRemaining}
        timerStarted={state.timerStarted}
        testInfo={state.testInfo}
        onInputChange={handleUserInput}
        startAgain={startAgain}
      />
      <Footer />
    </div>
  );
};

export default App;
