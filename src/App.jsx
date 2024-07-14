import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
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
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
