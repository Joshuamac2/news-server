import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Right = styled.div.attrs({
    className: 'navbar-nav ml-auto',
})``


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                              Home
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/articles/list" className="nav-link">
                                Listed articles
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/articles/create" className="nav-link">
                                Post articles
                            </Link>
                        </Item>
                    </List>
                    <Right>
                    <Item>
                        <Link to="/landing" className="nav-link">
                            Login or register
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/dashboard" className="nav-link">
                            Log out
                        </Link>
                    </Item>
                    </Right>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
