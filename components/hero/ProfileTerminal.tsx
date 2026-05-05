"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[var(--bg-card)] border border-gray-800 rounded-xl shadow-lg shadow-black/30 overflow-hidden w-[220px] sm:w-[260px] md:w-[340px]"
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card-alt)] border-b border-gray-800">
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
          className="rounded-lg grayscale hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Terminal footer */}
      <div className="px-4 pb-4 font-mono text-xs space-y-1">
        <p className="text-[var(--green)]">&gt; identity: backend_engineer</p>
        <p className="text-[var(--green)]">&gt; location: bengaluru_india</p>
        <p className="text-gray-400">&gt; focus: aws_distributed_systems</p>
        <p className="text-[var(--accent)]">&gt; status: open_to_opportunities</p>
      </div>
    </motion.div>
  );
}
