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
      <el-table-column prop="year" label="年份" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="guidePrice" label="指导价（万）"></el-table-column>
      <el-table-column
        prop="minPrice"
        label="最低...起（万）"
      ></el-table-column>
      <el-table-column prop="onSale" label="在售/停售">
        <template slot-scope="{row}">
          <el-tag :type="row.onSale | statusFilter">
            {{ row.onSale?'在售':'停售' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
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
        <el-form-item label="年份" prop="year">
          <el-input v-model="temp.year" />
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="最低价" prop="minPrice">
          <el-input v-model="temp.minPrice" />
        </el-form-item>
        <el-form-item label="指导价" prop="guidePrice">
          <el-input v-model="temp.guidePrice" />
        </el-form-item>
        <el-radio-group v-model="temp.onSale">
          <el-radio :label="false">停售</el-radio>
          <el-radio :label="true">在售</el-radio>
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
import { fetchCarTypeList, createCarType, updateCarType, deleteCarType} from "@/api/table";
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        true: "success",
        false: "danger",
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
        year: "",
        onSale: "",
        minPrice: "",
        guidePrice: "",
      },
      tableData: [],
      
    };
  },
  created() {
    this.getCarTypeList();
  },
  methods: {
    getCarTypeList() {
      this.listLoading = true;
      fetchCarTypeList(this.$route.params.cartypeId).then((response) => {
        this.tableData = response.data.items;
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        year: "",
        onSale: "",
        minPrice: "",
        guidePrice: "",
      };
    },
    handleCreate(index, row) {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
    },
    createData() {
      this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
      createCarType(this.temp).then((response) => {
        if(response.data=='success'){
this.tableData.unshift(this.temp);
        this.dialogFormVisible = false;
        this.$notify({
          title: "Success",
          message: "Created Successfully",
          type: "success",
          duration: 2000,
        });
        }else{
          this.$notify({
          title: "Failure",
          message: "Created Failed",
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
      updateCarType(tempData).then((response) => {
        if(response.data=='success'){
const index = this.tableData.findIndex((v) => v.id === this.temp.id);
        this.tableData.splice(index, 1, this.temp);
        this.dialogFormVisible = false;
        this.$notify({
          title: "Success",
          message: "Update Successfully",
          type: "success",
          duration: 2000,
        });
        }else{
          this.$notify({
          title: "Failure",
          message: "Created Failed",
          type: "error",
          duration: 2000,
        });
        }
        
      });
    },
    handleDelete(index, row) {
      deleteCarType(row.id).then((response) => {
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
</style>