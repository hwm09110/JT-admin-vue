// 导出
//     outExe () {
//       this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         this.excelData = this.dataList // 你要导出的数据list。
//         this.export2Excel()
//       }).catch(() => {
//       })
//     },
//     export2Excel () {
//       var that = this
//       require.ensure([], () => {
//         const { exportJsonToExcel } = require('@/excel/Export2Excel') // 这里必须使用绝对路径
//         const tHeader = ['id', 'withNum', 'userId', 'name', 'amount', 'status', 'amountIn', 'amountSuccess', 'createTime'] // 导出的表头名
//         const filterVal = ['id', 'withNum', 'userId', 'name', 'amount', 'status', 'amountIn', 'amountSuccess', 'createTime'] // 导出的表头字段名
//         const list = that.excelData
//         const data = that.formatJson(filterVal, list)
//         // let time1 = ''
//         // let time2 = ''
//         // if (this.start !== '') {
//         //   time1 = that.moment(that.start).format('YYYY-MM-DD')
//         // }
//         // if (this.end !== '') {
//         //   time2 = that.moment(that.end).format('YYYY-MM-DD')
//         // }
//         exportJsonToExcel(tHeader, data, `提现管理excel`)// 导出的表格名称，根据需要自己命名 [${time1}-${time2}]
//       })
//     },
//     formatJson (filterVal, jsonData) {
//       return jsonData.map(v => filterVal.map(j => v[j]))
//     }

// importf (obj) {
//       let _this = this
//       this.file = event.currentTarget.files[0]
//       var rABS = false // 是否将文件读取为二进制字符串
//       var file = this.file

//       FileReader.prototype.readAsBinaryString = function (f) {
//         var binary = ''
//         var rABS = false // 是否将文件读取为二进制字符串
//         var workbook // 读取完成的数据
//         // var excelData
//         var reader = new FileReader()
//         reader.onprogress = function (e) {
//           let total = file.size
//           _this.progress = (e.loaded / total) * 100
//           console.log(_this.progress)
//         }
//         reader.onload = function (e) {
//           try {
//             var bytes = new Uint8Array(reader.result)
//             var length = bytes.byteLength
//             for (var i = 0; i < length; i++) {
//               binary += String.fromCharCode(bytes[i])
//             }
//             if (rABS) {
//               workbook = XLSX.read(btoa(fixdata(binary)), { // 手动转化
//                 type: 'base64'
//               })
//             } else {
//               workbook = XLSX.read(binary, {
//                 type: 'binary'
//               })
//             }
//             // excelData = []
//           } catch (e) {
//             console.log('文件类型不正确')
//             return
//           }
//           var fromTo = ''
//           for (var sheet in workbook.Sheets) {
//             if (workbook.Sheets.hasOwnProperty(sheet)) {
//               fromTo = workbook.Sheets[sheet]['!ref']
//               console.log(fromTo, 'fromTo')
//               _this.excelData = _this.excelData.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
//             }
//           }
//           console.log(_this.excelData)
//         }
//         reader.readAsArrayBuffer(f)
//       }
//       var reader = new FileReader()
//       if (rABS) {
//         reader.readAsArrayBuffer(file)
//       } else {
//         reader.readAsBinaryString(file)
//       }
//     }
