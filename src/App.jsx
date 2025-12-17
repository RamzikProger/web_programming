import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import PostsList from './components/Posts/PostsList';
import Modal from './components/Modal';

const postData = [
  { title: "Мой первый пост", text: "Это начало моего блога..." },
  { title: "Второй пост", text: "Поделюсь мыслями о неделе..." },
  { title: "Третий пост", text: "Расскажу о книге..." }
];

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <PostsList posts={postData} />

      <button
        className="subscribe-btn container"
        onClick={() => setModalOpen(true)}
      >
        Подписаться
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
export default App;