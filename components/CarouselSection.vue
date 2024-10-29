<template>
  <NuxtLayout name="section">
    <UCarousel :prev-button="{
      class: '!bg-[#b3157e] !text-white'
    }" :next-button="{
      class: '!bg-[#b3157e] !text-white'
    }" indicators ref="carouselRef" :items="items" :arrows="!isMobile"
      :ui="{ item: 'basis-full', indicators: { wrapper: 'absolute flex items-center justify-end gap-2 bottom-4 mr-4 inset-x-0' } }"
      class="rounded-lg overflow-hidden">

      <template v-slot="{ item }">
        <picture>
          <source :srcset="item.desk" media="(min-width: 768px)"> <img :src="item.mobile" alt="Ânima Educação">
        </picture>
      </template>

      <template #indicator="{ active }">
        <span id="indicator" :class="{ active: active }"></span>
      </template>
    </UCarousel>
  </NuxtLayout>
</template>

<script lang="ts" setup>

const { isMobile } = useIsMobile()

const items = [
  {
    desk: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//3_Desk_25a1103ba4.png',
    mobile: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//3_Mob_d716e97906.png'
  },
  {
    desk: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//2_Desk_c9374a51bb.png',
    mobile: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//2_Mob_4f29c8f858.png'
  },
  {
    desk: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//4_Desk_6c1672056f.png',
    mobile: 'https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//4_Mob_a3a3881735.png'
  }

]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)
})

</script>

<style scoped>
#indicator {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
}

#indicator.active {
  width: 2rem;
  background-color: white;
  border-radius: 10px;
}
</style>