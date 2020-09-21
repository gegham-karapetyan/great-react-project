import React,{PureComponent} from 'react'
import styles from './Select.module.css'

function Select (props){
    return <div className={styles.select} onClick={props.onSelect}>Select</div>
}
export default Select