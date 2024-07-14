import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Modal />
      <Features />
    </main>
  );
};

export default Sentry.withProfiler(App);
