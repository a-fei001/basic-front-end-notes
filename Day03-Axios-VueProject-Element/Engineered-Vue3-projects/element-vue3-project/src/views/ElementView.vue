<!-- 到element-plus官网复制粘贴即可 -->

<template>
  <!-- button 按钮 -->
  <div class="mb-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
    >
      {{ button.text }}
    </el-button>
  </div>

  <br><br>

  <!-- table 表格 -->
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

  <br><br>

  <!-- Pagination 分页 -->
  <el-pagination background layout="sizes, prev, pager, next, jumper, ->, total" :total="1000"
    v-model:current-page="currentPage2"
    v-model:page-size="pageSize2"
    :page-sizes="[100, 200, 300, 400]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />

  <br><br>

  <!-- Dialog 对话框（表单） -->
   <!-- 按钮部分 -->
  <el-button plain @click="dialogFormVisible = true">
    Open a Form nested Dialog
  </el-button>
   <!-- 对话框部分 -->
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 对话框内部的两个按钮 Confirm & Cancel -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-button v-on:click="showInfo()">输出对话框中填入的数据</el-button>
  
</template>

<script setup lang="ts">
import { ComponentSize } from "element-plus"
import { Component, reactive, ref } from "vue"

/* button */
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const

/* table */
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

/* pagination */
const currentPage2 = ref(5);
const pageSize2 = ref(100);
const handleSizeChange = (val: number) => {
  alert('每页记录数目发生改变');
}
const handleCurrentChange = (val: number) => {
  alert('页数发生改变');
}

/* Dialog */
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
function showInfo(){
    alert(form.name + "  " + form.region);
}
</script>

<style scoped>
/* table */
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>


