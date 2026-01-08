import React, { useEffect, useState } from 'react';
import HomePage from '../pages/home/ui/HomePage';
import Modal from '../features/subscribe/ui/Modal';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
      <HomePage
        isDark={isDark}
        setIsDark={setIsDark}
        onSubscribe={() => setSubscribeOpen(true)}
      />
      <Modal
        isOpen={isSubscribeOpen}
        onClose={() => setSubscribeOpen(false)}
      />
    </>
  );
};

export default App;