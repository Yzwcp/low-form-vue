<script setup lang="ts">
import { TextProps, defaultTextProps, textStylePropsName } from './defaultProps'
import useComponent from '@/hooks/useComponent'
const props = withDefaults(defineProps<Partial<TextProps>>(), {
  ...defaultTextProps,
})

const { styleProps, handleClick } = useComponent(props, textStylePropsName)
</script>
<template>
  <component :is="props.tag" @click="handleClick" :style="styleProps">
    {{ props.text }}
  </component>
</template>

<style scoped></style>
