import React, { useContext } from 'react'
import { Slider } from 'antd'
const HookName = () => {
  const AppContext = React.createContext({})
  console.log(AppContext)
  const marks = {
    0: '0°C',

    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  }
  const A = () => {
    const { name } = useContext(AppContext)
    return (
      <div>
        <p>
          我是A组件的名字{name}
          <span>我是A的子组件{name}</span>
        </p>
      </div>
    )
  }
  const B = () => {
    const { name } = useContext(AppContext)
    return (
      <div>
        <Slider
          tooltipVisible
          style={{ height: '100px' }}
          range={{ draggableTrack: true }}
          defaultValue={[20, 50]}
          marks={marks}
          onChange={e => {
            // let arr = [
            //   { name: '张三', age: 12, key: 1 },
            //   { name: '里斯', age: 22, key: 2 },
            //   { name: '王五', age: 13, key: 3 },
            //   { name: '赵四', age: 33, key: 4 },
            //   { name: '刘罗锅', age: 18, key: 5 },
            // ]
            // _.forEach(arr, function (n, key) {
            //   arr[key].name = arr[key].id + '-' + arr[key].name
            // })
          }}
        />
        <p>我是B组件的名字{name}</p>
        <Slider defaultValue={[20, 50]} range={true} tooltipVisible />
      </div>
    )
  }
  return (
    <AppContext.Provider value={{ name: '华泰证券' }}>
      <A />
      <B />
    </AppContext.Provider>
  )
}
export default HookName
