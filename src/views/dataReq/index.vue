<template>
  <div class="data-req">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>数据需求</el-breadcrumb-item>
        <el-breadcrumb-item>需求详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="data-req-content">
      <div class="content-title">玻璃纤维产品检测数据共享</div>
      <div class="content-list">
        <div class="list-item">
          <div class="list-title">基本信息</div>
          <div class="list-desc-special">  
            <ul>
                <el-row>
                 <el-col :span="6" v-for="(item,index) in descTitleList"
                :key="index">
                    <li :class="{'special-li': index == 3}"> 
                      <span class="f-span">{{item.name}}</span>
                      <span class="l-span">{{item.value}}</span>
                    </li>
                 </el-col>
                </el-row>
            </ul>
            <ul class="special-ul">
              <el-row>
                <el-col :span="6">
                  <li>
                    <span class="f-span">数据调用方式</span>
                    <span class="l-span">通知</span>
                  </li>
                </el-col>
                <el-col :span="18">
                  <li class="special-li">
                    <span class="f-span">通知接口地址</span>
                    <span class="l-span">23267&bd_vid=898309238909898393</span>
                  </li>
                </el-col>
              </el-row>
            </ul>
            <ul class="special-ul">
              <el-row>
                <el-col :span="24">
                  <li class="special-li">
                    <span class="f-span">需求描述</span>
                    <span class="l-span">由南京航空航天大学向南京玻璃纤维研究院设计共享玻璃纤维检测数据，数据均需经过脱敏处理，且需经过南京航空航天大学授权确认。</span>
                  </li>
                </el-col>
              </el-row>
            </ul>
          </div>
        </div>
        <div class="list-item">
          <div class="list-title">脱敏参数</div>
          <el-table
            class="custom-table"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="参数名称"
              width="200"
              align="center">
            </el-table-column>
            <el-table-column
              prop="param"
              label="参数字段"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="belong"
              label="所属表单"
              width="200"
              align="center">
           </el-table-column>
            <el-table-column
              prop="type"
              label="参数类型"
              align="center">
            </el-table-column>
          </el-table>
        </div>
        <div class="list-item">
          <div class="list-title">共享参数</div>
           <el-table
            class="custom-table"
            :data="tableData1"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="参数名称"
              width="200"
              align="center">
            </el-table-column>
            <el-table-column
              prop="param"
              label="参数字段"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="belong"
              label="所属表单"
              width="200"
              align="center">
           </el-table-column>
            <el-table-column
              prop="type"
              label="参数类型"
              align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'DataReq',
    data(){
      return {
        descTitleList:[
          {
          name:"需求编号",
          value:'QW19050145',},
          {
          name:"数据需求方",
          value:'南京玻璃纤维研究设计院',},
          {
          name:"数据提供方",
          value:'南京航空航天大学',},
          {
          name:"需求事项",
          value:'玻璃纤维产品检测数据共享',}
        ],
        tableData:[
          {
            name: '委托单位',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },
            {
            name: '送样者',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },  {
            name: '委托时间',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          }
          
        ],
        tableData1:[
          {
            name: '样品名称',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },
            {
            name: '样品要求',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },  {
            name: '校验类别',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },
          {
            name: '样品状态',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },
           {
            name: '检查依据',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          },
          {
            name: '校验结论',
            param: 'wtdw',
            belong: 'sjbg(送检报告)',
            type: 'string',
          }
          
        ]
      }
    }
}
</script>

<style lang="scss">
  .data-req{
    .bread-crumb{
      padding:15px 30px;
      border-bottom:1px solid #ccc;
    }
    .data-req-content{
      padding:30px;
      .content-title{
        font-size:20px;
        font-weight: bold;
      }
      .content-list{
        .list-title{
          border-left:3px solid #409eff;
          font-size:18px;
          padding:0 10px 0;
          margin:20px 0;
        }
        .list-desc-special{
          font-size:16px;
          ul li{
            border-top:1px solid #ddd;
            border-left:1px solid #ddd;
            border-bottom:1px solid #ddd;
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
            color:#999
          }
          ul.special-ul li{
            border-top:0px;
          }
          .special-li{
            border-right:1px solid #ddd;
          }
          
        }
      }

    }
    .custom-table{
      tr th{
        background: #ddd;
        font-size:16px;
        font-weight:normal;
        color:#000;
      }
    }
  }
</style>