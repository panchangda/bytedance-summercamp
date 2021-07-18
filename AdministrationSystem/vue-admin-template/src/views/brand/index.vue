<template>
  <div>
    <el-button
      class="filter-item"
      style="margin-left: 10px"
      type="primary"
      icon="el-icon-edit"
      @click="handleCreate"
    >
      Add
    </el-button>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
    >
      <el-table-column prop="letter" label="首字母" sortable width="180">
      </el-table-column>
      <el-table-column prop="icon" label="图标" width="180">
        <template slot-scope="{ row }">
          <img :src="row.icon" min-width="40" height="40" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleToSeries(scope.$index, scope.now)"
          >
            查看品牌车系
          </el-button>
          <el-button size="mini" @click="handleUpdate(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="listQuery.size"
      :current-page.sync="listQuery.page"
      @current-change="handlePageTurning"
    >
    </el-pagination>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="首字母" prop="letter">
          <el-input v-model="temp.letter" />
        </el-form-item>
        <el-form-item label="图标地址" prop="icon">
          <el-input v-model="temp.icon" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> Cancel </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  fetchBrandList,
  createBrand,
  updateBrand,
  deleteBrand,
} from "@/api/table";
export default {
  data() {
    return {
      listLoading: true,
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "创建",
      },
      temp: {
        id: undefined,
        importance: 1,
        letter: "",
        name: "",
        icon: "",
      },
      dialogFormVisible: false,
      tableData: [],
      total: 0,
      listQuery: {
        page: 1,
        size: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
    };
  },
  created() {
    this.getBrandList();
  },
  methods: {
    getBrandList() {
      this.listLoading = true;
      fetchBrandList(this.listQuery).then((response) => {
        this.total = response.data.total;
        this.tableData = response.data.items;
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleToSeries(index, row) {
      let seriesId = this.tableData[index].id;
      this.$router.push({
        name: "车系列表",
        params: {
          seriesId,
        },
      });
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        letter: "",
        name: "",
        icon: "",
      };
    },
    handleCreate(index, row) {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    createData() {
      this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
      createBrand(this.temp).then(() => {
        this.tableData.unshift(this.temp);
        this.dialogFormVisible = false;
        this.$notify({
          title: "Success",
          message: "Created Successfully",
          type: "success",
          duration: 2000,
        });
      });
    },
    handleUpdate(index, row) {
      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
    },
    updateData() {
      const tempData = Object.assign({}, this.temp);
      updateBrand(tempData).then((response) => {
        if ((response.data = "success")) {
          const index = this.tableData.findIndex((v) => v.id === this.temp.id);
          this.tableData.splice(index, 1, this.temp);
          this.dialogFormVisible = false;
          this.$notify({
            title: "Success",
            message: "Update Successfully",
            type: "success",
            duration: 2000,
          });
        } else {
          this.$notify({
            title: "Failure",
            message: "Update Failed",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    handleDelete(index, row) {
      deleteBrand(row.id).then((response) => {
        if (response.data == "success") {
          this.$notify({
            title: "Success",
            message: "Delete Successfully",
            type: "success",
            duration: 2000,
          });
          this.tableData.splice(index, 1);
        } else {
          this.$notify({
            title: "Failure",
            message: "Update Failed",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    handlePageTurning(e) {
      this.listQuery.page = e;
      this.getBrandList();
    },
  },
};
</script>
<style scoped>
</style>