## 1.1.0（2021-06-22）
- 修复 只写setRules方法而导致校验不生效的Bug
- 修复 由上个办法引发的错误提示文字错位的Bug
## 1.0.48（2021-06-21）
- 修复 不设置 label 属性 ，无法设置label插槽的问题
## 1.0.47（2021-06-21）
- 修复 不设置label属性，label-width属性不生效的bug
- 修复 setRules 方法与rules属性冲突的问题
## 1.0.46（2021-06-04）
- 修复 动态删减数据导致报错的问题
## 1.0.45（2021-06-04）
- 新增 modelValue 属性 ，value 即将废弃
## 1.0.44（2021-06-02）
- 新增 uni-forms-item 可以设置单独的 rules
- 新增 validate 事件增加 keepitem 参数，可以选择那些字段不过滤
- 优化 submit 事件重命名为 validate
## 1.0.43（2021-05-12）
- 新增 组件示例地址
## 1.0.42（2021-04-30）
- 修复 自定义检验器失效的问题
## 1.0.41（2021-03-05）
- 更新 校验器
- 修复 表单规则设置类型为 number 的情况下，值为0校验失败的Bug
## 1.0.40（2021-03-04）
- 修复 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
## 1.0.39（2021-02-05）
- 调整为uni_modules目录规范
- 修复 校验器传入 int 等类型 ，返回String类型的Bug