<template>
    <div class="common-layout">
      <el-container>

        <el-header height="200px">Header</el-header>

        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

      </el-container>
    </div>
  </template>


<style scoped>
.common-layout .el-container{
    
}
.common-layout .el-header{
    background-color: #909399;
}
.common-layout .el-container .el-aside{
    background-color: #606266;
}
.common-layout .el-container .el-main{
    background-color: #303133;
}
</style>