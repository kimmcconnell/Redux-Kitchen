import React from 'react';
import Logo from './Logo';
import styles from './styles';
import { Route, Link } from 'react-router-dom';


function Header(props){
  console.log(props);
  return(
    <div className='structure'>
      <style jsx>{`
        .structure {
          width: 100%;
          height: 7vh;
          background: #B6765A;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .center {
          grid-column: 2 / span 2;
          display: flex;
          flex-flow: row nowrap;
          align-content: center;
          justify-content: center;
        }
        .left{
          grid-column: 1/2;
        }
        .right{
          grid-column: 4/5;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }

        a, a:visited {
          margin-right: 1rem;
          color: #000;
          text-decoration: none;
        }
        .links {
          place-self: center;
        }

        .linkstyle, .linkstyle:visited {
          margin-right: 1rem;
          color: #000;
          text-decoration: none;
          display: inline;
          cursor: pointer;
        }
        `}
      </style>
      <div className='left'></div>
      <div className='center'>
        <Logo/>
      </div>
      <div className='right'>
        <div className='links'>
          <a href="#">Glossary</a>
          <Link to="/game">Restart</Link>
        </div>
        <div className='right'>
          <div className='links'>
            <div className = 'linkstyle' onClick={props.handleClick}>Glossary</div>
            <Link to="/game"><div className = 'linkstyle'>Restart</div></Link>
          </div>
        </div>
      </div>
    </div>  


  );
}

export default Header;
