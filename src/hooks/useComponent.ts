import { computed } from 'vue'
import { pick } from 'lodash-es'
import { CommonProps } from '@/components/defaultProps'

const useComponent = <T extends CommonProps>(props: T, stylePropsName: string[]) => {
  const styleProps = computed(() => pick(props, stylePropsName))
  const handleClick = (): void => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick,
  }
}
export default useComponent
