import React, { useEffect, useRef } from 'react'
import Modal from './Modal';
import { use } from 'react';
import { MatchContext } from '../context/match-context';

const ResultModal = () => {
  const { results, isResultsShown } = use(MatchContext);
  const dialog = useRef();

  useEffect(() => {
    if (isResultsShown) {
      dialog.current.open();
      console.log(results);
    } else {
      dialog.current.close();
    }
  }, [isResultsShown]);

  return (
    <Modal ref={dialog}>
      <ul>
        {results.length > 0 && results.map((result) => (
          <li key={result.type} className="mb-4">
            <h3 className="text-xl font-bold mb-2 capitalize">{result.type} Result</h3>
            <p>Correct: {result.correct} / {result.total}</p>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default ResultModal
