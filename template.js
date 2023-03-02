module.exports = fileName => 
`<template>
  <div :class="prefix">
    <div :class="\`{prefix}_container\`">
      {{ prefix }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const prefix = "${fileName}"
</script>

<style lang="less">
.${fileName} {
  height: 100%;
}
</style>`
