import React, { useState, useEffect} from 'react';
import Header from '../shared/ui/Header';
import PostsList from '../widgets/posts/ui/PostsList';
import Modal from '../features/subscribe/ui/Modal';
import Hero from '../widgets/hero/ui/Hero';

const postData = [
  {
    title: 'Мой первый пост',
    text: 'Это начало моего блога...',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
  {
    title: 'Второй пост',
    text: 'Поделюсь мыслями о неделе...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title: 'Третий пост',
    text: 'Расскажу о книге...',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  },
];

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
 <div
  className="
    min-h-screen
    bg-gradient-to-br
    from-slate-50 via-blue-50 to-indigo-100
    dark:from-gray-900 dark:via-slate-900 dark:to-black
  "
>

    <Header isDark={isDark} setIsDark={setIsDark} />

    <Hero />
    <main className="pt-10">
      <PostsList posts={postData} />

      <div className="flex justify-center mb-10">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Подписаться
        </button>
      </div>
    </main>

    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
  </div>
);

};
export default App;