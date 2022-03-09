<script setup>

const props = defineProps({
  currentPage: String,
  pages: Array
});

const emit = defineEmits(["page-change"]);

function onPageClick(page) {
  emit("page-change", page);
}

function nextPage() {
  const currentPageIndex = props.pages.indexOf(props.currentPage);
  if (currentPageIndex === props.pages.length - 1) {
    return;
  }
  emit("page-change", props.pages[currentPageIndex + 1]);
}

function previusPage() {
  const currentPageIndex = props.pages.indexOf(props.currentPage);
  if (currentPageIndex === 0) {
    return;
  }
  emit("page-change", props.pages[currentPageIndex - 1]);
}


</script>


<template>
  <div className="page-switcher">
    <img :class="['icon', {disabled:  pages.indexOf(currentPage) === 0}]" src="../../../assets/images/Previous.png"
         @click="previusPage">
    <template v-for="(page, i) in pages">
      <div
          v-if="page !== 'Submit' && page !== 'ThanksForJoining'"
          :key="i"
          :class="['page', {activated: currentPage === page}]"
          @click="onPageClick(page)"
      />
    </template>

    <img :class="['icon', {disabled:  pages.indexOf(currentPage) === pages.length - 1}]"
         src="../../../assets/images/Next.png"
         @click="nextPage">
  </div>
</template>


<style lang="scss">
.page-switcher {
  display: flex;
  align-items: center;

  .icon {
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
    }
  }

  .page {
    cursor: pointer;
    margin: 0 0.8rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(#F05039, 0.1);

    &.activated {
      background-color: var(--red-100);
    }
  }
}

</style>
