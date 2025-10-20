"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Particles } from "./particles";

interface ChartData {
  label: string;
  value: number;
  color: string;
}

const chartData: ChartData[] = [
  { label: "Web Design", value: 25, color: "#10b981" },
  { label: "Development", value: 35, color: "#06b6d4" },
  { label: "Cloud Services", value: 20, color: "#8b5cf6" },
  { label: "Other", value: 20, color: "#f59e0b" },
];

export function AnimatedCharts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 overflow-hidden"
      data-oid="zz:6e25"
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0"
        quantity={30}
        ease={80}
        color="#10b981"
        size={0.6}
        staticity={50}
        data-oid="-ok1f6_"
      />

      <div className="max-w-6xl mx-auto relative z-10" data-oid="7sr:a9.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          data-oid="71zl6rk"
        >
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4"
            data-oid="-.wk07r"
          >
            Student Offers Analytics
          </h2>
          <p
            className="text-gray-600 dark:text-gray-300 text-lg"
            data-oid="-dlmctw"
          >
            Real-time insights into our platform's performance
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="jol.q_l"
        >
          {/* Animated Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90"
            data-oid="vmzfbr7"
          >
            <h3
              className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
              data-oid="5rh5afo"
            >
              Offers by Category
            </h3>
            <div className="space-y-4" data-oid="7nkr06_">
              {chartData.map((item, index) => (
                <div key={item.label} className="relative" data-oid=":co:eez">
                  <div
                    className="flex justify-between items-center mb-2"
                    data-oid="nf5xkc8"
                  >
                    <span
                      className="text-sm font-medium text-gray-600 dark:text-gray-300"
                      data-oid="g2a0tv5"
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-bold text-gray-800 dark:text-gray-200"
                      data-oid="-ng9ev5"
                    >
                      {item.value}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden"
                    data-oid="gu3jazq"
                  >
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      animate={
                        isVisible ? { width: `${item.value}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + index * 0.2,
                        ease: "easeOut",
                      }}
                      data-oid="jroiun4"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 2,
                          delay: 1 + index * 0.2,
                          ease: "easeInOut",
                        }}
                        data-oid="-l1pzfk"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Animated Circular Progress */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90"
            data-oid="_x8ei6p"
          >
            <h3
              className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
              data-oid="mk:s6xp"
            >
              Platform Growth
            </h3>
            <div
              className="flex items-center justify-center"
              data-oid="c1o.::1"
            >
              <div className="relative w-48 h-48" data-oid=".25j7hl">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 100 100"
                  data-oid="o5zqlp_"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                    data-oid="zp5urn6"
                  />

                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={
                      isVisible ? { pathLength: 0.87 } : { pathLength: 0 }
                    }
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    style={{
                      pathLength: 0,
                      strokeDasharray: "0 1",
                    }}
                    data-oid="8gx:xsc"
                  />

                  <defs data-oid="re0rv3-">
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      data-oid="fu2h3n2"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        data-oid="-0:z00k"
                      />
                      <stop
                        offset="100%"
                        stopColor="#059669"
                        data-oid="1-e9k8f"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  data-oid="wno.hey"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-center"
                    data-oid="azjsf_d"
                  >
                    <div
                      className="text-3xl font-bold text-green-500"
                      data-oid="aazlwa4"
                    >
                      87%
                    </div>
                    <div
                      className="text-sm text-gray-600 dark:text-gray-400"
                      data-oid="juyr9tj"
                    >
                      Success Rate
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          data-oid="2rqkc0v"
        >
          {[
            { title: "Total Offers", value: "64", icon: "🎯" },
            { title: "Total Value", value: "$53,402", icon: "💰" },
            { title: "Active Users", value: "12.5K", icon: "👥" },
            { title: "Success Rate", value: "87%", icon: "📈" },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-90 text-center relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              data-oid="y0h8zd1"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                data-oid="uqjnmt_"
              />

              <div className="relative z-10" data-oid="cu3dvqf">
                <div className="text-3xl mb-2" data-oid="2nvi7g8">
                  {stat.icon}
                </div>
                <motion.div
                  className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  data-oid="7rib2-l"
                >
                  {stat.value}
                </motion.div>
                <div
                  className="text-sm text-gray-600 dark:text-gray-400"
                  data-oid="eb3e6.e"
                >
                  {stat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
