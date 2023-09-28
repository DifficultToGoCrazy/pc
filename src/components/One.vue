<template>
  <p class="msg">msg:{{ msg }}</p>
  <p class="phoneNumber">phoneNumber:{{ phoneNumber }}</p>
  <p class="phoneNumberTwo">phoneNumberTwo:{{ phoneNumberTwo }}</p>
  <div>
    <span class="id">{{userInfo.id}}:</span>
    <span class="name">{{userInfo.name}}</span>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // const msg = 'Hello World!'
    const msg = ref<string>('Hello World!')
    // 多类型
    const phoneNumber: number | string = 13800138000;
    const phoneNumberTwo = ref<number | string>(18839794965);
    // 声明对象的格式
    interface Member {
      id: number,
      name: string
    };
    // 定义一个成员对象
    const userInfo = ref<Member>({
      id: 1,
      name: 'Tom'
    });
    return {
      msg,
      phoneNumber,
      phoneNumberTwo,
      userInfo
    }
  },
})
</script>

<style scoped>
.msg {
  font-size: 14px;
}
</style>
