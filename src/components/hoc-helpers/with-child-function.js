import React from 'react';

const withChildFunction = (Wrapper, fn) => {
    return (props) =>{
        return(
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}

export default withChildFunction;
