import React from 'react';
import Button from '../../../shared/ui/Button/Button';

interface HeroProps {
  onSubscribe: () => void;
}

const Hero: React.FC<HeroProps> = ({onSubscribe}) => {
  const scrollToPosts = () => {
    document.getElementById('posts')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Мысли, заметки и идеи  
          <span className="block text-blue-600 dark:text-blue-400">
            o разработке и жизни
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          Личный блог о технологиях, архитектуре, обучении и пути разработчика.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Читать блог</Button>
          <Button variant="secondary" onClick={onSubscribe}>Подписаться</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
