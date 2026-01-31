"use client";

import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 p-6 rounded-2xl"
    >
      <p className="text-zinc-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2 text-yellow-400">
        {value}
      </h2>
    </motion.div>
  );
}
