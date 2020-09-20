import React,{PureComponent} from 'react'
import styles from './Configs.module.css'
import Select from './Select/Select'

class Configs extends PureComponent{

    render(){
        return (
            <div className={styles.configs}>
            <Select/>
            </div>
        )
    }
}
export default Configs