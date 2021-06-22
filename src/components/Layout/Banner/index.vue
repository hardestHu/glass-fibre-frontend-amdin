<template>
  <div class="banner">
      <div class="banner-left">
        <i class="el-icon-s-promotion"></i>
        <span>玻纤院数据共享平台</span>
      </div>
      <div class="banner-right">
        
        <div class="right-item">
          <i class="el-icon-bell"></i>
        </div>
        <div class="right-item">
          <i class="el-icon-question"></i> 
        </div>
        <div class="right-item">
          <i class="el-icon-s-order"></i> 
        </div>
        <div class="middle-line"></div>
        <div class="avatar-area right-item">
           <el-avatar size="large" >
             <img src="../../../assets/touxiang.png" alt="">
           </el-avatar>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Banner"
}
</script>

<style lang='scss'>
    .banner{
        box-sizing:border-box;
        width:100%;
        padding:10px 10px;
        background:linear-gradient(to right,#00142F,  #0D384F);
        position: fixed;
        top:0;
        left:0;
        color:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        .banner-left{
          font-size:24px;
          span{
            margin-left:10px;
            font-size:18px;
          }
        }
        .banner-right{
          display: flex;
          justify-content: center;
          align-content: cneter;
          .right-item{
            width:60px;
            text-align: center;
            font-size:26px; 
          }
          .right-item:hover{
            opacity: 0.7;
          }
          .middle-line{
            border-left:2px solid #aaa;
          }
          .avatar-area{
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
    }
</style>