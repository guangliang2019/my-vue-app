<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "./hooks";
</script>

<template>
  <UserProvider>
    <Toaster />
    <RouterView />
  </UserProvider>
</template>
