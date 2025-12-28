import React from 'react'
import Modal from './Modal';
import { use } from 'react';
import { MatchContext } from '../context/match-context';

const ResultModal = () => {

  const { results, toggleResults } = use(MatchContext);

  return (
    <Modal className="bg-linear-15 from-yellow-300 via-yellow-400 to-black rounded-lg p-8 max-w-md mx-4 flex flex-col border-4">
      <ul className="flex flex-row">
        {results.map((result) => {
          if (result.total === 0) return null;
          return (
            <li key={`${result.type}-results`} className="p-4 text-center">
              <h2 className="text-xl font-bold uppercase">{result.type}</h2>
              <p className="text-lg">{result.correct} / {result.total}</p>
            </li>
          );
        })}
      </ul>
      <button className="mt-4 px-4 py-2 bg-black text-yellow-500 rounded cursor-pointer self-center" onClick={toggleResults}>Close</button>
    </Modal>
  )
}

export default ResultModal
