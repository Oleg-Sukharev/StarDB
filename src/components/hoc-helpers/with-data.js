import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: false,
            loading: true
        }
        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false,
                    })
                })
                .catch(this.onError) //catch error not to get down app
        }
        onError = () => {
            this.setState({
                loading: false,
                error: true,
            });
        }

        render() {
            const { data, loading, error } = this.state;
            const errorMessage = error ? <ErrorIndicator /> : null;
            const spinner = loading ? <Spinner /> : null;
            if (spinner || errorMessage) {
                return (
                    <React.Fragment>
                        {errorMessage}
                        {spinner}
                    </React.Fragment>
                )
            }
            return <View {...this.props} data={data} />
        }
    }

}

export default withData;
