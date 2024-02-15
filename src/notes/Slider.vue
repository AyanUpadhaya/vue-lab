<template>
  <div class="slider-container">
    <div class="slider-mask">
      <div class="slider" :style="{ 'transform': 'translateX(' + translateValue + 'px)' }">
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <div v-for="(card, cardIndex) in slide.cards" :key="cardIndex" class="card">
            <p><strong>{{ card.review }}</strong></p>
            <p>{{ card.reviewName }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="indicator">
      <div v-for="(slide, index) in slides" :key="index" class="indicator-dot" :class="{ 'active': currentSlide === index }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          cards: [
            { review: "This is a great product", reviewName: "John Doe" },
            { review: "Excellent service", reviewName: "Jane Smith" },
            { review: "Highly recommended", reviewName: "Alice Johnson" }
          ]
        },
        {
          cards: [
            { review: "Very satisfied with the purchase", reviewName: "Bob Brown" },
            { review: "Fast delivery", reviewName: "Eva Martinez" },
            { review: "Good quality", reviewName: "David Wilson" }
          ]
        },
        {
          cards: [
            { review: "Amazing experience", reviewName: "Emily Taylor" },
            { review: "Will buy again", reviewName: "Michael Davis" },
            { review: "Impressed with the customer service", reviewName: "Sophia Miller" }
          ]
        }
      ],
      currentSlide: 0,
      translateValue: 0,
      autoSlideInterval: null,
      autoSlideDuration: 3000 // 3 seconds
    };
  },
  created() {
    this.autoSlide();
  },
  methods: {
    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoSlideDuration);
    },
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
        this.translateValue -= this.slideWidth();
      } else {
        this.currentSlide = 0;
        this.translateValue = 0;
      }
    },
    slideWidth() {
      // Calculate width of a single slide
      const slider = document.querySelector('.slider');
      const slide = slider.querySelector('.slide');
      return slide.offsetWidth;
    }
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%; /* Adjust the width as needed */
  background-color: darkblue;
  padding: 100px;
  margin: 0 auto; /* Center the slider */
}

.slider-mask {
  overflow: hidden;
}

.slider {
  width: 300%; /* Triple the width of the container */
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  display: flex;
  justify-content: center;
  width: 33.33%; /* Each slide takes one-third of the slider width */
}

.card {
  background-color: white;
  color: black;
  padding: 24px;
  margin-right: 20px;
  border-radius: 12px;
  width: 100%; /* Each card takes full width of its container */
}

.indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: skyblue;
  margin: 0 5px;
  cursor: pointer;
}

.indicator-dot.active {
  background-color: white;
}
</style>
