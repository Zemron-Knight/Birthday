import { useState } from 'react';
import { CakeScene } from './components/CakeScene';
import { RevealSequence } from './components/RevealSequence';
import { MessageScreen } from './components/MessageScreen';

export default function App() {
  const [stage, setStage] = useState<'cake' | 'reveal' | 'message'>('cake');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
      {stage === 'cake' && (
        <CakeScene onCandlesBlown={() => setStage('reveal')} />
      )}
      {stage === 'reveal' && (
        <RevealSequence onComplete={() => setStage('message')} />
      )}
      {stage === 'message' && (
        <MessageScreen />
      )}
    </div>
  );
}
