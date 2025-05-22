'use client';
import { motion } from 'motion/react';

const ExperienceCTA = () => {
    return (
        <section className="bg-lightgray rounded-4xl p-6 md:px-10 pt-10 pb-20 my-10 mx-4 md:mx-10 lg:mx-20">
            <motion.div
                className="flex flex-col md:flex-row items-start md:items-center  justify-between gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Left Text */}
                <div>
                    <h2 className="text-4xl capitalize tracking-tighter font-bold">
                        Ready to  <span className="text-primary">experience</span> <br />
                        the difference?
                    </h2>
                </div>

                {/* Right Text + Button */}
                <div className=" space-y-3">
                    <p className="text-sm text-gray-600">
                        Explore our learning platform and discover how
                        <br className="hidden md:block" />
                        Core Education can empower your growth.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white text-sm px-5 py-2 rounded-full"
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default ExperienceCTA;
