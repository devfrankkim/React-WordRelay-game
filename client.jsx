const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./WordRelay'); // 한 곳에 몰아둘 수 있다. 

const Hot = hot(WordRelay);

ReactDom.render(<Hot />, document.querySelector('#root'));



/*
    <package.json>
1.  "webpack-dev-server" &  "react-hot-loader" 설치
2.   "dev": "webpack-dev-server --hot" 명령어 바꾼다. 

    <client.jsx>
3.   const { hot } = require('react-hot-loader/root'); 불러온다.
4.   ReactDom.render(<Hot />, document.querySelector('#root')); <Hot /> 이름을 바꾸고 WordRelay를 바깥으로 빼낸다.
5.   const Hot = hot(WordRelay);

    <webpack.config.js>
6.   babel-loader => option => plugin =>  ** 'react-hot-loader/babel' ** 추가하기!!!!

    <index.html>

7.  webpack-dev-server 쓰게 될 경우 => dist 폴더 app.js 파일을 쓰지 않는다.
*/