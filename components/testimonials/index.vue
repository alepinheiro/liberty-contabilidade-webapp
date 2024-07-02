<template>
  <section class="px-5 h-96">
    <Swiper
      :modules="[Navigation, Pagination, A11y]"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :loop="true"
      class="h-full"
    >
      <SwiperSlide
        v-for="item in testimonials"
        :key="item"
        class="h-full flex justify-center items-center"
      >
        <div class="w-full h-full flex justify-center items-center">
          <p>
            {{ item }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script lang="ts" setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper/modules";
const testimonials = ["newCompany", "changeOffice", "changeStatus"];
</script>
