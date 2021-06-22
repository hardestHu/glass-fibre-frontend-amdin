<template>
  <div class="data-monitor">
      <div class="form-search">
        <el-form label-width="80px" inline>
            <el-form-item class="form-item">
              <el-input placeholder="请输入数据资源名称/部门名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select>
                <el-option label="调用方1" value="1"></el-option>
                <el-option label="调用方2" value="2"></el-option>
                <el-option label="调用方3" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select>
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
              width="200"
              align="center">
            </el-table-column>
            <el-table-column
              prop="param"
              label="调用记录名称"
              align="center"
             >
            </el-table-column>
            <el-table-column
              prop="belong"
              label="调用内容"
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

</template>

<script>
export default {
    name:'DataMonitor',
    data(){
      return {
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
      }
    }
}
</script>

<style lang="scss">
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
  }
</style>