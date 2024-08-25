import { Module } from 'vuex'
import { GlobalDataProps } from './index'
import { v4 as uuidV4 } from 'uuid'
export interface EditorProps {
  // 渲染素组
  components: ComponentData[]
  //当前编辑的元素是哪个
  currentElement: string
}
interface ComponentData {
  //元素的属性
  props: { [key: string]: any }
  //uuid v4创建
  id: string
  name: string
}
export const testComponents: ComponentData[] = [
  {
    id: uuidV4(),
    name: 'l-text',
    props: {
      text: 'hello',
      fontSize: '30px',
      url: 'www.baidu.com',
      color: 'red',
      actionType: 'url',
    },
  },
  { id: uuidV4(), name: 'l-text', props: { text: 'hello2', fontSize: '25px' } },
  { id: uuidV4(), name: 'l-text', props: { text: 'hello3', fontSize: '22px' } },
]
const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
}
export default editor
