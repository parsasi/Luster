import React from 'react';
import {  Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import detokenize from '../api/detokenize';
import Signin from '../components/Signin'
class ProtectedRoute extends React.Component{
    constructor(props){
        super(props)
        this.state = {authenticated : false}
    }
    componentWillMount(){
        const token = localStorage.getItem('token')
        if(token){
            if(this.state.token){
                this.setState(()=>({authenticated : true}))
            }else{
                detokenize(token)
                .then(data => {
                    if(data.name){
                        this.setState(()=>({authenticated : true}))
                        data.token = token
                        this.props.dispatch({
                            type : 'USER_SIGNED_IN',
                            data : data
                        })
                    }
                })
                .catch(e => console.log(e))
            }
        }
    }
    render(){
        const Component = this.props.component
        console.log(this.state)
        const Red = () => <Redirect to="/signin"/>
        //TODO: Redirect the user instead of rendering the component there
        return (<Route {...this.props} component={this.state.authenticated ? Component : Signin } />)
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };

export default connect(mapStateToProps)(ProtectedRoute);
  