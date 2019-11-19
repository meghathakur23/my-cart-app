import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from "./Button";
//import { transform } from '@babel/core';
import logo from "../logo.svg"
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <NavWrapper className ="navbar navbar-expand-sm  navbar-dark px-sm-5">
                    <Link to ='/'>
                        <img
                         src = {logo}
                          alt="store"
                         
                          className="navbar-brand"/>
                    </Link>
                         <ul className = "navbar-nav align-items-canter">
                             <li className = "nav-items ml-5">
                                <Link to ="/" className = "nav-link">
                                    products
                                </Link>
                             </li>
                         </ul>
                        <Link to ='/cart' className="ml-auto">
                          <ButtonContainer>
                              <span className="mr-2">
                                  <i className="fa fa-cart-plus"/>
                              </span>
                              my cart
                          </ButtonContainer>
                        </Link>         
                </NavWrapper>
            </div>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitilize !important;

}
`;

                
       
 
export default Navbar;