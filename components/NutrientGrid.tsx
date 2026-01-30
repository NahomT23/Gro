"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Fish, 
  Activity, 
  Dna, 
  Flame, 
  Beef
} from "lucide-react";

const nutrients = [
  {
    name: "Iron",
    description: "Supports healthy blood and brain development.",
    fact: "25% of children in Ethiopia suffer from Iron Deficiency Anemia. Gro Bulla provides 70% of daily iron needs.",
    icon: Activity,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Omega 3",
    description: "Essential fatty acids for cognitive growth.",
    fact: "Ethiopia faces an Omega-3 crisis. Gro Bulla is fortified with plant-based Omega-3 to support brain power.",
    icon: Fish,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Energy",
    description: "Slow-release carbs for all-day play.",
    fact: "39% of kids in Ethiopia face stunting. Our complex bulla-carbs provide the long-lasting fuel they need.",
    icon: Flame,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Proteins",
    description: "Building blocks for strong muscles.",
    fact: "Essential for physical recovery. Fortified protein in bulla helps bridge the gap in children's diets.",
    icon: Beef,
    color: "bg-amber-100 text-amber-600",
  },
  {
    name: "Growth",
    description: "Crucial for physical and cognitive height.",
    fact: "Stunting is 20% higher in rural areas. Gro Bulla's balanced nutrients directly fight growth delays.",
    icon: Dna,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Stomach Health",
    description: "Gentle fiber for happy tummies.",
    fact: "Bulla is a 'False Banana' starch—the most digestible natural energy source for sensitive growing tummies.",
    icon: Zap,
    color: "bg-green-100 text-green-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function NutrientCard({ n }: { n: typeof nutrients[0] }) {
  return (
    <motion.div 
      className="group perspective-1000 h-[320px] cursor-pointer"
      whileHover="flipped"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { rotateY: 0 },
          flipped: { rotateY: 180 }
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-[2.5rem] border border-border shadow-sm flex flex-col items-center text-center justify-center transition-shadow group-hover:shadow-md">
          <div className={`w-14 h-14 rounded-2xl ${n.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
            <n.icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-3">{n.name}</h3>
          <p className="text-foreground/70 leading-relaxed">
            {n.description}
          </p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-accent p-8 rounded-[2.5rem] flex flex-col items-center text-center justify-center text-white"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="bg-white/20 p-4 rounded-2xl mb-4">
            <span className="text-xs font-bold uppercase tracking-widest">Health Fact</span>
          </div>
          <p className="text-lg font-medium leading-relaxed">
            {n.fact}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function NutrientGrid() {
  return (
    <section id="nutrients" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Small Bowl, <span className="text-accent">Big Power</span></h2>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Every serving of Gro Bulla is meticulously fortified to give your child the nutrients they need to thrive.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {nutrients.map((n) => (
          <motion.div key={n.name} variants={item}>
            <NutrientCard n={n} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
