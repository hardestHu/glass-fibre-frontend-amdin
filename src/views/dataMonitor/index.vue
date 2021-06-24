<template>
  <div class="data-monitor">
      <div class="form-search">
        <el-form label-width="80px" inline>
            <el-form-item class="form-item">
              <el-input placeholder="请输入数据资源名称/部门名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="type1">
                <el-option label="调用方1" value="1"></el-option>
                <el-option label="调用方2" value="2"></el-option>
                <el-option label="调用方3" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="type2">
                <el-option label="提供方1" value="1"></el-option>
                <el-option label="调用方2" value="2"></el-option>
                <el-option label="调用方3" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="">
              <el-button type="primary" class="custom-btn">搜索</el-button>
            </el-form-item>
          </el-form>
      </div>
      <div>
           <el-table
            class="custom-table"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="调用记录ID"
              align="center">
              <template slot-scope="scope">
                <span @click="seeProcess(scope.$index)" class="custom-id">{{scope.row.id}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="调用记录名称"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="content"
              label="调用内容"
              align="center">
           </el-table-column>
            <el-table-column
              prop="callPart"
              label="调用方"
              align="center"
              width="100">
            </el-table-column>
            <el-table-column
              prop="applyPart"
              label="提供方"
              align="center">
            </el-table-column>
            <el-table-column
              prop="callTime"
              label="调用时间"
              align="center"
              width="150">
            </el-table-column>
            <el-table-column
              prop="publiKey"
              label="授权方公钥"
              align="center"
              width="350">
            </el-table-column>
            <el-table-column
              prop="callResult"
              label="调用结果"
              align="center">
              <template slot-scope="scope">
                
                <el-tag :type="scope.row.callResult === 1?'success':'danger'">
                  {{scope.row.callResult === 1? '正常':'异常'}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center">      
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="text"
                    @click="seeDetail(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>
          </el-table>  
      </div> 
      <div class="pagination-site">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          backgrounds
          layout="sizes, prev, pager, next"
          :page-sizes="[10, 20, 50]"
          :page-size="10"
          :total="100">
        </el-pagination>
      </div>
      
      <el-dialog class="custom-dialog" :visible.sync="detailDialog" width="650px">
        <template slot="title">
          <span>调用详情-0000</span>
          <span class="custom-btn">已上链</span>
        </template>
        <div class="content-list">
          <div class="list-item">
            <div class="list-title">
              调用信息
              <span class="list-tips">正常</span>
            </div>
           <div class="list-desc-special">  
            <ul>
                <el-row>
                 <el-col :span="24" v-for="(item,index) in callList"
                :key="index">
                    <li :class="{'special-li': index == 3}"> 
                      <span class="f-span">{{item.name}}</span>
                      <span class="l-span">{{item.value}}</span>
                    </li>
                 </el-col>
                </el-row>
            </ul>
            
          </div>
          </div>

          <div class="list-item">
            <div class="list-title">
              授权信息
              <span  class="list-tips">正常</span>
            </div>
            <div class="list-desc-special">  
                <ul>
                  <el-row>
                    <el-col :span="24" v-for="(item,index) in authList"
                    :key="index">
                        <li :class="{'special-li': index == 2}"> 
                          <span class="f-span">{{item.name}}</span>
                          <span class="l-span">{{item.value}}</span>
                        </li>
                    </el-col>
                  </el-row>
                </ul>
            </div>
          </div>

          <div class="list-item">
            <div class="list-title">
              调用数据项
              <span  class="list-tips">正常</span>
            </div>
            <div>
              <el-table :data="gridData" border class="custom-table">
                <el-table-column property="name" label="参数名称"></el-table-column>
                <el-table-column property="param" label="参数字段"></el-table-column>
                <el-table-column property="belong" label="所属表单"></el-table-column>
                <el-table-column property="param" label="参数字段"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>

       
      </el-dialog>

      <el-dialog title="上链进度" class="custom-dialog" :before-close="beforeCloseDialog" :visible.sync="progressDialog" width="1200px">
        
        <el-steps class="custom-step" :active="activeStep" align-center>
          <el-step title="上链前数据处理" >
            <template slot="icon">
              <div :class="{'custom-icon':true,'active': 1 > activeStep }">
                <span>1</span>
              </div>
            </template> 
            <template slot="description">          
              <div class="desc-date">{{(activeStep >= 1) ? '2021-06-12 12:12:12':'待处理'}}</div>
              <div class="desc-content" v-if="activeStep >= 1">
                <i class="el-icon-circle-check"></i>
                <span>记录打包</span>
              </div>
              <div class="desc-content" v-if="activeStep >= 1">
                <i class="el-icon-circle-check"></i>
                <span>数字签名</span>
              </div>
            </template>
          </el-step>
          <el-step title="链上广播">
            <template slot="icon">
              <div :class="{'custom-icon':true,'active': 2 > activeStep }">
                <span>2</span>
              </div>
            </template> 
            <template slot="description">          
              <div class="desc-date">{{(activeStep >= 2) ? '2021-06-12 12:12:12':'待处理'}}</div>
              <div class="desc-content" v-if="activeStep >= 2">
                <i class="el-icon-circle-check"></i>
                <span>节点广播</span>
              </div>
              <div class="desc-content" v-if="activeStep >= 2">
                <i class="el-icon-circle-check"></i>
                <span>交易打包</span>
              </div>
            </template>
          </el-step>
          <el-step title="区块共识">
            <template slot="icon">
              <div :class="{'custom-icon':true,'active': 3 > activeStep }">
                <span>3</span>
              </div>
            </template> 
            <template slot="description">          
              <div class="desc-date">{{(activeStep >= 3) ? '2021-06-12 12:12:12':'待处理'}}</div>
              <div class="desc-content" v-if="activeStep >= 3">
                <i class="el-icon-circle-check"></i>
                <span>共识处理</span>
              </div>
              <div class="desc-content" v-if="activeStep >= 3">
                <i class="el-icon-circle-check"></i>
                <span>写入区块</span>
              </div>
            </template>
          </el-step>
          <el-step title="合约逻辑处理">
            <template slot="icon">
              <div :class="{'custom-icon':true,'active': 4 > activeStep }">
                <span>4</span>
              </div>
            </template> 
            <template slot="description">          
              <div class="desc-date">{{(activeStep >= 4) ? '2021-06-21 12:12:12': '待处理'}}</div>
              <div class="desc-content" v-if="activeStep >= 4">
                <i class="el-icon-circle-check"></i>
                <span>合约处理</span>
              </div>
            </template>
          </el-step>
          <el-step title="上链完成">
            <template slot="icon">
              <div :class="{'custom-icon':true,'active': 5 > activeStep }">
                <span>5</span>
              </div>
            </template> 
            <template slot="description">          
              <div class="desc-date">{{(activeStep >= 5) ? '2021-06-21 12:12:12': '待处理'}}</div>
            </template>
          </el-step>
        </el-steps>
        <div class="content-list" v-if="isEnded">
          <div class="list-item">
            <div class="list-title">
              存在记录
            </div>
            <div>
              <el-table :data="progressData" border class="custom-table">
                <el-table-column property="provide" label="数据提供方"></el-table-column>
                <el-table-column property="receive" label="数据获取方"></el-table-column>
                <el-table-column property="authPeople" label="授权人"></el-table-column>
                <el-table-column property="content" label="数据共享内容"></el-table-column>
                <el-table-column property="detailDate" label="交易时间"></el-table-column>
                <el-table-column property="detailHash" label="交易哈希"></el-table-column>
                <el-table-column property="areaHeight" label="存在区块高度"></el-table-column>
              </el-table>
            </div>
          </div>  
        </div>

        <div slot="footer">
           <el-button @click="beforeCloseDialog">取 消</el-button>
           <el-button type="primary" class="custom-btn" @click="confirmDialog">确 定</el-button>
        </div>
      </el-dialog>

   
  </div>

</template>

<script>
export default {
    name:'DataMonitor',
    data(){
      return {
        type1:'1',
        type2:'2',
        currentPage2: 5,
        detailDialog: false,
        progressDialog: false,
        activeStep:2,
        isEnded:true,
         tableData:[
          {
            id:'0000',
            name:'玻璃纤维产品检测数据共享',
            content:'玻璃纤维纱检测数据',
            callPart:'玻纤院',
            applyPart:'南京航空航天大学',
            callTime:"2020-06-11 14:20",
            publiKey:'9F80FAE390048F938989404890208F2939FSA',
            callResult:1,
          },
           {
            id:'0000',
            name:'玻璃纤维产品检测数据共享',
            content:'玻璃纤维纱检测数据',
            callPart:'玻纤院',
            applyPart:'南京航空航天大学',
            callTime:"2020-06-11 14:20",
            publiKey:'9F80FAE390048F938989404890208F2939FSA',
            callResult:0,
          },
          
        ],
        callList:[
          {
            name:'调用方',
            value:'南京玻璃纤维研究设计院'
          },
          {
            name:'调用内容',
            value:'亭波玻璃纤维纱检测数据'
          },
            {
            name:'调用需求事项',
            value:'玻璃纤维产品检测数据共享'
          },
            {
            name:'调用时间',
            value:'2021-06-12 14:20'
          }
        ],
        authList:[
          {name:'授权人',value:"南京航空航天大学"},
          {name:'授权时间',value:"2021-06-21 12:12"},
          {name:'授权公钥',value:"FDSFA939943FA9939JFLAJ939993939"},
        ],
        gridData:[
          {name:'样品明称',param:'wtdw',belong:'sjbg(送检报告)'},
          {name:'检验要求',param:'wtdw',belong:'sjbg(送检报告)'},
          {name:'检验类别',param:'wtdw',belong:'sjbg(送检报告)'},
          {name:'样品状态',param:'wtdw',belong:'sjbg(送检报告)'},
          {name:'检查依据',param:'wtdw',belong:'sjbg(送检报告)'},
          {name:'检验结论',param:'wtdw',belong:'sjbg(送检报告)'}
        ],
        progressData:[
          {
            provide:'南京航空航天大学',
            receive:'南京玻璃纤维设计研究院',
            authPeople:"南京航空航天大学数据共享管理员",
            content:"玻璃建委检测数据（QSW19050145号）",
            detailDate:"2021-06-21 12:13:34",
            detailHash:"shsjjiekjsljhjhdllaldjjfddkshjskkdhieils",
            areaHeight:452,
          }
        ],
        timeCount:''
      }
    },
    created(){
      for(let i=0; i < 3; i++){
        this.tableData = this.tableData.concat(this.tableData)
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    
      seeDetail(){
        this.detailDialog = true;
      },
      seeProcess(index){
        console.log(index)
        this.progressDialog = true;
        if((index % 2) === 0){
          this.activeStep = 0;
          this.isEnded = false;
          this.timeCount = setInterval(() => {
            if(this.activeStep === 3){
              clearInterval(this.timeCount)
            }else{
              this.activeStep++;   
            }
          }, 1500);
        }else{
          this.activeStep = 0;
         this.isEnded = false
          this.timeCount = setInterval(() => {
            if(this.activeStep === 5){
              this.isEnded = true;
              clearInterval(this.timeCount)
            }else{
              this.activeStep++;   
            }
          }, 1500);
        }
      },
      beforeCloseDialog(){
        console.log(1)
        this.progressDialog = false
        clearInterval(this.timeCount)
      },
      confirmDialog(){
        this.beforeCloseDialog()
      }
    },
    beforeDestroy(){
      clearInterval(this.timeCount)
    }
}
</script>

<style lang="scss">
  .custom-id{
    cursor:pointer;
    display: inline-block;
    color:#409eff;
  }
  .data-monitor{
    padding:0 30px;
    .form-search{
      padding-top: 20px;
      border-bottom:1px dotted #ccc;
    }

    .custom-table{
      tr th{
        background: #ddd;
        font-size:16px;
        font-weight:normal;
        color:#000;
      }
    }
    .pagination-site{
      float:right;
      margin:10px 0;
    }
    .custom-dialog{
      .el-dialog{
        min-height: 400px;
      }
      .el-dialog .el-dialog__header{
        background:linear-gradient(to right, #00152F, #0D3850);
        span{
          color:#fff;
          font-size:16px;
        }
        .custom-btn{
          margin-left:10px;
          padding:5px 10px;
          color:#42D1B2;
          border:1px solid #42D1B2;
          border-radius: 2px;
        }
      }
      .content-list{
        .list-title{
          border-left:3px solid #409eff;
          font-size:16px;
          padding:0 10px 0;
          margin:20px 0;
          .list-tips{
            padding:3px 10px;
            font-size:12px;
            color:#fff;
            background-color: #2F54EB;
            border-radius: 2px;
            margin-left:10px;
          }
        }

        .list-desc-special{
          font-size:16px;
          ul li{
            border-left:1px solid #ddd;
            border-top:1px solid #ddd;
            border-right:1px solid #ddd;
            
          }
          .special-li{
            border-bottom: 1px solid #ddd;
          }
          ul li span{
            display: inline-block;
            padding:10px;
            text-align: center;
          }
          
          ul li span.f-span{
            width:120px;
            background-color:#eee;
            border-right:1px solid #ddd;
          }
          ul li span.l-span{
            color:#555555
          }
        
          
        }
      }
    }
    .custom-step{
      .desc-date{
        font-size:12px;
        color:#8F8F8F;
        padding:10px 0;
      }
      .desc-content{
        margin-bottom:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          font-size:18px;
        }
        span{
          margin-left:5px;
          font-size:16px;
          color:#484848;
        }
      }
    }

    .custom-icon{
      width:40px;
      height:40px;
      border:1px solid #409eff;
      border-radius: 20px;
      background-color: #EEEEEE;
      position: absolute;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        width:30px;
        height:30px;
        background-color:#409eff;
        border-radius: 15px;
        color:#fff;
      }
    }
    .custom-icon.active{
      background-color: #fff;
      border-color:#EEEEEE;
      span{
        background-color:#EEEEEE;
        color:#ABABAB;
      }
    }

     
  }
</style>