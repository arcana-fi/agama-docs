<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="NotFound">
    <div class="inner">
      <p class="code">404</p>
      <h1 class="title">Page Not Found</h1>
      <div class="divider" />
      <p class="quote">
        The page you're looking for doesn't exist. Use the sidebar to navigate,
        or head back home.
      </p>
      <div class="action">
        <a class="link" :href="withBase('/')">Take me home</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.inner {
  max-width: 520px;
  margin: 0 auto;
}

.code {
  font-size: 64px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-2);
}

@media (min-width: 768px) {
  .code {
    font-size: 96px;
  }
}

.title {
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .title {
    font-size: 32px;
  }
}

.divider {
  margin: 24px auto 20px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 420px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 28px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>
