"use client";

import { motion } from "framer-motion";

const orders = [
  { id: "#1021", customer: "Rahul", status: "Pending" },
  { id: "#1022", customer: "Priya", status: "Confirmed" },
];

export default function OrdersTable() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h3 className="mb-4 font-semibold">Recent Orders</h3>

      {orders.map((o) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          key={o.id}
          className="flex justify-between py-3 border-b border-zinc-800"
        >
          <span>{o.id}</span>
          <span>{o.customer}</span>
          <span className="text-yellow-400">{o.status}</span>
        </motion.div>
      ))}
    </div>
  );
}
