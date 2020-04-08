import React from "react";
import classes from './Backdrop.module.scss';

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick} />

export default Backdrop;