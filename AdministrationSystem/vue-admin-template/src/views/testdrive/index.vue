<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
    >
    <el-table-column prop="date" label="日期" sortable width="180">
    </el-table-column>
      <el-table-column prop="series" label="车系" sortable width="180">
      </el-table-column>
      <el-table-column prop="type" label="车型" width="180"> </el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button
            v-if="row.status != '待处理'"
            size="mini"
            type="success"
            @click="handleModifyStatus(row, '待处理')"
          >
            撤销
          </el-button>
          <el-button
            v-if="row.status != '已处理'"
            size="mini"
            @click="handleModifyStatus(row, '已处理')"
          >
            处理
          </el-button>
          <!-- <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            Delete
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="total" :page-size="listQuery.size" :current-page.sync="listQuery.page" @current-change="handlePageTurning">
    </el-pagination>
  </div>
</template>
<script>
import { fetchTestDriveList, updateTestDrive } from "@/api/table";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
       "待处理": "info",
        "已处理": "success",
        "deleted": "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      listLoading: true,
      tableData: [],
      total:0,
      listQuery: {
        page: 1,
        size: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
    };
  },
  methods: {
    getTestDriveList() {
      this.listLoading = true;
      fetchTestDriveList(this.listQuery.page).then((response) => {
        this.tableData = response.data.items;
        this.total = response.data.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleModifyStatus(row, status) {
      updateTestDrive().then((response) => {
        if (response.data == "success") {
          this.$message({
            message: "操作Success",
            type: "success",
          });
          row.status = status;
        } else {
            this.$message({
            message: "操作Failed",
            type: "error",
          });
        }
      }).catch(err=>{
          this.$message({
            message: "未获取到返回值",
            type: "error",
          });
          console.log(err)
      });
    },
    // handleDelete(row, index) {
    //   this.$notify({
    //     title: "Success",
    //     message: "Delete Successfully",
    //     type: "success",
    //     duration: 2000,
    //   });
    //   this.tableData.splice(index, 1);
    // },
    handlePageTurning(e){
      this.listQuery.page=e;
      this.getTestDriveList()
    }
  },
  created() {
    this.getTestDriveList();
  },
};
</script>
<style scoped>
</style>