<!-- UserProvider.vue -->
<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
import { UserContext, UserInfo } from "./interface";
import { userSymbolKey } from "./useUser";

const router = useRouter();

// 用户信息
const user = ref<UserInfo>({
  name: "admin",
  email: "",
  isLoggedIn: false,
});

provide<UserContext>(userSymbolKey, {
  /**
   * 获取用户信息
   */
  getUser: () => {
    if (user.value.isLoggedIn === false) router.push("/login");
    return user.value;
  },
  /**
   * 设置用户信息
   */
  setUser: (newUser: UserInfo) => {
    user.value = newUser;
  },
});
</script>
