<template>
  <div>
    <div class="filter">
      <el-button
      class="filter-item"
      style="margin-left: 10px"
      type="primary"
      icon="el-icon-edit"
      @click="handleCreate"
    >
      Add
    </el-button>
    </div>
    <el-table
      :data="tableData"
      v-loading="listLoading"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
    >
      <el-table-column prop="image" label="图片" sortable width="360">
        <template slot-scope="{ row }">
          <img :src="row.image" min-width="300" height="200" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="guidePrice" label="指导价（万）"></el-table-column>
      <el-table-column prop="rate" label="评分"></el-table-column>
      <el-table-column prop="tag" label="标签"> </el-table-column>
      <el-table-column prop="isHalted" label="在售/停售">
        <template slot-scope="{ row }">
          <el-tag :type="row.isHalted | statusFilter">
            {{ row.isHalted ? "停售" : "在售" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleToCarType(scope.$index, scope.now)"
          >
            查看车型
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="图片" prop="image">
          <el-input v-model="temp.image" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="指导价" prop="guidePrice">
          <el-input v-model="temp.guidePrice" />
        </el-form-item>
        <el-form-item label="评分" prop="rate">
          <el-input v-model="temp.rate" />
        </el-form-item>
        <el-form-item label="标签" prop="tag">
          <el-input v-model="temp.tag" />
        </el-form-item>
        <el-radio-group v-model="temp.isHalted">
          <el-radio :label="false">在售</el-radio>
          <el-radio :label="true">停售</el-radio>
        </el-radio-group>
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
  fetchSeriesList,
  createSeries,
  updateSeries,
  deleteSeries,
} from "@/api/table";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        true: "danger",
        false: "success",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      listLoading: true,
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "创建",
      },
      dialogFormVisible: false,
      temp: {
        id: undefined,
        name: "",
        image: "",
        guidePrice: "",
        rate: "",
        isHalted: "",
        tag: "",
      },
      tableData: [],
      total: 0,
      listQuery: {
        page: 1,
        size: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
    };
  },
  created() {
    this.getSeriesList();
  },
  methods: {
    getSeriesList() {
      this.listLoading = true;
      fetchSeriesList(this.$route.params.seriesId).then((response) => {
        this.tableData = response.data.items;
        this.total = response.data.total;
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleToCarType(index, row) {
      let cartypeId = this.tableData[index].id;
      this.$router.push({
        name: "车型列表",
        params: {
          cartypeId,
        },
      });
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        image: "",
        guidePrice: "",
        rate: "",
        isHalted: "",
        tag: "",
      };
    },
    handleCreate(index, row) {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    createData() {
      this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
      createSeries(this.temp).then((response) => {
        if (response.data == "success") {
          this.tableData.unshift(this.temp);
          this.dialogFormVisible = false;
          this.$notify({
            title: "Success",
            message: "Created Successfully",
            type: "success",
            duration: 2000,
          });
        } else {
          this.$notify({
            title: "Failure",
            message: "Created failed",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    handleUpdate(index, row) {
      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
    },
    updateData() {
      const tempData = Object.assign({}, this.temp);
      updateSeries(tempData).then((response) => {
        if (response.data == "success") {
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
            message: "Update failed",
            type: "error",
            duration: 2000,
          });
        }
      });
    },
    handleDelete(index, row) {
      deleteSeries(row).then((response) => {
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
  },
};
</script>
<style scoped>
.filter{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>