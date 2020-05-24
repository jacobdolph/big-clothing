import React, { Component } from 'react';
import MenuItem from '../MenuItem'
import './styles.scss';
import SECTIONS_DATA from '../../sections.data'

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            section: SECTIONS_DATA
        }

    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.section.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;