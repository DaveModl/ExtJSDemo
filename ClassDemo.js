
// 定义类的语法：
// Ext.define(className,classMember/properties,callBackFunction)
// 名称，属性/成员---定义类的行为，回调函数（可选）类成功调用时会调用回调函数
Ext.define(studentApp.view.StudentDeatilsGrid, {
    extend : 'Ext.grid.GridPanel',
    id : 'studentsDetailsGrid',
    store : 'StudentsDetailsGridStore',
    renderTo : 'studentsDetailsRenderDiv',
    layout : 'fit',
    columns : [{
        text : 'Student Name',
        dataIndex : 'studentName'
    },{
        text : 'ID',
        dataIndex : 'studentId'
    },{
        text : 'Department',
        dataIndex : 'department'
    }]
});

//创建对象
var studentObject = new student();
studentObject.getStudentName();
//create()
Ext.create('Ext.Panel', {
    //版面必须呈现的元素
    renderTo: 'helloWorldPanel',
    //宽，高，标题，html内容
    height: 200,
    width: 600,
    title: 'Hello world',
    html: 'First Ext JS Hello World Program'
});
//extend,将A类功能应用于B类
Ext.define(studentApp.view.StudentDetailsGrid, {
    extend : 'Ext.grid.GridPanel',

});
//mixins 在Controller中，没有继承的情况下B类使用A类
mixins : {
    commons : 'DepartmentApp.utils.DepartmentUtils'
},
