<template>
  <div class="data-menu">
      <div class="menu-left menu-list">
        <div class="list-title">
          <i class="el-icon-caret-left"></i>
          <span>
            <i class="el-icon-s-order"></i>
            主题目录
          </span>
          <i class="el-icon-caret-right"></i>
        </div>
        <div class="list-content">
          <ul>
            <li class="list-item" v-for="(item,index) in contentList" :key="index">
              <i class="el-icon-s-data"></i>
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-right">  
        <div class="form-search">
         <el-form label-width="80px" inline>
            <el-form-item class="form-item">
              <el-input placeholder="请输入数据资源名称/部门名称"></el-input>
            </el-form-item>
            <el-form-item class="">
              <el-button type="primary" class="custom-btn">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="content">
          <div class="content-header">
            <div>数据列表</div>
            <div>
              <el-button type="primary" class="custom-btn mr-10">新建</el-button>
              <el-select placeholder="批量操作" v-model="type">
                <el-option label="批量删除" value="1"></el-option>
                <el-option label="批量启用" value="2"></el-option>
                <el-option label="批量停用" value="3"></el-option>
              </el-select>  
            </div>            
          </div>

          <div class="content-list">
            <div class="content-list-item">
              <el-checkbox></el-checkbox>
              <div class="list-item-icon">
                <img src="../../assets/data-menu1.png" alt="">
              </div>
              <div class="list-item-area">
                <div class="area-title">
                  玻璃纤维纱检测数据
                  <span>版本号：V1.10</span>
                </div>
                <div class="area-desc">
                  玻璃先问纱检测数据包括：线密度、含水率、可燃物含量、撕裂强度、硬挺度、悬垂度、短切率分散率、丙酮溶解度等
                </div> 
                <div class="area-foot">
                  <img src="../../assets/data-menu2.png" alt="">
                  <span>创建时间：2012-02-23 14:27 跟新时间：2012-02-23 14:27 调用次数：15</span>
                </div>
              </div>

              <div class="list-item-operation">
                <el-button type="text">启用</el-button>
                <div class="custom-line"></div>
                <el-button type='text'>修改</el-button>
                <div class="custom-line"></div>
                <el-button type="text">删除</el-button>
              </div>
            </div>
             <div class="content-list-item">
              <el-checkbox></el-checkbox>
              <div class="list-item-icon">
                <img src="../../assets/data-menu1.png" alt="">
              </div>
              <div class="list-item-area">
                <div class="area-title">
                  玻璃纤维纱检测数据
                  <span>版本号：V1.10</span>
                </div>
                <div class="area-desc">
                  玻璃先问纱检测数据包括：线密度、含水率、可燃物含量、撕裂强度、硬挺度、悬垂度、短切率分散率、丙酮溶解度等
                </div> 
                <div class="area-foot">
                  <img src="../../assets/data-menu2.png" alt="">
                  <span>创建时间：2012-02-23 14:27 跟新时间：2012-02-23 14:27 调用次数：15</span>
                </div>
              </div>

              <div class="list-item-operation">
                <el-button type="text" class="color-red">停用</el-button>
                <div class="custom-line"></div>
                <el-button type='text'>修改</el-button>
                <div class="custom-line"></div>
                <el-button type="text">删除</el-button>
              </div>
            </div>
             <div class="content-list-item">
              <el-checkbox></el-checkbox>
              <div class="list-item-icon">
                <img src="../../assets/data-menu1.png" alt="">
              </div>
              <div class="list-item-area">
                <div class="area-title">
                  玻璃纤维纱检测数据
                  <span>版本号：V1.10</span>
                </div>
                <div class="area-desc">
                  玻璃先问纱检测数据包括：线密度、含水率、可燃物含量、撕裂强度、硬挺度、悬垂度、短切率分散率、丙酮溶解度等
                </div> 
                <div class="area-foot">
                  <img src="../../assets/data-menu2.png" alt="">
                  <span>创建时间：2012-02-23 14:27 跟新时间：2012-02-23 14:27 调用次数：15</span>
                </div>
              </div>

              <div class="list-item-operation">
                <el-button type="text">启用</el-button>
                <div class="custom-line"></div>
                <el-button type='text'>修改</el-button>
                <div class="custom-line"></div>
                <el-button type="text">删除</el-button>
              </div>
            </div>
             <div class="content-list-item">
              <el-checkbox></el-checkbox>
              <div class="list-item-icon">
                <img src="../../assets/data-menu1.png" alt="">
              </div>
              <div class="list-item-area">
                <div class="area-title">
                  玻璃纤维纱检测数据
                  <span>版本号：V1.10</span>
                </div>
                <div class="area-desc">
                  玻璃先问纱检测数据包括：线密度、含水率、可燃物含量、撕裂强度、硬挺度、悬垂度、短切率分散率、丙酮溶解度等
                </div> 
                <div class="area-foot">
                  <img src="../../assets/data-menu2.png" alt="">
                  <span>创建时间：2012-02-23 14:27 跟新时间：2012-02-23 14:27 调用次数：15</span>
                </div>
              </div>

              <div class="list-item-operation">
                <el-button type="text">启用</el-button>
                <div class="custom-line"></div>
                <el-button type='text'>修改</el-button>
                <div class="custom-line"></div>
                <el-button type="text">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
export default {
    name:'DataMenu',
    data(){
      return {
        contentList:[
          '玻璃纤维产品（350）',
          '碳纤维产品（350）',
          '纤维增强塑料产品（35）',
          '绝热材料制品（350）',
          '玻璃（350）',
          '建筑材料（350）',
          '矿物棉（350）',
          '化工产品（350）',
          '水、土、气（350）',
        ],
        type:''
      }
    }
}
</script>

<style lang="scss">
  .mr-10{
    margin-right:10px;
  }
  .color-red{
    color:red;
  }
  .data-menu{
    display: flex;
    .menu-left{
      .list-title{
        padding:10px 30px;
        border-bottom:1px solid #ccc;
        span{
          margin:0 30px;
          font-size:16px;
        }
        
      }
      .list-content{
        .list-item{
          list-style-type: none;
          font-size:14px;
          padding:10px 40px;
          i{
            color:#409eff;
          }
        }
        .list-item:hover{
          background-color:#eee;
        }
      }
    }
    .menu-right{
      flex:1;
      padding:30px;
      border-left:1px solid #ccc;
      .form-search{
        border-bottom:1px dotted #ccc;
        .form-item .el-form-item__content .el-input .el-input__inner{
          width:300px;
        }
       
      }

      .content{
        padding-top:30px;
        .content-header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size:16px;
        }
        .content-list{
          padding: 10px 0;
          .content-list-item{
            border:1px solid #ccc;
            border-radius:5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:20px 10px 10px;
            margin-top:30px;
            .list-item-icon{
              img{
                width:60px;
                height:60px;
              }
            }
            .list-item-area{
              .area-title{
                font-size:28px;
                font-weight: bold;
                span{
                  font-size:16px;
                  color:#A2A2A2;
                  font-weight: normal;
                }
              }
              .area-desc{
                font-size:16px;
                padding:10px 0;
                color:#7C7C7C;
              }
              .area-foot{
                display: flex;
                // justify-content: space-between;
                align-items: center;
                img{
                  width:180px;
                }
                span{
                  margin-left:30px;
                  font-size:16px;
                  color:#BEBEBE;
                }
              }
            }
            .list-item-operation{
              width:150px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .custom-line{
                height:18px;
                border-right:1px solid #ccc;
              }
            }
          }
          
        }
      }
    }
  }
</style>