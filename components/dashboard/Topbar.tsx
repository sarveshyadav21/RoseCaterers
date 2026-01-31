"use client";

import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="h-16 bg-zinc-900 flex items-center justify-between px-6"
    >
      <h1 className="text-lg font-semibold">Dashboard Overview</h1>
      <div className="bg-zinc-800 px-4 py-2 rounded-xl">
        Admin
      </div>
    </motion.header>
  );
}
