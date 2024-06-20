<template>
  <div>
    <NavBar />
    <UCard class="h-screen">
      <template #header>
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
      </template>
      {{ $t("welcome") }}
      <template #footer>
        <UButton>Entre em contato</UButton>
      </template>
    </UCard>
  </div>
</template>
