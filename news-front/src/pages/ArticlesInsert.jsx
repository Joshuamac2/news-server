import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ArticlesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            sub: '',
            link: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputSub = async event => {
        const sub = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ sub })
    }

    handleChangeInputLink = async event => {
        const link = event.target.value
        this.setState({ link })
    }

    handleIncludeArticle = async () => {
        const { title, sub, link } = this.state
        const payload = { title, sub, link }

        await api.insertArticle(payload).then(res => {
            window.alert(`Article inserted successfully`)
            this.setState({
                title: '',
                sub: '',
                link: '',
            })
        })
    }

    render() {
        const { title, sub, link } = this.state
        return (
            <Wrapper>
                <Title>UNDER CONSTRUCTION!!</Title>

                <Title>Seen something worth discussing?</Title>

                <Label>Article title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={sub}
                    onChange={this.handleChangeInputSub}
                />

                <Label>Posted Link: </Label>
                <InputText
                    type="text"
                    value={link}
                    onChange={this.handleChangeInputLink}
                />

                <Button onClick={this.handleIncludeArticle}>Add Article</Button>
                <CancelButton href={'/articles/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ArticlesInsert
