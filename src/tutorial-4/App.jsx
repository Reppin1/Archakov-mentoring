import "./App.css"
import React from "react";
import { Phrase } from "./components/Phrase";
import { EmptyBlock } from "./components/EmptyBlock";

const App = () => {

  const [phrases, setPhrases] = React.useState([])

  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
  ];

  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
  ];


  const generateRandomCode = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const generateRandomPhrase = () => {
    const firstWord = adjectivesArr[generateRandomCode(adjectivesArr.length - 1, 0)]
    const secondWord = adjectivesArr[generateRandomCode(adjectivesArr.length - 1, 0)]
    const thirdWord = nounsArr[generateRandomCode(nounsArr.length - 1, 0)]
    const allWords = `${firstWord} ${secondWord} ${thirdWord}`
    setPhrases((prev) => [allWords, ...prev])
  }

  const clearPhrase = () => {
    setPhrases([])
  }

  return (
    <div className="wrapper">
      {!phrases.length ? <EmptyBlock /> : (
        <div className="list">
          {phrases.map((el, index) => <Phrase key={el + index} phrases={el} />)}
        </div>)}
      <button className="btn btn_generate" onClick={generateRandomPhrase}>Сгенерировать</button>
      <button className="btn btn_clear" onClick={clearPhrase}>Очистить</button>
    </div>
  );
};

export { App };