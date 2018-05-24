<template>
  <div>
    <div class="search-bar">
<van-row class="test-row">
  <van-col span="3">
    <img :src="locationIcon" width="80%" alt="losing" class="location-icon">
  </van-col>
  <van-col span="16">
    <input type="text" class="search-input"/>
  </van-col>
  <van-col span="5">
    <van-button size="mini">查找</van-button>
  </van-col>
</van-row>
    </div>

  <!-- swiper area -->
<div class="swiper-area">
<van-swipe :autoplay="1000">
  <van-swipe-item v-for="(banner ,index) in bannerPicArray" :key="index">
    <img v-lazy="banner.image" alt="" width="100%">
  </van-swipe-item>
</van-swipe>
</div>

<!-- type bar -->
<div class="type-bar">
  <div v-for="(cate, index) in category" :key="index">
    <img v-lazy="cate.image" alt="" width="90%">
    <span>{{cate.mallCategoryName}}</span>
  </div>
</div>

<!-- adBanner area -->
<div>
  <img v-lazy="adBanner" alt="" width="100%">
</div>

<!-- Recommend goods area -->
<div class="recommend-area">
  <div class="recommend-title">
    商品推荐
  </div>
  <div class="recommend-body">
<swiper :options="swiperOption">
  <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
    <div class="recommend-item">
      <img :src="item.image" alt="" width="80%">
      <div>{{item.goodsName}}</div>
      <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
    </div>
  </swiper-slide>
</swiper>
  </div>
</div>

<!-- 使用swiperDefault -->
<swiperDefault></swiperDefault>
<swiperDefault2></swiperDefault2>
<swiperDefault3></swiperDefault3>
<swiperText></swiperText>

  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css' //引入组件必须要的样式
import {swiper, swiperSlide} from 'vue-awesome-swiper' //引入组件
import swiperDefault from '../swiper/swiperDefault'
import swiperDefault2 from '../swiper/swiperDefault2'
import swiperDefault3 from '../swiper/swiperDefault3'
import swiperText from '../swiper/swiperText';
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView:3 //
      },
      msg: "Shopping Mail",
      locationIcon: require("../../assets/images/location.png"), //设置地址
      bannerPicArray: [],
      category: [],
      adBanner:'',
      bannerPicArray:[],
      recommendGoods: [],
    }
  },
components: {swiper,swiperSlide,swiperDefault,swiperDefault2,swiperDefault3,swiperText}, //使用组件
  created() {
    axios({
      url:'https://www.easy-mock.com/mock/5af98c35fa44784111a76954/smilevue/index',
      method: 'get',
    })
.then(response=>{
  console.log(response)
  if(response.status==200){
    this.category = response.data.data.category;
    this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
    this.bannerPicArray = response.data.data.slides;
    this.recommendGoods = response.data.data.recommend;
  }
})
.catch(error=>{
  console.log(error);
})

  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
  /* overflow: hidden 是用来清楚searchbar的向下溢出的 */
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area {
  clear: both;
  /* clear: both;是用来清除图片左右不规则空白的 */
  max-height: 12rem;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  /* 不换行 nowrap */
  flex-wrap: nowrap;
}
.type-bar div {
  padding: .3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}

.recommend-title {
border-bottom: 1px solid #eee;
font-size: 14px;
padding: .2rem;
color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
</style>
