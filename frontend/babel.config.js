module.exports = {
    presets: [
        '@babel/preset-env', //entende o ambiente da aplicação e converter código para o browser entender.
        '@babel/preset-react' // consegue entender o html no javascript
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};