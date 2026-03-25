import React from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
    {
        badge: "3 Star Silver",
        icon: "fab fa-python",
        color: "text-yellow-400",
        bgColor: "from-yellow-500/20 to-yellow-500/5",
        borderColor: "border-yellow-500/30",
        glowColor: "rgba(234,179,8,0.2)",
        language: "Python",
        platform: "HackerRank",
        stars: 3,
        tier: "Silver",
    },
    {
        badge: "2 Star Bronze",
        icon: "fas fa-code",
        color: "text-blue-400",
        bgColor: "from-blue-500/20 to-blue-500/5",
        borderColor: "border-blue-500/30",
        glowColor: "rgba(59,130,246,0.2)",
        language: "C++",
        platform: "HackerRank",
        stars: 2,
        tier: "Bronze",
    },
    {
        badge: "1 Star",
        icon: "fas fa-project-diagram",
        color: "text-green-400",
        bgColor: "from-green-500/20 to-green-500/5",
        borderColor: "border-green-500/30",
        glowColor: "rgba(34,197,94,0.2)",
        language: "Problem Solving (DSA)",
        platform: "HackerRank",
        stars: 1,
        tier: null,
    },
    {
        badge: "1 Star",
        icon: "fas fa-database",
        color: "text-cyan-400",
        bgColor: "from-cyan-500/20 to-cyan-500/5",
        borderColor: "border-cyan-500/30",
        glowColor: "rgba(6,182,212,0.2)",
        language: "SQL",
        platform: "HackerRank",
        stars: 1,
        tier: null,
    },
    {
        badge: "1 Star",
        icon: "fab fa-java",
        color: "text-orange-400",
        bgColor: "from-orange-500/20 to-orange-500/5",
        borderColor: "border-orange-500/30",
        glowColor: "rgba(249,115,22,0.2)",
        language: "Java & 10 Days of JS",
        platform: "HackerRank",
        stars: 1,
        tier: null,
    },
];

const TIER_COLORS = {
    Silver: "text-gray-300",
    Bronze: "text-amber-600",
};

const Stars = ({ count }) => (
    <div className="flex gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={`fas fa-star text-xs ${i < count ? 'text-yellow-400' : 'text-gray-700'}`}></i>
        ))}
    </div>
);

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 scroll-mt-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Achieve<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">ments</span>
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">Badges and recognitions earned through competitive coding challenges.</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`glass-card p-7 rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.bgColor} relative overflow-hidden group cursor-default`}
                            style={{ boxShadow: `0 0 0 transparent` }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 10px 40px ${item.glowColor}`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 transparent`}
                        >
                            {/* Top accent line */}
                            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${item.color}`}></div>

                            <div className="flex items-start gap-4">
                                <div className={`text-3xl ${item.color} bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl shrink-0 border border-white/5`}>
                                    <i className={item.icon}></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-xl leading-tight">{item.language}</h4>
                                    <p className="text-gray-500 text-sm font-medium mt-0.5 flex items-center gap-2">
                                        <i className="fab fa-hackerrank text-green-500"></i> {item.platform}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <div className={`text-sm font-bold tracking-wide ${item.tier ? TIER_COLORS[item.tier] : 'text-gray-300'}`}>
                                        {item.badge} Badge
                                        {item.tier && <span className="ml-1.5 text-xs opacity-70">({item.tier})</span>}
                                    </div>
                                    <Stars count={item.stars} />
                                </div>
                                <i className={`fas fa-trophy text-2xl ${item.color} opacity-30 group-hover:opacity-80 transition-opacity duration-300`}></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
