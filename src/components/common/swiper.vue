<template>
  <div class="box">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="index === current ? 'active' : ''"
        @click="bannerClick(index, item)"
      >
        <img :src="item.imageUrl" alt="" />
      </li>
    </ul>
    <div class="status">
      <span
        v-for="(item, index) in list"
        :key="index"
        :class="index === current ? 'active' : ''"
        @mouseenter="changeBanner(index)"
        @mouseleave="startLoop"
      >
      </span>
    </div>
    <div class="btn">
      <span
        class="prev"
        @click="prev"
        @mouseenter="stopLoop"
        @mouseleave="startLoop"
      >
        <i class="el-icon-arrow-left"></i>
      </span>
      <span
        class="next"
        @click="next"
        @mouseenter="stopLoop"
        @mouseleave="startLoop"
        ><i class="el-icon-arrow-right"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalSwiper",
  data() {
    return {
      current: 0, // 当前索引
      timerId: null, // 清除循环标记
      intStyle: {},
    };
  },
  props: [
    "list",
    "looptime",
    "height",
    "width",
    "background",
    "color",
    "fontSize",
  ],
  mounted() {},
  methods: {
    liEnter(index) {
      console.log(index);
    },
    getArticle() {
      this.$emit("getArticle", this.article);
    },
    // 鼠标移入状态圆点
    changeBanner(index) {
      this.$emit("change", this.current);
      this.stopLoop();
      this.current = index;
    },
    bannerClick(index, item) {
      this.$emit("clickSwiper", this.current, index, item);
    },
    prev() {
      if (this.current > 0) {
        // 将对象列表对应的索引和整个对象传出去
        this.$emit("prev", this.current, this.list);
        this.current--;
      } else {
        this.$emit("prev", this.current, this.list);
        this.current = this.list.length - 1;
      }
    },
    next() {
      if (this.current < this.list.length - 1) {
        this.$emit("prev", this.current, this.list);
        this.current++;
      } else {
        this.$emit("prev", this.current, this.list);
        this.current = 0;
      }
    },
    // 鼠标移出继续循环播放
    startLoop() {
      this.int(3000);
    },
    // 鼠标移入停止循环播放
    stopLoop() {
      clearTimeout(this.timerId); // 清除循环
    },
    int(time) {
      this.timerId = setInterval(() => {
        this.next();
      }, time);
      this.intStyle = {
        width: this.width + "px",
        height: this.height + "px",
        background: this.background,
        color: this.color,
      };
    },
  },
  created() {
    this.int(3000);
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: calc(100% - 160px) !important;
  height: 100%;
  overflow: hidden;
  margin: auto;

  ul {
    height: 100%;

    li {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: inherit;
      color: #fff;
      font-size: 80px;
      text-align: center;
      opacity: 0;
      transition: all 1.5s;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .active {
      opacity: 1;
      transition: all 1.5s;
    }
  }

  .status {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    text-align: Center;

    span {
      display: inline-block;
      height: 17px;
      width: 17px;
      margin: 0 5px;
      background: #fff;
      border-radius: 10px;
      color: #333;
      cursor: pointer;
    }

    span.active {
      color: #fff;
      background: #db6f78;
    }
  }
}

.btn {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);

  span {
    display: block;
    height: 70px;
    width: 58px;
    color: #fff;
    line-height: 70px;
    text-align: Center;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  span:hover {
    background: rgb(118, 118, 187);
  }

  span.prev {
    float: left;
  }

  span.next {
    float: right;
  }
}
</style>