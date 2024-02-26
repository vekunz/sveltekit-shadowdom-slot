<script lang="ts">
  import '../lib/element?client';
</script>

<ex-dummy>
  <template shadowrootmode="open">
    <p>This Declarative Shadow DOM component content</p>
    <p><slot></slot></p>
  </template>
  This is slot content
</ex-dummy>
