import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar">
                        <div><a href="https://stmik.harvest.id" class="navbar-brand">Employee Management Site</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;