"use client";

import { motion } from "framer-motion";
import { Home, ClipboardList, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      className="w-64 bg-zinc-900 p-6"
    >
      <h2 className="text-xl font-bold text-yellow-400 mb-10">
        Admin Panel
      </h2>

      <nav className="space-y-6">
        <SidebarItem icon={<Home />} label="Dashboard" />
        <SidebarItem icon={<ClipboardList />} label="Orders" />
        <SidebarItem icon={<BarChart3 />} label="Analytics" />
      </nav>
    </motion.aside>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex items-center gap-3 cursor-pointer text-zinc-300 hover:text-white"
    >
      {icon}
      {label}
    </motion.div>
  );
}
