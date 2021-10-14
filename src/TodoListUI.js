import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const todoUI = (props)=>{
    let { indexData,inputChangeValue,addItem,deleteItem } = props;
    return(
        <div>
                <div style={{margin:"10px"}}>
                    <Input value={indexData.inputValue} style={{width:"300px"}}
                        onChange={inputChangeValue}
                    />
                    <Button type="primary" style={{marginLeft:"20px"}} onClick={addItem}>增加</Button>
                </div>
                <div style={{margin:"10px"}}>
                    <Input value={indexData.inputValue} style={{width:"300px"}}
                    />
                </div>
                <div style={{margin:"10px"}}>
                    <List 
                     bordered
                     dataSource={indexData.list}
                     renderItem={(item,index)=>(<List.Item onClick={()=>deleteItem(index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
    )
}
export default todoUI;