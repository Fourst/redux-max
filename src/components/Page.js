import React from 'react'
import PropTypes from 'prop-types'
import {setYear} from '../actions/PageActions';


export class Page extends React.Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year)
    }
    render() {
        const { year, photo } = this.props
        return (
            <div>
                <p>
                    У тебя {photo} фото за {year} год
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2016</button>
                    <button onClick={this.onBtnClick}>2015</button>
                    <button onClick={this.onBtnClick}>2014</button>
                </p>
                    У тебя {photo.length} фото за {year} год
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photo: PropTypes.number.isRequired,
}