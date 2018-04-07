<template>
   <div>
        <nav-header></nav-header>
        <nav-bread>
            <!-- <span>Goods</span> -->
            <span slot="bread">Goods</span>
        </nav-bread>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                        <!-- filter -->
                    <div class="filter stopPop" id="filter">
                            <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur': priceCheck == 'all'}" @click="priceCheck='all'">All</a></dd>
                            <dd v-for="(item,index) in priceFilter">
                                <a href="javascript:void(0)"  @click="priceCheck=index" :class="{'cur':priceCheck == index}">{{item.startPrice}} - {{item.endPrice}}</a>
                            </dd>
                            </dl>
                    </div>

                        <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul v-if="goodList.length>0">
                                <li v-for="item in goodList">
                                    <div class="pic">
                                        <a href="#"><img :src="'/static/'+item.productImg" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.productPrice}}</div>
                                        <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
   </div>
</template>
<script>
import './../assets/base.css';
import './../assets/product.css';
import navHeader from '@/components/Header.vue'
import navBread from '@/components/Nav.vue'
import navFooter from '@/components/Footer.vue'
export default {
  name:'Goodlist',
  data(){
      return {
          goodList:[],
          msg:{
              reqError:'请求失败，请重试',
              resError:'数据请求失败，请重试'
          },
          priceFilter:[
              {startPrice:'0.00',endPrice:'500.00'},
              {startPrice:'500.00',endPrice:'1000.00'},
              {startPrice:'1000.00',endPrice:'2000.00'},
          ],
          priceCheck:'all'
      }
  },
  components:{
      navHeader,
      navFooter,
      navBread
  },
  methods:{
      getGoodList(){
          this.$http.get("/goods").then((res)=>{
               
                if(res.status != 200){
                    alert(this.msg.reqError);
                }else{
                    if(res.data.status != '0'){
                        alert(this.msg.resError);
                    }else{
                        let result = res.data.result;
                        this.goodList = result;
                    }                    
                }
          })
      }
  },
  mounted(){
      this.getGoodList();
  }
}
</script>



