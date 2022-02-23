function myFunction() {
  var sheetId = "1g9xAnvJUYmClJqKXF4C1p7TMIt6uf0BUymw2Rp7rUbY"//---> seed id //
  var formId = "1EzcNoVPJmPJ6XyhQrnmtXScfDvLYJEY11_WKO8pD_TI"//---> form id //
  var ss = SpreadsheetApp.openById(sheetId)
  var sheet = ss.getSheetByName("Form Responses 1")
  var form = FormApp.openById(formId)
  var data = [...new Set(sheet.getDataRange().getDisplayValues().map(row=> row[2]))].join('|')
  var item = form.getItems().filter(item=>item.getTitle() == 'ชี่อ นามสกุล')[0].asTextItem()
  var pattern = `(${data})`
  var textval = FormApp.createTextValidation().setHelpText("เอ่ะ.. รายชื่อได้ลงทะเบียนไปก๋อนหน้านี้แล้วนะ!! ถ้าหากยังไม่ได้ลง โปรดติดต่อที่ปุ่มลิ้งข้อความข้างล่างได้เลย^^").requireTextDoesNotMatchPattern(pattern).build()
      item.setValidation(textval)
}

