import React, { useState } from 'react';
import CategoryHeader from './CategoryHeader.jsx';

const Header = (props) => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showAutoSuggestions, setShowAutoSuggestions] = useState(false);

    const handleToggleMenu = (e) => {
        setShowAccountMenu(!showAccountMenu)
    }

    const showSuggestionDropdown = (e) => {
        setShowAutoSuggestions(!showAutoSuggestions)
    }

    const handleAutoSuggest = (e) => {
        const searchTerm = document.getElementById('header-search').value;
        if (searchTerm) {
            document.getElementById('suggestions-dropdown').innerHTML = "<h3>Popup</h3>";
        } else {
            document.getElementById('suggestions-dropdown').innerHTML = "";
        }
    }

    return (
        <React.Fragment>
        <header>
            <div id="logo-box">
                {/* <img src="" id="logo"></img> */}
                <h1 id="logo">ShopFast</h1>
                <p id="logo-desc">Just shop and use!</p>
            </div>

            <div id="header-search-box">

                <input 
                    type="text" 
                    id="header-search" 
                    placeholder="What do you want to buy today?" 
                    onFocus={showSuggestionDropdown} 
                    onBlur={showSuggestionDropdown} 
                    onChange={handleAutoSuggest}
                />

                {showAutoSuggestions ? <div id="suggestions-dropdown"></div> : ''}
            </div>

            <div id="account-details-box">

                <h3 onClick={handleToggleMenu} >Account</h3>

                {showAccountMenu ? <div id="popup-menu">
                    <p>My account</p>
                    <p>Orders</p>
                    <p>Logout</p>
                </div> : ''}

                <h3>Cart</h3>

            </div>
        </header>
        <CategoryHeader/>
        </React.Fragment>
    )
}

export default Header;
