import { Component, createEffect, createSignal, onCleanup } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const counter = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(counter));

  createEffect(() => {
    console.log(`current count is ${count()}`);
  }, count())

  return (
    <div class={styles.App}>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
