"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d0f14] border border-gray-800 rounded-xl shadow-lg overflow-hidden w-[220px] sm:w-[260px] md:w-[340px]"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#111318] border-b border-gray-800">
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-3 h-3 bg-red-500 rounded-full"
        />
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
          className="w-3 h-3 bg-yellow-500 rounded-full"
        />
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          className="w-3 h-3 bg-green-500 rounded-full"
        />

        <span className="ml-3 text-xs text-gray-400 font-mono">
          profile.png
        </span>
      </div>

      {/* Image */}
      <div className="p-4 flex justify-center">
        <Image
          src="/profile.png"
          alt="Krishna Kumar"
          width={280}
          height={280}
          className="rounded-lg grayscale hover:grayscale-0 transition"
        />
      </div>

      {/* Terminal footer */}
      <div className="px-4 pb-4 font-mono text-xs text-green-400">
        <p>&gt; identity: backend_engineer</p>
        <p>&gt; status: available_for_building</p>
      </div>
    </motion.div>
  );
}
