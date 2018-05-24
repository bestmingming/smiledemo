<template>
  <div>
<swiper class="swiper" :options="swiperOption">
  <swiper-slide class="text">
<div>
  2014年2月，习近平来到首都博物馆，参观北京历史文化展览。670多个文物组件一一陈列，展现了北京波澜壮阔的历史画卷。习近平一边认真观看、听取介绍，一边同专家交流讨论。他强调，要在展览的同时高度重视修史修志，让文物说话、把历史智慧告诉人们。

　　历史文物展览，就是见证历史。

　　2016年4月，习近平在安徽考察时，到金寨县革命博物馆参观。金寨，地处大别山腹地，被誉为“红军的摇篮、将军的故乡”。这里是红四方面军、红25军的主要发源地，先后组建过11支主力红军队伍。革命战争年代，10万金寨儿女为国捐躯。

　　博物馆内，习近平不时驻足凝视，并询问有关细节。习近平深情地说，一寸山河一寸血，一抔热土一抔魂。一幅幅图片，一件件实物，诉说着曾经的英勇壮烈。

　　时间和空间，在这里凝固；神思和情思，从这里漾开。

　　记录历史：不要“千馆一面”

　　博物馆是历史的保存者和记录者，也是保护和传承人类文明的重要殿堂。

　　历史文物，承载着一个民族的灿烂文明。

　　2017年，历经数百年沧桑的故宫，见证了中美领导人的历史性握手。11月8日下午，习近平主席和夫人彭丽媛与来华进行国事访问的美国总统特朗普和夫人梅拉尼娅一同参观故宫。品香茗、赏文物、听京剧，两国元首夫妇在气势恢弘的中国古建筑群中，亲密互动，感受中国悠久历史，体味中国文化底蕴。

　　始建于1406年的故宫是世界上现存规模最大、最完整的古代木构宫殿建筑群，也是世界上收藏中国文物最多、来访观众最多的博物馆。
</div>
  </swiper-slide>
</swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        direciton: "vertical",
        slidesPerView: "auto",
        freeMode:true, //
        mousewheel:true,
      }
    };
  },
  components: { swiper, swiperSlide }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px;
  text-align: left;
  padding: 30px;
  height: auto;

  /* CSS3语法盒模型 */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
