import { motion } from 'framer-motion';
import Comment from '../components/Comment.jsx';

const ArticlePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-4xl mx-auto" // Centered content
    >
      <h1 className="text-4xl font-bold text-gray-800">Lost cat found the way back to her home</h1> {/* Exact title */}
      <p className="text-gray-600 text-lg">
        A cat named Mittens has made national headlines after she managed to find her way back home, despite being lost for over a week. Mittens, a three-year-old tabby, went missing on July 4th after she escaped through an open window at her owner's home.
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500"> {/* Byline with social icons */}
        <span>TOM JERRY 13 June 2023</span>
        <div className="flex space-x-2">
          <span>🐦</span>
          <span>📘</span>
          <span>🅾️</span>
        </div>
      </div>
      <div className="bg-gray-300 h-48 w-full" /> {/* Main image placeholder */}
      <p className="text-gray-700">
        Despite a frantic search by her owner, Jane Smith, Mittens was nowhere to be found. Smith put up flyers around the neighborhood and posted on social media, hoping someone would spot her beloved pet.
      </p>
      <p className="text-gray-700">
        Days turned into a week, and Smith had all but given up hope of ever seeing Mittens again. But then, to her surprise, she received a call from a neighbor who had spotted the cat on their porch. Smith rushed over and was overjoyed to find Mittens safe and sound.
      </p>
      <p className="text-gray-700">
        It's still unclear how Mittens managed to find her way home after being lost for so long. Some speculate that she may have followed the scent of her owner or other cats, while others believe she simply had a strong homing instinct.
      </p>
      <p className="text-gray-700">
        Regardless of how she did it, Mittens' incredible journey has captured the hearts of animal lovers across the country. Smith says she's grateful to have her furry friend back home, and plans to keep a closer eye on her in the future.
      </p>
      <div className="grid grid-cols-2 gap-4"> {/* Two side images */}
        <div className="bg-gray-300 h-32" />
        <div className="bg-gray-300 h-32" />
      </div>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>
        <Comment text="Oh I love happy endings!" />
        <Comment text="Cute cat" />
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">+ Add</button> {/* Black button */}
      </section>
    </motion.div>
  );
};

export default ArticlePage;