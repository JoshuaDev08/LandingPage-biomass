import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-forest-950">
      <div className="flex flex-col items-center text-center">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h1 className="font-display text-3xl font-semibold tracking-wide text-beige-50 sm:text-4xl">
            Earthkeepers
          </h1>

          <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.35em] text-moss-300">
            Biomass Solutions
          </p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-10"
        >
          <div className="relative h-12 w-12">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-moss-500/20" />

            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border-2
                border-transparent
                border-t-moss-300
              "
            />

            {/* Center */}
            <div className="absolute inset-3 rounded-full bg-moss-500/10" />
          </div>
        </motion.div>

        {/* Loading message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{
            delay: 0.6,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-6"
        >
          <p className="font-body text-sm text-beige-200">
            Preparing a sustainable future...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
