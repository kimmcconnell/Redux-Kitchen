import React from 'react';
import robotChef from './../../assets/images/robot2.png';

class ReducerDisplay extends React.Component {
  constructor(){
    super();
    this.state={
      hideToolTip: true
    };

    this.handleHideReducer = this.handleHideReducer.bind(this);
    this.handleShowReducer = this.handleShowReducer.bind(this);

    this.toolTipInstance = (
      <div className='infoBox'>
        <div className='exit'>
          <h2 onClick={this.handleHideReducer}>[X]</h2>
        </div>
        <div className='reducerText'>
          <p>Reducer info goes here. Click X to hide. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <style jsx>{`
          .infoBox{
            width: 100%;
            height: auto;
            padding: 4%;
            display: flex;
            flex-direction: column;
            overflow: auto;
          }
          .exit{
            width: 40px;
            right: 1.5%;
            position: absolute;
            cursor: pointer;
          }
          h2{
            color: #76674B;
          }
          ::-webkit-scrollbar{
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #C79A43;
          }
          ::-webkit-scrollbar-thumb {
            background: #8CB490;
          }
        `}</style>
      </div>
    );
  }

  handleHideReducer() {
    this.setState({hideToolTip: true});
    console.log('clicked')
  }
  handleShowReducer() {
    this.setState({hideToolTip: false});
    console.log('clicked')
  }

  render(){

    const reducerStyleHide = this.state.hideToolTip ? {display: 'none'} : {};
    const reducerStyleShow = this.state.hideToolTip ? {display: 'inline-block'} : {};

    return(
      <div className='reducer-display'>
        <h1>REDUCERS</h1>
        <div className="robotChef">
          <img onClick={this.handleShowReducer} src={robotChef} alt="Robot Chef" style={reducerStyleShow}/>
        </div>
        <div className='robot-container' style={reducerStyleHide}>
          {this.toolTipInstance}
        </div>

        <style jsx>{`
          .reducer-display{
            margin-top: 15%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .robotChef{
            width: 35%;
          }
          img{
            height: auto;
            width: 100%;
            cursor: pointer;
          }
          .robot-container{
            border: 4px solid #76674B;
            background-color: #FBD961;
            width: 60%;
            height: 130px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default ReducerDisplay;