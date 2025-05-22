'use client';

import { motion } from 'motion/react';
import { FaTools } from 'react-icons/fa';

const FeatureTools = () => {
    return (
        <section className="bg-lightgray py-20 px-4 md:px-8 lg:px-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className=" uppercase text-darkgray/80 tracking-tight mb-2">TOOLS</p>
                <h2 className="text-4xl capitalize tracking-tighter font-bold">
                    <span className="text-primary">Integration</span> & Compatibility
                </h2>
            </motion.div>

            <motion.div
                className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-40 h-32 bg-white rounded-4xl flex items-center justify-center  text-gray-400 text-sm font-semibold"
                    >
                        LOGO
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default FeatureTools;
