import React from 'react';
import Header from '../../../widgets/Header/Header';
import Hero from '../../../widgets/hero/ui/Hero';
import PostsList from '../../../widgets/posts/ui/PostsList';

interface HomePageProps {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  onSubscribe: () => void;
}

const posts = [
  {
    title: 'Как я перестал бояться архитектуры',
    text: `Когда я только начинал писать код, архитектура казалась чем-то абстрактным и ненужным.
Я писал компоненты как получится, копировал куски логики и надеялся, что «потом разберусь».
Но чем больше становился проект, тем быстрее он превращался в хаос.

В какой-то момент любое изменение ломало всё вокруг.
И тогда я понял: архитектура — это не про красоту, а про выживание проекта.`,
    image: '/images/post-1.jpg',
  },
  {
    title: 'Почему дизайн — это не про цвета',
    text: `Раньше я думал, что дизайн — это выбрать красивый цвет и шрифт.
Но хороший дизайн — это иерархия, ритм и внимание к деталям.
Это когда взгляд сам понимает, куда смотреть.

Минимальные анимации, отступы, контраст —
всё это работает на ощущение качества, даже если пользователь этого не осознаёт.`,
    image: '/images/post-2.jpg',
  },
  {
    title: 'Мой путь в разработке',
    text: `Я часто сравнивал себя с другими и думал, что у всех получается быстрее.
Но потом понял, что каждый путь уникален.
Ошибки, тупняки, переписывание одного и того же —
это не провал, а процесс.

Важно не скорость, а то, что ты продолжаешь идти дальше.`,
    image: '/images/post-3.jpg',
  },
];

const HomePage: React.FC<HomePageProps> = ({ isDark, setIsDark, onSubscribe }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero onSubscribe={onSubscribe} />
      <PostsList posts={posts} />
    </>
  );
};

export default HomePage;
