import path from 'path';
import webpack from 'webpack';
import {
    BuildMode,
    BuildPaths,
    BuildPlatform,
    buildWebpack,
} from '@packages/build_config';
import packageJson from './package.json';

interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    // Add ModuleFederationPlugin for sharing and exposing modules
    config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
            name: 'shop', // Unique name for the app
            filename: 'remoteEntry.js', // The filename of the remote entry
            exposes: {
                './Router': './src/router/Router.tsx', // Exposing Router module
            },
            shared: {
                ...packageJson.dependencies, // Sharing all dependencies from package.json
                react: {
                    eager: true, // Make sure it's eagerly loaded
                    requiredVersion: packageJson.dependencies['react'], // Ensure correct versioning
                },
                'react-router-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-router-dom'],
                },
                'react-dom': {
                    eager: true,
                    requiredVersion: packageJson.dependencies['react-dom'],
                }
            }
        })
    );

    return config;
};
