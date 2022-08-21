import GameSavingLoaderAsync from './js/GameSavingLoaderAsync';

GameSavingLoaderAsync.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log('error', error.message);
  },
);
