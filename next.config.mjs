/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        reactRoot: true, // Habilita el nuevo root de React 18
        concurrentFeatures: true, // Habilita las características concurrentes
    },
};

export default nextConfig;
