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
    } else {
      dialog.current.close();
    }
  }, [isResultsShown]);

  return (
    <Modal ref={dialog}>
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <ul className="flex flex-row justify-between">
          {results.length > 0 && results.map((result) => {
              if (result.total === 0) return null;
              return (
                <li key={result.type} className="mb-4 text-center">
                  <h3 className="text-xl font-bold mb-2 capitalize">{result.type}</h3>
                  <p>{result.correct} / {result.total}</p>
                </li>
              );
          })}
        </ul>
        <button
          onClick={() => dialog.current.close()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </Modal>
  )
}

export default ResultModal
