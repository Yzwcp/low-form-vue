import { createStore } from 'vuex'
import editor, { EditorProps } from '@/store/editor'
export interface UserProps {
  isLogin?: boolean
  userName?: string
}

export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}

export interface GlobalDataProps {
  user?: UserProps
  templates?: TemplateProps[]
  editor: EditorProps
}
const store = createStore({
  modules: {
    editor,
  },
})
export default store
