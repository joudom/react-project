import React from 'react';
import { useNavigate } from 'react-router-dom';

export default (props) => {
    const navigate = useNavigate();
    if (!props.isLoggedIn) {
        navigate('/');
    } else {
        return (
            <>
            {props.children}
        </>
        )
    }
}