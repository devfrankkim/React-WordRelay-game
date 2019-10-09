const React = require('react');
const { Component } = React; //React.component

class WordRelay extends Component {
    state = {
        word: 'Frank Kim',
        value: '',
        result: '',
    };

    onSubmitForm = (e) =>{
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                result: '딩동댕!!!',
                word: this.state.value,
                value:'',
            });
            this.input.focus();
        }else{
            this.setState({
                result: '땡',
                value: '',
            });   
         this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({value: e.target.value})
    }

    input;

    onRefInput = (c) =>{
        this.input = c;
    }

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>click!</button>
                    <h1>wow!!! interesting!!! </h1>
                </form>
                <div>{this.state.result}</div>
            </>

        )
    }
}
 
module.exports = WordRelay;

// 파일을 쪼개는 경우
/*

******** const React = require('react'); ********
const { Component } = React; //React.component
  
******** module.exports = WordRelay; ********

꼭 써줘야 한다.

*/

// value와 onChange는 세트다. 그게 아니면 defaultValue{ }를 사용해야 한다.
// 자동으로 webpack 자동 빌드 설정  => npm i -D react-hot-loader & npm i -D webpack-dev-server 설치!!!!
/*
 "scripts": {
    "dev": "webpack-dev-server --hot"
  },


  webpack-dev 가 webpack.config.js를 읽고 => 빌드를 해준다. => 그리고 서버로 유지를 시켜준다.
*/
