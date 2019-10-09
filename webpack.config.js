const path = require('path');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', //  실 서비스: production
    devtool : 'eval', // 빠르게 하겠다.
    resolve : {
        // 알아서 웹펙이 확장자를 찾아준다. resolve에 몰아서 넣어주면 됨.
        extensions: ['.js', '.jsx']
    },
    
    entry : {     
        app: ['./client'], 
    }, // 입력 

    module: {
        rules: [{
            test: /\.jsx?/,             
            loader: 'babel-loader', 
            options: {
                presets:[
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'] // browerslist
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
            ],

            },
        }],
    },

    output : {
       path: path.join(__dirname, 'dist'), 
       filename: 'app.js' 
    }, // 출력 
};
 

// webpack 커멘드 등록하는 방법 3가지.
// npx webpack 마법같은 단어 npx webpack
// package.json => script => webpack 선언 ex) npm run dev
/*
    "scripts": {
        "dev": "webpack"
     },
*/


// entry에서 두개를 합쳐서 => app.js 만들어준다. './client.jsx', './WordRelay.jsx'
// 웹펙에서 const WordRelay = require('./WordRelay'); 경로를 찾아주기 때문에 반복해서 쓸 필요가 없다.

// entry 파일을 읽고 => module을 적용한 후 => output에 뺀다.
// module - rules(여러개 적용을 할 수 있기 때문에 배열로 사용한다.)


/*
npm i react react-dom
"@babel/core": "^7.6.3",   // 최신문법 바꿔줌
"@babel/preset-env": "^7.6.3", // 환경에 맞게 알아서 바꿔줌
"@babel/preset-react": "^7.6.3", // JSX
"babel-loader": "^8.0.6", // BABEL - WEBPACK 연결해준다.
npm i -D @babel/plugin-proposal-class-properties => state 문법 사용하려면 적용.
*/

// test: /\.jsx?/,             
// loader: 'babel-loader', 
// /\.jsx?/ 정규 표현식 =>  JS파일과 JSX파일 룰을 적용하겠다. 
// 바벨룰 => JS & JSX 파일에 바벨을 적용해서, 문법에 문제가 없게 호환시켜주겠다.