import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class DeleteArticle extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Delete the article ${this.props.id} permanently?`,
            )
        ) {
            api.deleteArticleById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ArticlesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllArticles().then(articles => {
            this.setState({
                articles: articles.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { articles, isLoading } = this.state
        console.log('TCL: Articlelist -> render -> articles', articles)

        const columns = [

            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Sub',
                accessor: 'sub',
                filterable: true,
            },
            {
                Header: 'Link',
                accessor: 'link',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteArticle id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!articles.length) {
            showTable = false
        }

        return (

            <Wrapper>
            <Title>UNDER CONSTRUCTION!!</Title>
                {showTable && (
                    <ReactTable
                        data={articles}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ArticlesList
