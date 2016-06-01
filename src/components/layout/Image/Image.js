import React, { Component, PropTypes } from 'react';
import './Image.less';
import { cn } from '../../../utils/dom.js';

export default class Image extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        let {className, src, alt} = this.props;
        console.log(className, src, alt)
        className = cn('Image', this.props.className);
        return (
            <div>
                <img { ...this.props }
                    src={src}
                    alt={alt}
                    >
                </img>
            </div>
        );
    }
}


// PropTypes validation
Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
};

// default props
Image.defaultProps = {
};
