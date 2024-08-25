import { without } from 'lodash-es'
export interface CommonProps {
  tag: string
  actionType: string
  url: string
  height: string
  width: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  boxShadow: string
  opacity: number
  position: string
  left: string
  top: string
  right: string
}

export interface TextProps extends CommonProps {
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
}
//把定义的CommonProps变成可选

export const defaultCommonProps: Partial<CommonProps> = {
  tag: 'div',
  actionType: '',
  url: '',
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  position: '',
  left: '0',
  top: '0',
  right: '0',
}
export const defaultTextProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...defaultCommonProps,
}
//属于style属性的拿出来
export const textStylePropsName = without(
  Object.keys(defaultTextProps),
  'actionType',
  'url',
  'text'
)
